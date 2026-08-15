# ARGAMES SEO setup

## Included
- Unique homepage title + meta description + Open Graph/Twitter metadata.
- Dynamic unique title, description, canonical URL and JSON-LD `VideoGame` schema for each game.
- Breadcrumb/category links and related-game internal links.
- Crawlable category landing pages.
- Crawlable pagination links.
- `robots.txt` and a sitemap generator.

## Before publishing
1. Set your real domain: `ARGAMES_SITE_URL=https://argames-dz.online`
2. Run `python generate_sitemap.py` from the site root.
3. Upload the generated `sitemap.xml` and `robots.txt`.
4. Add the domain to Google Search Console and submit `/sitemap.xml`.

## Important
Do not add a `meta keywords` tag. Google does not use it for ranking. Put relevant terms naturally in the title, H1, description, visible text, image alt text and internal anchor text.

Avoid creating thousands of near-identical pages solely for search engines. Keep game pages useful by showing the actual game, controls, category, tags, description and related games.


## Production domain
- Site: https://argames-dz.online/
- Sitemap: https://argames-dz.online/sitemap.xml
- Robots: https://argames-dz.online/robots.txt

The sitemap included in this package was generated from the bundled games catalog.
