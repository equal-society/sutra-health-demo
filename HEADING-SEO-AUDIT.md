# Sutra Health — Full-Site H1/H2/H3 SEO & Repetition Pass

## Objective

Second-pass heading audit focused on search intent, topical differentiation, readability, and reducing repeated/generic headings across the site.

## Rules applied

- One clear H1 per indexable page.
- H1 communicates the page's primary topic/search intent.
- H2s explain distinct subtopics rather than repeating the same marketing promise.
- H3s are reserved for true subsections/cards within an H2.
- Service pages keep a shared structural template, but their H1 and configured H2s are service-specific.
- Health condition pages retain dynamic condition titles so every condition URL gets a unique H1.
- Question pages retain the exact question as the H1.
- Repeated entity headings such as a doctor's name are retained where the entity is genuinely relevant; these are not SEO keyword repetition.
- Private doctor dashboard/login headings are left functional and are not optimized for organic search.

## Key improvements

### Core hubs
- Conditions: `Health Conditions & Lifestyle Support in Faridabad`
- Services: `Health Services in Faridabad`
- Resources: `Health Resources for Better Everyday Decisions`
- Articles: `Health Articles for everyday questions`
- Research: `Research & Evidence behind Sutra Health`
- FAQs: `Sutra Health FAQs`
- Doctors: `Doctors & Health Experts at Sutra Health`
- Assessment: `21-Point Lifestyle Assessment`
- Patient stories: `Patient Experiences at Sutra Health`

### Service pages
- Physician Consultation: `Physician Consultation in Faridabad`
- Lifestyle Medicine: `Lifestyle Medicine in Faridabad`
- Nutrition: `Nutrition Counselling in Faridabad`
- Therapeutic Yoga: `Therapeutic Yoga in Faridabad`
- Stress/Behaviour: `Stress & Behaviour Support in Faridabad`

The shared service template now uses less repetitive supporting labels such as `Further reading and related resources` and `Explore another care option`.

### Content pages
- Article FAQ heading changed to `Common questions about this topic`.
- Condition-question FAQ heading changed to `Questions About This Health Question`.
- Condition-question evidence heading changed to `Sources and Evidence`.
- Health-guide and archive headings now communicate their information purpose more directly.

## Intent map

| Page family | Primary heading job |
|---|---|
| Homepage | Explain Sutra Health and its core healthcare proposition |
| Services | Help users choose a service |
| Individual service | Explain one service and its suitability |
| Conditions | Explain a specific health condition |
| Condition question | Answer one specific health question |
| Articles | Answer informational searches |
| Health guides | Provide broader evergreen guidance |
| Research | Demonstrate evidence/authority |
| Doctors | Establish practitioner expertise |
| FAQs | Resolve pre-consultation questions |
| Assessment | Explain the 21-point lifestyle assessment |
| Booking | Convert high-intent visitors |

## Remaining intentional repetition

`Dr. Rakesh Sarwal` appears as an H2 on the doctor profile, About page, and physician consultation page. This is intentional entity repetition because the doctor is the subject of those sections. It should not be removed merely to make headings look different.

## Validation

- Static H1/H2/H3 extraction completed across the `app` tree.
- Remaining exact heading duplicates are intentional entity/structure cases rather than broad site-copy repetition.
- Production build was not run because the uploaded project does not include `node_modules`; run `npm ci && npm run build` locally before deployment.
