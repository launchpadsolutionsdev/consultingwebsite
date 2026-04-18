# Blog thumbnail generator

Generates 1200×750 PNG thumbnails for Launchpad Solutions Insights articles
using a consistent "big stat" template.

## Setup (one time)

```bash
pip install -r scripts/thumbnails/requirements.txt
```

## Generate a thumbnail

```bash
cd scripts/thumbnails
python generate.py \
    --headline "11.2%" \
    --caption "Online raffle CAGR, 2025-2030" \
    --category "Market Research" \
    --motif bars \
    --output ../../static/thumbnails/online-raffles-cagr.png
```

## Arguments

| Flag | Required | What it does |
|------|----------|--------------|
| `--headline` | yes | The hero stat or short phrase (e.g. `11.2%`, `63`, `Q1 '26`) |
| `--caption` | yes | One-line description under the headline |
| `--category` | yes | Category pill text (e.g. `Market Research`) — auto-uppercased |
| `--motif` | no | `bars`, `dots`, `pulse`, or `none` (default: `none`) |
| `--output` | no | Output path. Defaults to `<slug>.png` next to the script |

## Motif guide

- **bars** — growth stories, CAGR, trend reports
- **dots** — landscape/coverage pieces, jurisdictional reports
- **pulse** — quarterly pulse checks, status reports
- **none** — typography only, when no motif fits

## Using with Claude Code

There's a `CLAUDE.md` in this folder that tells Claude Code how to choose
inputs and when to run the script. Just ask Claude Code something like:

> "Generate a thumbnail for the new article about X"

...and it'll ask for the details it needs and run the script.

## Fonts

Poppins (Bold + Medium) is bundled in `fonts/`. Poppins is licensed under
the SIL Open Font License, which permits redistribution as part of this repo.
