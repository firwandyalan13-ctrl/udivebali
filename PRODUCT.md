# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Incumbent: a single static `index.html` marketing site with inline CSS/JS, a Shadow DOM instant-quote widget, bilingual EN/ZH copy via `data-en`/`data-zh`, Supabase booking helper, WhatsApp/PayPal conversion, Google Analytics and Ads tags. Deployed as a static site on Netlify.

## Users

**Inferred from live site (unattended init; decision page unanswered).** Primary visitors are English- and Chinese-speaking travelers planning a Tulamben dive trip: complete beginners seeking Discover Scuba or Open Water, certified divers booking fun dives, and a smaller career-path audience looking at Rescue, Nitrox, Dive Master, and IDC. They arrive on phone or laptop, often comparing schools, and need to trust the centre, see prices, and start a booking conversation.

## Product Purpose

UDive Bali is a PADI 5 Star Instructor Development Centre (#27368) and six-room boutique stay on Tulamben's black-sand shore. It sells PADI courses, certified fun dives with an instant quote, and stay-dive packages. Success is a qualified WhatsApp/form/PayPal booking, not page views.

## Positioning

A dual-director PADI CDC / IDC academy two minutes from the USAT Liberty wreck — not a beach-party dive shop and not a generic Bali resort. Teaching is small-group (max 4), equipment-complete, with instructors trained in-house. Proof on the page: 15,000+ certifications, 500+ instructors trained, 2013–2025 consecutive PADI Global Outstanding Teaching Award, 5.0 from 283 Google reviews.

## Operating Context

Visitors research from home, then book dates, courses or fun-dive packages, rooms, and airport transfer. On-site ritual is shore diving at Liberty / Coral Garden / Drop-off, with optional nearby drives. Staff handle WeChat, WhatsApp, and email. Peak season fills 60 days out.

## Capabilities and Constraints

Must preserve:

- EN/ZH language toggle and all existing bilingual strings
- Instant Fun Dive quote (calendar, packages, add-ons, tax, PayPal path)
- Course detail modals, room photo modal, booking form → WhatsApp
- Prices, centre number, awards, reviews, dive-site facts, maps
- Floating WhatsApp, analytics, conversion tags, JSON-LD
- Existing photography (hero, rooms, team, dive sites, PADI badges)

Do not invent new commercial claims, testimonials, prices, or certifications.

## Brand Commitments

Name: **Udive Bali** / **UDive**. Voice: serious teaching, ocean-first, bilingual, not hype. Binding assets: PADI 5 Star / PADI 60 marks, team photos, wreck and room photography. Binding proof language: Dual Directors, CDC, IDC #27368, 15,000+, 500+, 2013–2025 award.

## Evidence on Hand

- `index.html` live copy, prices, FAQ, dive-site list
- `hero-bg.jpg`, `hero-cover.jpg`, room photos, `team-1.jpg`–`team-8.jpg`, dive-site maps, `course-bg-video.mp4`, `padi5star.png`, `PADI60.png`
- Reviews attributed to Sarah Chen, Kevin L., Amos Tan (do not fabricate more)
- Google Maps embed for Tulamben location

## Product Principles

1. Trust is earned with specific credentials, not tropical atmosphere.
2. Booking is the job: quote, course, or conversation must stay one tap away.
3. Chinese and English visitors get equal, native-quality information.
4. The wreck, the classroom, and the six rooms are one product — stay, eat, dive.
5. Never overclaim; the awards and numbers already on the site are the proof.

## Accessibility & Inclusion

Bilingual EN/ZH is a product requirement. Keyboard-accessible nav, focus states, and contrast that holds on photographic dark surfaces. Respect `prefers-reduced-motion`.
