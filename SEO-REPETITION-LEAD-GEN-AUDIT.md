# Sutra Health — Full-Site Repetition, Reach, Ranking & Lead-Generation Audit

## Audit scope

This audit covers the complete Next.js project: homepage, services, conditions, condition question pages, resources, health guides, articles, research, doctors, about/contact, assessment and booking flow.

The goal is not to remove every repeated word. Repetition that is required for navigation, legal safety, medical context or consistent branding is **controlled repetition**. The problem to remove is repetitive *meaning*: pages sounding interchangeable, generic AI-style paragraphs, identical CTAs, and multiple URLs competing for the same search intent.

## Main finding

The site has a solid information architecture, but the copy still relies heavily on a small set of phrases and concepts:

- practical
- support
- wellbeing
- everyday health / everyday life
- personalized / individual needs
- lifestyle medicine
- nutrition
- movement
- sleep
- stress
- medical care
- book a consultation

These terms are not inherently bad. They are central to the subject. The issue is that many pages use them in the same combinations without giving each URL a distinct job.

### Priority

| Priority | Finding | Action |
|---|---|---|
| P0 | Several internal links pointed to routes that do not exist | Fixed |
| P0 | Pricing block contained a placeholder price | Removed |
| P0 | Service pages used generic service-name H1s despite having stronger keyword/location titles | Template now uses the configured search-focused H1 |
| P1 | Service CTAs repeated the same generic booking phrase | Made CTAs contextual |
| P1 | Condition pages had no strong conversion bridge | Added contextual appointment CTA |
| P1 | Condition question pages had no conversion bridge | Added contextual appointment CTA |
| P1 | Health guides ended without a useful next step | Added contextual appointment CTA |
| P1 | Lifestyle Medicine page lacked a booking path | Added contextual appointment CTA |
| P1 | Article final CTA sounded generic and repeated the site-wide pitch | Made it information-to-consultation focused |
| P1 | Homepage booking CTA was repeated too literally | Changed to appointment-option language |
| P2 | Legal/medical disclaimers repeat across pages | Kept; this is controlled, necessary repetition |
| P2 | Generic words such as “support” and “practical” remain common | Do not mass-delete; differentiate page intent instead |

## Broken/internal navigation fixed

The project contained these invalid internal destinations:

- `/what-we-do/physician-consultation`
- `/what-we-do/lifestyle`
- `/what-we-do/nutrition`
- `/what-we-do/therapeutic-yoga`
- `/what-we-do/behaviour-stress-mind`
- `/what-we-do`
- `/pricing`
- `/community`
- `/doctors/dr-rakesh-sarwal`

They now point to the live route structure:

- `/services/physician-consultation`
- `/services/lifestyle`
- `/services/nutrition`
- `/services/therapeutic-yoga`
- `/services/behaviour-stress-mind`
- `/services`
- `/volunteer`
- `/doctors`

The placeholder pricing section was removed instead of publishing an invented price.

## Repetition audit by page family

### Homepage

**Previous problem:** The homepage could easily repeat the same idea as the Services page: lifestyle + nutrition + movement + stress + medical care.

**New role:** The homepage is now the broadest entry point.

It should answer:

> What is Sutra Health and where should I start?

Keep the homepage broad. Do not add long service explanations here. Send users into service and condition clusters.

### Services hub

**Role:** help a visitor choose the right service.

It should not duplicate the full service-page explanations.

Recommended distinction:

- Physician consultation → clinical question / medical review
- Lifestyle medicine → behaviour and long-term habits
- Nutrition → food and meal patterns
- Therapeutic Yoga → movement, breathing and practice suitability
- Behaviour & Stress Support → recurring stress/behaviour situations

### Lifestyle Medicine

This page should own the **six lifestyle areas + behaviour-change framework**.

Do not repeatedly explain nutrition, yoga and stress in full. Those are supporting topics with dedicated pages.

### Nutrition

This page should own **food choices, meal patterns, dietary context and individual nutrition questions**.

Avoid repeatedly saying “whole-person”, “lifestyle”, “movement”, “sleep” unless directly relevant.

### Therapeutic Yoga

This page should own **practice selection, movement, breathing, suitability and safety**.

Avoid making it sound like a general lifestyle page.

### Behaviour & Stress Support

This page should own **stress situations, recurring responses and practical behaviour questions**.

Do not position it as psychotherapy or psychiatric care unless the actual service is verified and offered.

### Condition hubs

Condition pages should answer:

> What does this condition mean, what lifestyle factors may matter, what does the evidence say, and what should I discuss with a professional?

They should not become generic service pages.

### Condition question pages

These are the strongest featured-snippet and long-tail opportunities.

Each URL should answer one question directly.

Example:

`/conditions/high-blood-pressure/which-yoga-poses-help-lower-blood-pressure`

should primarily answer that question, not repeat the entire high-blood-pressure parent page.

### Articles

Articles should capture informational search demand.

The first paragraph should answer the query directly. The rest should explain evidence, limitations, practical steps and when professional assessment matters.

### Health guides

Guides should be broader, evergreen educational resources. They should not compete with articles targeting a specific question.

## Content overlap to watch

### Lifestyle Medicine vs Integrative Medicine

These concepts are currently close enough that they could compete if both become indexable service pages.

Recommended ownership:

- **Lifestyle Medicine:** structured lifestyle behaviour and health habits.
- **Integrative Medicine:** how appropriate medical care can be considered alongside relevant lifestyle/supportive approaches.

Do not publish two pages with nearly identical introductions and FAQs.

### Stress article vs Yoga for Stress vs Stress service

These need three different intents:

- `how-to-manage-stress` → broad evidence-informed stress-management guide.
- `yoga-for-stress-relief` → yoga-specific question and practice guidance.
- Behaviour & Stress Support → service page for discussing a personal situation.

### Blood-pressure cluster

Current pages should form a clean cluster:

- High Blood Pressure condition hub
- How to lower blood pressure naturally
- Can walking help lower blood pressure?
- Yoga/blood-pressure question pages
- Lifestyle Medicine service
- Nutrition service

Each should link to the others contextually rather than repeating the same paragraphs.

## CTA / lead-generation strategy

The site should use **one primary conversion per page**, but not necessarily the same sentence.

### Recommended CTA language by intent

| Page | CTA style |
|---|---|
| Homepage | See appointment options |
| Services hub | Choose a consultation time |
| Lifestyle Medicine | Choose an appointment time |
| Nutrition | Discuss your nutrition needs |
| Therapeutic Yoga | Ask about suitable sessions |
| Behaviour & Stress | Discuss your situation |
| Physician consultation | Request an appointment / choose a physician consultation |
| Condition hub | Choose an appointment time |
| Condition question | See appointment options |
| Article | See appointment options |
| Health guide | See appointment options |
| Booking page | Choose date → time → contact details |

This is better than repeating “Book a consultation” everywhere because the CTA reflects the visitor's current intent.

## Booking-flow recommendation

The current booking API requires:

- name
- email
- phone
- gender
- age
- date
- time

These fields should not be casually removed from the UI until the database/API contract is changed. The current implementation therefore keeps the data contract intact.

For a future conversion experiment, the best lean flow is:

1. Choose date.
2. Choose available time.
3. Enter contact details.
4. Collect age/gender only if genuinely required by the clinical workflow.
5. Confirmation.

Do not add a large “tell us your medical problem” text field to the first booking step. It increases friction and can collect unnecessary sensitive information before an appointment exists.

## Reach/ranking content strategy

### 1. One search question per URL

Do not create several URLs targeting the same query.

### 2. Direct answer first

Use a 40–70 word answer near the top of informational pages.

### 3. Then explain

Use H2 questions, short paragraphs, lists, evidence and limitations.

### 4. Use Indian/local context only when useful

Faridabad should be prominent on commercial/local service pages.

It does not need to be forced into every informational article.

### 5. Build topic clusters

Priority clusters:

#### Blood pressure
- high blood pressure hub
- lifestyle changes
- walking
- sodium
- sleep
- stress
- yoga questions

#### Diabetes / blood sugar
- diabetes hub
- prediabetes
- activity
- nutrition
- yoga questions

#### Digestive health
- gut-health hub
- fibre
- food variety
- symptoms
- nutrition counselling

#### Weight management
- weight hub
- sleep and weight
- food patterns
- physical activity
- behaviour change

#### Stress / mind
- stress guide
- yoga for stress
- behaviour support
- sleep
- breathing/relaxation

## Content quality rules to prevent “AI-generated” feel

Every new page should pass these tests:

- Does the first paragraph answer a real search question?
- Does this page have a reason to exist separately from another page?
- Does at least one section contain concrete, useful information?
- Are claims tied to a credible source where evidence matters?
- Are examples specific to the topic rather than generic lifestyle advice?
- Is the CTA appropriate to the visitor's intent?
- Can any paragraph be removed without losing useful information?
- Are we repeating “practical”, “personalized”, “support”, “wellbeing” only because they are useful, or because the copy generator defaulted to them?

## Controlled repetition that should remain

Do **not** remove these merely because they appear frequently:

- medical safety disclaimers
- navigation labels
- brand name
- service names
- condition names
- core medical terms needed for clarity
- consistent booking destination
- evidence/source labels

These create consistency rather than SEO duplication.

## Current content expansion priorities

### Highest opportunity

1. High Blood Pressure cluster
2. Diabetes / prediabetes cluster
3. Digestive health cluster
4. Weight-management cluster
5. Stress / mind cluster

### Content gaps

Weight Management and Women's Health currently have fewer question-level subpages than the stronger condition clusters. Add subpages only after validating the search question and evidence.

## Technical conversion/content changes implemented in this pass

- Fixed all discovered invalid internal links.
- Removed the unpublishable pricing placeholder.
- Service template now uses the configured search-focused title as the H1.
- Added contextual booking CTA component.
- Added contextual CTA to condition hubs.
- Added contextual CTA to condition question pages.
- Added contextual CTA to health guides.
- Added contextual CTA to the Lifestyle Medicine page.
- Made service CTAs intent-specific.
- Reduced literal “Book a consultation” repetition.
- Reworded article final CTA to connect information with a personal question instead of repeating the site-wide sales message.

## Final SEO principle

The goal is not “more content everywhere”.

The goal is:

**one URL → one clear search intent → one useful answer → relevant internal links → one appropriate next step.**

That is the structure most likely to improve reach, topical authority, user satisfaction and qualified appointment conversion without making the site feel AI-generated or sales-heavy.
