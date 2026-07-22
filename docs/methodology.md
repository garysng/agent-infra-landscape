# Methodology

## Inclusion Rules

An entry must meet all of the following conditions:

1. The company maintains a commercial agent or sandbox product.
2. The product is commercially available or has public product documentation.
3. The product directly builds, runs, equips, observes, or delivers AI agents.
4. At least one first-party source describes the product and its positioning.

The primary cohort is venture-backed startups and scaleups. Established platforms are included only when their products create a useful competitive benchmark. Open-source projects without a company or maintained commercial organization are outside the current scope.

## Source Policy

- Prefer product documentation over home-page copy.
- Use company home pages for top-level positioning.
- Do not use funding databases, social posts, or news coverage as the only source for a product claim.
- Do not record valuation, funding, revenue, or customer-count claims in the core dataset.
- Treat vendor marketing language as positioning, not independent verification.

## Field Guidance

`market_role` separates the primary startup and scaleup cohort from benchmark companies.

`category` describes the product's main go-to-market segment. It is intentionally narrower than the company's full product portfolio.

`positioning` is a concise paraphrase of current first-party messaging.

`source_model` describes the core product, not whether a vendor publishes SDKs or examples. `open-core` means a meaningful framework or core component is public while a managed commercial service is also offered.

`last_verified` records the most recent manual review of the listed sources. It does not guarantee that pricing, availability, or every implementation detail is unchanged.

## Update Process

1. Review every listed first-party source.
2. Update the record and `last_verified` date.
3. Run `npm run build` to regenerate the README tables.
4. Run `npm test` to validate data and generated content.
5. Explain material positioning or category changes in the pull request.

## Known Limitations

Company positioning changes faster than category taxonomies. Some products span multiple segments, and private companies disclose different levels of implementation detail. Unknown or undocumented technical properties should not be inferred from neighboring products or old announcements.
