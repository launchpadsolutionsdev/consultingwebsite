# Thumbnail generator — instructions for Claude Code

This folder contains a script that generates blog post thumbnails for the
Launchpad Solutions Insights section. Use it whenever a new article is added.

## What the thumbnails look like

1200×750 PNG, peach background, big burnt-orange headline (a stat or short
phrase), caption underneath, category pill top-left, optional motif
bottom-right. They form a consistent visual family across the Insights page.

## When to use this

Run this whenever a new Insights article is published, or when the user asks
for "a thumbnail" / "a cover image" / "a header image" for an article.

## How to run it

```bash
cd scripts/thumbnails
python generate.py \
    --headline "11.2%" \
    --caption "Online raffle CAGR, 2025-2030" \
    --category "Market Research" \
    --motif bars \
    --output ../../static/thumbnails/online-raffles-cagr.png
```

First run only: `pip install -r scripts/thumbnails/requirements.txt`

## Choosing the right inputs

**`--headline`** — the single most memorable thing in the article. Keep it
under ~8 characters for best visual impact. Good: `"11.2%"`, `"63"`,
`"Q1 '26"`, `"$12M"`. Bad: full sentences, long phrases. If the article
doesn't have a single hook stat, pick a short keyword or time reference.

**`--caption`** — one line that explains what the headline means. 6–10 words.
Good: `"Online raffle CAGR, 2025-2030"`, `"Jurisdictions mapped across US &
Canada"`, `"Pulse check: what's working in charitable gaming"`.

**`--category`** — matches the category pill on the live site. Typically
`"Market Research"` or `"Regulatory & Compliance"`. Written in the input
as mixed case; the script uppercases it for display.

**`--motif`** — pick based on the article's subject matter:
- `bars` — growth stories, CAGR pieces, trend reports, anything about
  something going up
- `dots` — coverage/landscape pieces, jurisdictional breakdowns, anything
  about a large number of items
- `pulse` — quarterly reports, status checks, "how's the industry doing"
  pieces
- `none` — leave this off if nothing fits; the typography alone carries it

**`--output`** — match the repo's convention for thumbnail paths. Confirm
with the user where thumbnails live in this repo before running, and use
a slugified filename that matches the article's URL slug.

## Workflow when the user publishes a new article

1. Ask the user for the article title and category if not already known.
2. Suggest 2–3 possible `--headline` + `--caption` + `--motif` combinations
   and let the user pick before generating. Don't guess silently — the
   headline is the most important editorial call in the thumbnail.
3. Once chosen, run the script with `--output` pointing at the right path
   for this repo's thumbnail folder.
4. Confirm the file was created and remind the user to add it to git.

## Extending the template

If the user wants a new motif, add a new draw function at the top of
`generate.py`, register it in the `--motif` choices list, and add a
branch in the `render()` function. Keep the same color palette so new
motifs stay visually consistent with the existing ones.

If the user wants to change the color palette, edit the constants at the
top of `generate.py` (BG, STAT, SUBTITLE, ACCENT, ACCENT_LIGHT). Don't
sprinkle hex codes elsewhere in the file.
