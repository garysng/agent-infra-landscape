# Contributing

Contributions should improve factual accuracy, source quality, or market coverage.

## Add Or Update A Company

1. Edit `data/sandboxes.json` or `data/agents.json`.
2. Use only English and ASCII characters.
3. Add an HTTPS logo URL hosted by the company's official site or official asset CDN.
4. Add at least one first-party product or documentation URL.
5. Set `last_verified` to the date when the sources were reviewed.
6. Run `npm run build` and `npm test`.

Do not add funding rumors, valuation estimates, affiliate links, rankings, or unsourced superlatives.

## Positioning Changes

Companies frequently reposition products. A change should reflect current first-party messaging and preserve a neutral tone. Include the source URL in the pull request description.

## Pull Request Checklist

- The company fits the repository's editorial scope.
- The product fits the repository scope.
- The logo renders in the generated README table.
- All product claims have first-party sources.
- `npm test` passes.
