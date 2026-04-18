#!/usr/bin/env python3
"""
Launchpad Solutions blog thumbnail generator.

Generates 1200x750 PNG thumbnails for the Insights section using a
consistent "big stat" template system. Designed to be called from
Claude Code or run manually when publishing new articles.

Usage:
    python generate.py \\
        --headline "11.2%" \\
        --caption "Online raffle CAGR, 2025-2030" \\
        --category "Market Research" \\
        --motif bars \\
        --output ../../static/thumbnails/online-raffles-cagr.png

Motif options:
    bars   - ascending bar chart (good for growth/trend stories)
    dots   - dot grid (good for jurisdictional/coverage stories)
    pulse  - EKG pulse line (good for "pulse check" / status reports)
    none   - no motif, just the headline and caption

If --output is omitted, the file is written next to this script
using a slugified version of the caption.
"""

import argparse
import os
import random
import re
import sys

from PIL import Image, ImageDraw, ImageFont

# ---------- Template constants ----------

W, H = 1200, 750

# Launchpad brand palette
BG = "#F5D5C4"          # peach background
STAT = "#993C1D"        # dark burnt-orange for the hero number
SUBTITLE = "#712B13"    # dark brown for supporting text
ACCENT = "#D85A30"      # mid orange for chart/accent marks
ACCENT_LIGHT = "#F0997B"  # lighter orange for secondary accents
PILL_BG = "#FFFFFF"
PILL_TEXT = "#712B13"

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
FONT_DIR = os.path.join(SCRIPT_DIR, "fonts")
F_BOLD = os.path.join(FONT_DIR, "Poppins-Bold.ttf")
F_MED = os.path.join(FONT_DIR, "Poppins-Medium.ttf")


# ---------- Drawing helpers ----------

def draw_pill(draw, text, x, y, font, pad_x=20, pad_y=10):
    """Draw a rounded-rectangle category pill."""
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pill_w = tw + pad_x * 2
    pill_h = th + pad_y * 2 + 4
    draw.rounded_rectangle(
        [x, y, x + pill_w, y + pill_h],
        radius=pill_h // 2,
        fill=PILL_BG,
    )
    tx = x + (pill_w - tw) // 2 - bbox[0]
    ty = y + (pill_h - th) // 2 - bbox[1]
    draw.text((tx, ty), text, fill=PILL_TEXT, font=font)


def draw_bars(draw, x, y, bars=(30, 55, 85, 140), bar_w=32, gap=14):
    """Ascending bar chart motif."""
    max_h = max(bars)
    for i, h in enumerate(bars):
        bx = x + i * (bar_w + gap)
        by = y + (max_h - h)
        color = STAT if i == len(bars) - 1 else ACCENT
        draw.rounded_rectangle([bx, by, bx + bar_w, y + max_h], radius=3, fill=color)


def draw_dots(draw, x, y, cols=12, rows=10, spacing=30, dot_r=6):
    """Dot grid with some highlighted dots (reproducible pattern)."""
    random.seed(7)
    total = cols * rows
    highlighted = set(random.sample(range(total), total // 5))
    for row in range(rows):
        for col in range(cols):
            cx = x + col * spacing
            cy = y + row * spacing
            idx = row * cols + col
            color = STAT if idx in highlighted else ACCENT_LIGHT
            draw.ellipse([cx - dot_r, cy - dot_r, cx + dot_r, cy + dot_r], fill=color)


def draw_pulse(draw, x, y, w=380, h=90):
    """EKG-style pulse line."""
    points = [
        (x, y + h // 2),
        (x + w * 0.25, y + h // 2),
        (x + w * 0.32, y + h // 2 - 5),
        (x + w * 0.37, y + h),
        (x + w * 0.42, y),
        (x + w * 0.47, y + h // 2 + 15),
        (x + w * 0.52, y + h // 2),
        (x + w, y + h // 2),
    ]
    draw.line(points, fill=STAT, width=5, joint="curve")


# ---------- Layout logic ----------

def fit_headline_size(text, max_width, start_size=240, min_size=80, font_path=F_BOLD):
    """Binary-search the largest font size that fits the headline in max_width."""
    dummy = Image.new("RGB", (10, 10))
    d = ImageDraw.Draw(dummy)
    size = start_size
    while size > min_size:
        font = ImageFont.truetype(font_path, size)
        bbox = d.textbbox((0, 0), text, font=font)
        if bbox[2] - bbox[0] <= max_width:
            return font
        size -= 10
    return ImageFont.truetype(font_path, min_size)


def render(headline, caption, category, motif, output_path):
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    # Category pill (top-left)
    pill_font = ImageFont.truetype(F_MED, 22)
    draw_pill(draw, category.upper(), 60, 60, pill_font)

    # Headline (auto-sized so long values like "Q1 '26" still fit)
    headline_font = fit_headline_size(headline, max_width=1080)
    # vertical anchor: put the headline baseline around y=500
    bbox = draw.textbbox((0, 0), headline, font=headline_font)
    text_h = bbox[3] - bbox[1]
    hy = 500 - text_h - bbox[1]
    draw.text((60, hy), headline, fill=STAT, font=headline_font)

    # Caption
    cap_font = ImageFont.truetype(F_MED, 32)
    draw.text((64, 560), caption, fill=SUBTITLE, font=cap_font)

    # Divider
    draw.rectangle([64, 620, 140, 625], fill=ACCENT)

    # Motif (bottom-right)
    if motif == "bars":
        draw_bars(draw, 940, 540)
    elif motif == "dots":
        draw_dots(draw, 720, 300)
    elif motif == "pulse":
        draw_pulse(draw, 760, 500)
    # "none" draws nothing

    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
    img.save(output_path, "PNG", optimize=True)
    return output_path


def slugify(text):
    text = re.sub(r"[^\w\s-]", "", text.lower())
    text = re.sub(r"[\s_-]+", "-", text).strip("-")
    return text or "thumbnail"


# ---------- CLI ----------

def main():
    parser = argparse.ArgumentParser(
        description="Generate a Launchpad Solutions blog thumbnail.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("--headline", required=True,
                        help='The hero stat or phrase (e.g. "11.2%%", "63", "Q1 \'26")')
    parser.add_argument("--caption", required=True,
                        help='Supporting caption under the headline')
    parser.add_argument("--category", required=True,
                        help='Category pill text (e.g. "Market Research")')
    parser.add_argument("--motif", default="none",
                        choices=["bars", "dots", "pulse", "none"],
                        help='Bottom-right graphic motif (default: none)')
    parser.add_argument("--output", default=None,
                        help='Output PNG path (default: <slug>.png next to script)')

    args = parser.parse_args()

    if args.output is None:
        args.output = os.path.join(SCRIPT_DIR, f"{slugify(args.caption)}.png")

    path = render(args.headline, args.caption, args.category, args.motif, args.output)
    print(f"Created: {path}")


if __name__ == "__main__":
    main()
