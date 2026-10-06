# Sutra Health — SEO Implementation Report

Updated: 5 October 2026

## Implemented

- Added a real `/resources` hub so existing internal links and breadcrumbs resolve correctly.
- Refactored Articles, Research and Book Appointment routes so the route remains a server component and can expose SEO metadata while interactive UI stays client-side.
- Added unique metadata for Articles, Research, Resources, Health Guides, FAQs, Patient Experiences and Book Appointment.
- Added Open Graph/Twitter images and created `public/images/og-image.webp` (1200×630).
- Removed broken `hero-desktop.webp` references and replaced them with the valid social/hero image.
- Added site-wide `MedicalOrganization` and `WebSite` JSON-LD.
- Cleaned invalid research/article URLs out of `sameAs` entity markup.
- Added FAQ and Breadcrumb structured data to the FAQ page and health-guide pages that already display FAQs.
- Added contextual internal links from health articles to relevant condition and service hubs.
- Added a visible “Quick answer” treatment to article introductions for featured-snippet style answers.
- Added article word counts and article source URLs to structured data.
- Added `updatedDate` support for articles that received substantive content updates.
- Expanded the shorter health articles to approximately 800–1,500 words where appropriate.
- Updated the sitemap to include articles, condition subpages, resource hubs, FAQs, patient stories and other public indexable routes.
- Updated sitemap article `lastModified` values to use `updatedDate` when available.
- Added metadata/social images to important public pages.
- Tightened title tags and meta descriptions to reduce duplication and improve search intent targeting.
- Improved commercial/service metadata with clearer primary keywords and practical calls to action.
- Improved the homepage H1 to clearly communicate lifestyle medicine and location.
- Improved the Nutrition page H1 to target nutrition counselling intent.
- Kept private/API routes out of the sitemap and disallowed them in `robots.ts`.

## Article keyword intent

Each article remains focused on its existing search question rather than being rewritten around generic “Sutra Health” terms. Related condition/service links provide the supporting topical cluster.

## Medical-content safeguards

- No claim was added that lifestyle practices replace prescribed medical treatment.
- Existing health-source URLs were retained.
- The implementation does not falsely claim that a named clinician reviewed an article. A named medical-review workflow should only be enabled once the organisation confirms the reviewer and review date.

## Validation

- The project was inspected after the changes.
- TypeScript syntax was checked with the available global TypeScript compiler; no syntax/structural TypeScript errors were reported for the changed files.
- A full `next build` could not be executed in this environment because the uploaded project did not contain a complete installed `node_modules` tree and package installation timed out.

## Recommended final local validation

```bash
npm ci
npm run build
npm start
```

Then verify:

- `/`
- `/resources`
- `/resources/articles`
- `/resources/articles/can-walking-help-lower-blood-pressure`
- `/resources/health-guides`
- `/resources/research`
- `/conditions/high-blood-pressure`
- one condition subpage
- `/book-appointment`
- `/sitemap.xml`
- `/robots.txt`

For an external crawler, use a publicly reachable staging/deployment URL rather than `localhost`.
