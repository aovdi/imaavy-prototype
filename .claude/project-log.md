# Project Log

## 2026-02-09: Implement Flow A / Flow B System
**Task:** Replace 4 A/B test versions (base, no-stepper, alt-image, alt-messaging) with 2 flows (Flow A default, Flow B simplified).

**Key changes:**
- `src/config/versions.js` — Replaced 4 versions with `flow-a` and `flow-b`. Flow B config includes `showSidebar: false`, `showStepper: false`, `showCustomizeAccordions: false`, and custom messaging for Personalization, NameAndEmail, ContactInfo pages.
- `src/components/PageLayout/PageLayout.jsx` + CSS — Added `wideContent` and `belowContentChildren` props. Sidebar renders only when both `showSidebar` prop AND `version.showSidebar` are true. Content area gets `max-width: 940px` when sidebar hidden (unless `wideContent`).
- **All page components** (Personalization, NameAndEmail, ContactInfo, CostSupport, Eligibility, ProviderInfo, Terms, Confirmation, Under18) — Added `belowContentChildren` with sidebar welcome text for Flow B. Pages with copy changes (Personalization, NameAndEmail, ContactInfo) use `version.messaging` with fallbacks. Accordion sections wrapped in `version.showCustomizeAccordions !== false`. Steps 1 & 2 pass `wideContent` for wider layout in Flow B.
- `src/pages/VersionSelect/VersionSelect.jsx` — Updated tags to reflect new config keys (showSidebar, showCustomizeAccordions).
- **CSS modules** for all pages — Added `.belowContent`, `.belowContentText` styles. Added `.disclaimerText` where needed.
- **Not changed:** ScreenNavigator, Header, Footer, DisclaimerBar, Sidebar, Stepper, EnrollmentContext, App.jsx routing.

**Build:** Verified `npm run build` passes with no errors.
