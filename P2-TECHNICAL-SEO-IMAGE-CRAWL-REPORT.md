# Sutra Health — P2 Technical SEO, Image Optimization & Final Static Crawl

## Scope

This pass follows the P0 content/code cleanup and P1 E-E-A-T, internal-linking, metadata and schema work. It is intentionally targeted: no broad content rewrite was performed.

## Completed

### Technical SEO
- Kept the canonical site URL as `https://lifequality.org.in`.
- Confirmed the sitemap route inventory matches the current App Router structure.
- Confirmed all hard-coded internal links resolve to an existing static or dynamic route pattern.
- Confirmed `/doctor-login` and `/doctor-dashboard` use `noindex, nofollow` metadata and remain disallowed in `robots.ts`.
- Added `poweredByHeader: false` to `next.config.ts`.
- Added Open Graph metadata to the 21-Point Assessment page.
- Preserved the canonical Organization/WebSite entity structure from P1.

### Image optimization
- Converted remaining local JPG/JPEG/PNG assets in `public/images` to WebP.
- Updated code and CSS references to the WebP files.
- Removed the superseded local JPG/JPEG/PNG copies after reference verification.
- Resized oversized raster assets to a maximum dimension of 2000px where appropriate.
- Fixed two broken image references discovered during the crawl:
  - `/images/what-we-do/yoga.png` → `/images/what-we-do/yoga.webp`
  - `/images/doctors.png` → `/images/doctor.webp`

### Content hygiene discovered during the crawl
A few internal editorial references were still visible in public service pages. These were changed to visitor-facing wording without changing the overall content strategy:
- Nutrition: removed references to “earlier page”, “earlier dietary guidance”, and internal source history.
- Therapeutic Yoga: removed references to legacy/earlier source material.
- Behaviour & Stress: removed “supplied service information” wording.
- Lifestyle Medicine: removed “earlier Life Quality material” wording.
- Volunteer: changed historical editorial phrasing to visitor-facing community-health wording.
- The unused hero component was aligned with the approved homepage positioning to prevent stale H1 content in the codebase.

## Static crawl results

### Images
- Broken local image references: **0**
- Remaining local JPG/JPEG/PNG assets: **0**
- All local raster image references now point to existing assets.

### Internal links
- Static internal hrefs checked against the App Router route inventory: **0 unresolved**
- Dynamic condition/article routes are represented by their route patterns.

### Metadata coverage
- Public route pages have page metadata or `generateMetadata`.
- Dynamic condition and article routes use `generateMetadata`.
- Admin/doctor-login routes intentionally use `noindex` metadata.
- Assessment now has Open Graph metadata.

### H1 check
- Retreat hero has one semantic H1; the alternate desktop presentation uses H2.
- Homepage has one semantic H1.

## Important validation note

The project does not contain `node_modules` in this working copy, so a production Next.js build could not be executed in this environment. The user's local build had already passed before this P2 pass. After replacing the project, run:

```powershell
npm run build
```

Then run the production server and perform a browser/GSC crawl against the deployed site.

## Remaining production checks

1. `npm run build`
2. `npm start`
3. Crawl the deployed domain
4. Validate canonical URLs
5. Validate `sitemap.xml`
6. Validate `robots.txt`
7. Test JSON-LD with Google's Rich Results Test / Schema Markup Validator
8. Check PageSpeed/Core Web Vitals
9. Inspect Google Search Console coverage and indexing after deployment
