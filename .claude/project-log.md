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

## 2026-02-09: Fix Team Feedback on Flow B
**Task:** Address 3 issues from team testing of Flow B.

**Key changes:**
- `src/styles/global.css` — Bumped `.page-subtitle` font-size from `var(--text-lg)` (18px) to `var(--text-2xl)` (22px), line-height 26px→30px. Creates clearer hierarchy: body 16px < subtitle 22px < title 36-44px.
- `src/components/ScreenNavigator/ScreenNavigator.jsx` — Added `event.preventDefault()` in keyboard handler to stop native `<select>` type-ahead from triggering navigation when pressing "N".
- `src/pages/Personalization/Personalization.jsx` — Added `wideContent={!version.showSidebar}` prop to PageLayout, matching NameAndEmail and ContactInfo behavior.

**Build:** Verified `npm run build` passes with no errors.

## 2026-02-09: Remove "No version" option, default to Flow A
**Task:** Eliminate the confusing "No version" dropdown option and redirect bare routes to Flow A.

**Key changes:**
- `src/App.jsx` — Replaced bare routes (`/`, `/name-email`, etc.) with `<Navigate to="/v/flow-a/..." replace />` redirects. Catch-all `*` also redirects to `/v/flow-a`.
- `src/components/ScreenNavigator/ScreenNavigator.jsx` — Removed `<option value="">No version</option>` from dropdown. Simplified `handleVersionChange` by removing the `if/else` branch for empty version. Updated dropdown value fallback to `'flow-a'`.

**Build:** Verified `npm run build` passes with no errors.

## 2026-02-09: Add on-blur field validation to Steps 2 & 3
**Task:** Show inline error messages on empty required fields when they lose focus. Disable Continue button until all required fields are filled.

**Key changes:**
- `src/components/Checkbox/Checkbox.jsx` + CSS — Added `error` prop; renders red error text below checkbox with `.checkboxError` style.
- `src/components/Dropdown/Dropdown.jsx` — Added `onBlur` prop; fires when dropdown closes via click-outside or after selection. Used ref to avoid stale closure in useEffect.
- `src/pages/NameAndEmail/NameAndEmail.jsx` — Added `touched` state + `markTouched`/`showError` helpers. Wired `onBlur` + `error` to First Name, Last Name, Email FormFields and consent Checkbox. Consent marks touched on uncheck.
- `src/pages/ContactInfo/ContactInfo.jsx` — Added `touched` state for 8 required fields. Wired `onBlur` + `error` to all required FormFields (Phone, Street Address, City, Zip Code, Date of Birth) and Dropdowns (Phone Type, State, Sex at Birth). Added `isValid` check + `disabled={!isValid}` on Continue button.

**Build:** Verified `npm run build` passes with no errors.
