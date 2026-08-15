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


## Indexing checklist for https://argames-dz.online

1. Upload this build to the live domain and make sure `https://argames-dz.online/` returns HTTP 200.
2. Confirm these URLs are publicly reachable:
   - https://argames-dz.online/robots.txt
   - https://argames-dz.online/sitemap.xml
3. In Google Search Console, add/verify the domain property and submit:
   `https://argames-dz.online/sitemap.xml`
4. Use URL Inspection on `https://argames-dz.online/` and request indexing.
5. In Bing Webmaster Tools, verify the domain, submit the same sitemap, and use URL Inspection/URL Submission.
6. After publishing, search `site:argames-dz.online` rather than only the brand name. Indexing is not instantaneous.

The sitemap in this build contains the site's homepage, category pages and game URLs and is within Google's single-sitemap limit.
