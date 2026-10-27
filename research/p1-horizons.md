# P1 — Global Experience "Horizons" board: findings

**Research target:** GitHub org project board <https://github.com/orgs/elastic/projects/1885/views/1>
**Prepared:** 2026-07-24
**Data source:** GitHub REST/GraphQL API via authenticated `gh` CLI (account `clintandrewhall`; scopes `read:project`, `read:org`, `repo`). All item-level data read directly from project #1885 and from the specific issue/PR numbers cited.

## Ground rules applied to this document

- Every factual claim is cited to a specific artifact (project #1885, an issue/PR number, or a `GET /users/{login}` profile).
- Where a fact could not be sourced, it is marked **unknown** rather than inferred.
- Statements derived by the researcher are labeled **CONCLUSION (researcher)** and separated from what a document says.
- Confidence is marked per finding: **confirmed / probable / speculative**.
- People are named with a role; roles come from **self-reported current GitHub bios/company** and are *not* verified as the person's role at the time an item was added. Where a bio states no role, the role is **unknown**.

## Access limitations (read before trusting completeness)

1. **The rendered board view #1 was not visually inspected.** Both the in-app browser (not logged in) and the user's real Chrome session (extension "not connected") were unavailable. Underlying project data was read via API instead. Consequently the view's specific **column grouping/ordering configuration is unknown**; the "Status" single-select field is reported as the column proxy. Confidence on that mapping: **probable**.
2. **No access to internal Slack, Google Docs, or email.** Anything establishing or governing "Horizons" that lives outside GitHub is **unknown**, not absent.
3. Reverse-direction PR discovery covered only the **21 board items that link to a GitHub issue**. The **19 draft-issue items have no linked issue**, so related PRs for them were not exhaustively searched (only title/label signals were used).

---

## The board (metadata)

| Field | Value | Source | Confidence |
|-------|-------|--------|------------|
| Title | Global Experience Horizons | project #1885 `title` | confirmed |
| Number | 1885 | project #1885 | confirmed |
| Visibility | Private | project #1885 `public: false` | confirmed |
| Short description | "A list of ideas seen far out on the horizon" | project #1885 `shortDescription` | confirmed |
| Created | 2025-04-03 14:05:52 UTC | project #1885 `createdAt` | confirmed |
| Creator | `clintandrewhall` (Clint Andrew Hall) | project #1885 `creator` | confirmed |
| Stated owner | `@clintandrewhall` | project #1885 `readme` ("Owner: @clintandrewhall") | confirmed |
| Item count | 40 | project #1885 `items.totalCount` | confirmed |
| Item composition | 24 linked GitHub issues* + 16 draft issues; **0 pull-request items** | project #1885 item `content.__typename` | confirmed |

\* 24 items carry an `Issue` content object, but they resolve to **21 unique issues** (some issues are referenced by more than one item / one item per issue after dedupe). The board contains **no `PullRequest`-type items at all.**

**Board README (verbatim, the establishing text on the board itself):**
> "'Side project', 'passion project', 'skunkworks', 'something I've been toying with'.... a list of ideas in various stages that are far out on the horizon. Meant for 10-15% of a person's time, they have varying levels of definition and loose deliverables.
> Owner: @clintandrewhall"
> — Source: project #1885 `readme`.

---

## Full board contents — all 40 items

Sorted by date added. "Status" = the item's Status single-select on project #1885. "Added" = item `createdAt` on project #1885. "Linked PR" is populated only where positively sourced from a PR's `closingIssuesReferences` or an issue's reverse references; blank ≠ none exists.

| # | Title | Status | Issue | Issue state | Added | Assignee(s) — role (self-reported) |
|---|-------|--------|-------|-------------|-------|-------------------------------------|
| 1 | 🌅 [Horizon] Workspace Chrome | Complete | kibana#217081 | OPEN | 2025-04-03 | clintandrewhall — Principal Engineer, Elastic; Dosant (Anton Dosov) — unknown |
| 2 | AI Assistant Unification | Shelved | (draft) | — | 2025-04-03 | clintandrewhall — Principal Engineer; eokoneyo (Eyo O. Eyo) — unknown |
| 3 | [Horizon] Headless Data Grid (EUI Data Grid) | Some Progress | (draft) | — | 2025-04-03 | kowalczyk-krzysztof (Krzysztof Kowalczyk) — Software Engineer, Elastic |
| 4 | [Horizon] Code Sharing b/w web applications | Complete | kibana#223855 | CLOSED | 2025-04-03 | clintandrewhall — Principal Engineer |
| 5 | i18n unification (@elastic/i18n) | Shelved | (draft) | — | 2025-04-03 | none |
| 6 | 🌅 [Horizon] Personalized Home / My Stuff | Archived | kibana#218022 | CLOSED | 2025-04-03 | ryankeairns (Ryan Keairns) — unknown; paulinashakirova (Paulina Shakirova) — Frontend Engineer, Elastic |
| 7 | 🌅 [Horizon] Notification Center | Shelved | kibana#217082 | OPEN | 2025-04-03 | tsullivan (Tim Sullivan) — unknown |
| 8 | console.log/warn analysis and surfacing | Complete | (draft) | — | 2025-04-03 | Dosant (Anton Dosov) — unknown |
| 9 | Dashboard/Object preview screenshots | Complete | kibana#225637 | OPEN | 2025-04-03 | clintandrewhall — Principal Engineer |
| 10 | [Horizon] Theme-adaptive Illustrations | Complete | kibana#221938 | OPEN | 2025-04-03 | clintandrewhall — Principal Engineer |
| 11 | Help Center SDK | Complete | (draft) | — | 2025-04-03 | clintandrewhall — Principal Engineer |
| 12 | Serverless UI SDK | Complete | (draft) | — | 2025-04-03 | clintandrewhall — Principal Engineer |
| 13 | [Horizon] Object hover-on "Previews" | Some Progress | (draft) | — | 2025-04-14 | none |
| 14 | Sidebar panel ideas | Open | (draft) | — | 2025-04-14 | alexmarhaba — Product, Elastic |
| 15 | [Horizon] Navigation panel for dashboards | Open | kibana#219983 | OPEN | 2025-04-17 | alexmarhaba — Product, Elastic |
| 16 | [Horizon] Spotlight-like Global Search | Open | platform-ux-team#742 | OPEN | 2025-04-17 | ek-so (Kate Sosedova) — Platform UX Designer, Elastic; alexmarhaba — Product |
| 17 | [Horizon] Auto-save | Open | (draft) | — | 2025-04-29 | none |
| 18 | Print stylesheets (using Emotion) that work. | Open | (draft) | — | 2025-06-04 | none |
| 19 | [Horizon][reporting] Detecting regressions using generated report diffs | Shelved | kibana-team#1696 | OPEN | 2025-06-06 | eokoneyo (Eyo O. Eyo) — unknown |
| 20 | Explore using AI to accelerate renovate, styled-components, enzyme | Shelved | (draft) | — | 2025-06-06 | tkajtoch (Tomasz Kajtoch) — Principal Engineer (EUI & Kibana), Elastic |
| 21 | [Horizon] Component Benchmarking | Shelved | eui-private#352 | OPEN | 2025-06-10 | none |
| 22 | Dev-mode indication your local branch is behind Serverless production build | Open | (draft) | — | 2025-06-13 | none |
| 23 | [Horizon] Flagging dynamic styles passed to `css` prop | Archived | eui#8796 | CLOSED | 2025-06-19 | weronikaolejniczak (Weronika Olejniczak) — Design System Engineer, Elastic |
| 24 | Adopt one library for dom node virtualizations | Needs Attention | kibana#224197 | OPEN | 2025-06-20 | eokoneyo (Eyo O. Eyo) — unknown |
| 25 | [Horizon] Optimize `useObservable` usage in chrome | Archived | kibana#225265 | CLOSED | 2025-06-25 | Dosant (Anton Dosov) — unknown |
| 26 | [horizon] Visual Regression Testing | Complete | kibana#240452 | CLOSED | 2025-07-18 | clintandrewhall — Principal Engineer |
| 27 | User-driven, defined navigation structure | Open | (draft) | — | 2025-07-25 | none |
| 28 | Universal keyboard shortcuts + discovery | Open | kibana#254311 | OPEN | 2025-08-01 | eokoneyo (Eyo O. Eyo) — unknown |
| 29 | Project issues tool | Complete | (draft) | — | 2025-08-08 | kowalczyk-krzysztof (Krzysztof Kowalczyk) — Software Engineer, Elastic |
| 30 | [Horizon] Standalone Kibana options (electron, PWA, Chrome saved app) | Open | kibana#233131 | OPEN | 2025-08-27 | clintandrewhall — Principal Engineer; alexmarhaba — Product |
| 31 | Inspect Component Plugin | Archived | kibana#233495 | CLOSED | 2025-08-29 | kowalczyk-krzysztof (Krzysztof Kowalczyk) — Software Engineer, Elastic |
| 32 | [Horizon] [AI] Contextual Insights Panel | Open | (draft) | — | 2025-08-29 | isaclfreire (Isabela Freire) — unknown |
| 33 | Make EUI development builds easy to consume in Kibana dev | (no Status) | (draft) | — | 2025-10-20 | none |
| 34 | Intellisense documentation links for EUI component in IDE | Open | (draft) | — | 2026-02-19 | none |
| 35 | Rebugger™️ - spin up a test project with data to reproduce a bug | Open | (draft) | — | 2026-02-19 | kowalczyk-krzysztof (Krzysztof Kowalczyk) — Software Engineer, Elastic |
| 36 | [horizon] Visual Regression Testing v2 | In Progress | kibana#258993 | OPEN | 2026-02-19 | clintandrewhall — Principal Engineer |
| 37 | Implement Code Snippet tab in Storybook like in Eui | "ON Week" | kibana-team#3138 | OPEN | 2026-04-01 | none |
| 38 | [Notification Center] Create POC | Archived | kibana#269217 | CLOSED | 2026-05-13 | tsullivan (Tim Sullivan) — unknown |
| 39 | [Proposal] Add annotation layer for UI in Kibana | Needs Attention | kibana#269831 | OPEN | 2026-05-21 | kowalczyk-krzysztof (Krzysztof Kowalczyk) — Software Engineer, Elastic |
| 40 | Add a ✨ button that creates a contextual prompt for Agent Builder to complete a task. | (no Status) | (draft) | — | 2026-07-07 | clintandrewhall — Principal Engineer |

### Assignee role reference (self-reported GitHub bio/company; current, not time-of-item)

| Login | Name | Role as stated | Source |
|-------|------|----------------|--------|
| clintandrewhall | Clint Andrew Hall | Principal Engineer at Elastic | `users/clintandrewhall` |
| Dosant | Anton Dosov | **unknown** (no role/company in bio) | `users/Dosant` |
| eokoneyo | Eyo O. Eyo | **unknown** (company @elastic; no title) | `users/eokoneyo` |
| kowalczyk-krzysztof | Krzysztof Kowalczyk | Software Engineer @elastic | `users/kowalczyk-krzysztof` |
| ryankeairns | Ryan Keairns | **unknown** (company Elastic; no title) | `users/ryankeairns` |
| paulinashakirova | Paulina Shakirova | Frontend engineer at Elastic | `users/paulinashakirova` |
| tsullivan | Tim Sullivan | **unknown** (company Elastic; no title) | `users/tsullivan` |
| alexmarhaba | (not set) | "Product @elastic" | `users/alexmarhaba` |
| ek-so | Kate Sosedova | Platform UX Designer, Elastic | `users/ek-so` |
| weronikaolejniczak | Weronika Olejniczak | Design System Engineer, Elastic | `users/weronikaolejniczak` |
| tkajtoch | Tomasz Kajtoch | Principal Engineer (EUI & Kibana), Elastic | `users/tkajtoch` |
| isaclfreire | Isabela Freire | **unknown** (company @elastic; no title) | `users/isaclfreire` |
| petrklapka | Petr Klapka | "Team leader" at Elastic | `users/petrklapka` |
| vadimkibana | Vadim Kibana | **unknown** (no bio/company) | `users/vadimkibana` |
| JoseLuisGJ | José Luis González | Senior UX Designer/Engineer, Elastic | `users/JoseLuisGJ` |
| JasonStoltz | Jason Stoltzfus | **unknown** (company Elastic; no title) | `users/JasonStoltz` |
| bollinic | Cecilia Bollini | **unknown** (no bio/company) | `users/bollinic` |
| andreadelrio | Andrea Del Rio | **unknown** (no bio/company) | `users/andreadelrio` |
| wildemat | Matthew Wilde | "Dev @ Elastic" | `users/wildemat` |

---

## Q1 — When was the board created, and by whom?

**FACT:** Board #1885 "Global Experience Horizons" was created **2025-04-03 14:05:52 UTC** by **`clintandrewhall` (Clint Andrew Hall)**, who is also the stated owner in the README. The first 12 items were added the same day. Source: project #1885 `createdAt`, `creator`, `readme`; item `createdAt` values. **Confidence: confirmed.**

---

## Q2 — Is "Horizons" formally chartered, informal, or something else?

### What the artifacts say (facts)

- **Board README** (project #1885): frames it as "side project… skunkworks… 10-15% of a person's time… loose deliverables," owner `@clintandrewhall`. Source: project #1885 `readme`.
- **kibana-team#2383 — "# 🌅 [SharedUX][Meta]: Horizons Projects"** (OPEN, author `@petrklapka`, created 2025-12-04). Body, verbatim: *"Container Issue for 'Horizons' - exploratory and R&D work that has high potential value but requires engineering exploration/POC/technical design etc. before evolving into planned deliverable epics. Bottom-Up project incubator."* Source: kibana-team#2383 body.
- **kibana-team#692 — "[Meta] Three Horizon Planning"** (CLOSED, author `@petrklapka`, created 2023-12-08, assignee `@vadimkibana`). A team planning scratchpad organized by time horizons (Current Quarter / Next 6 Months / Next 12 Months / Next 2–3 Years), referencing "the GX Team." Source: kibana-team#692 body.
- Author of both meta issues, `@petrklapka` (Petr Klapka), has GitHub bio "Team leader" at Elastic. Source: `users/petrklapka`.
- A **`horizon` label** exists in `elastic/kibana` and `elastic/kibana-team`. Source: `gh label list --search horizon`.

### CONCLUSION (researcher) — Confidence: probable

"Horizons" is **neither a fully chartered deliverable program nor a purely ad-hoc grouping** — it is a **defined, team-sanctioned R&D / incubator track** within SharedUX / the "GX Team," with: an explicit purpose statement (kibana-team#2383), a dedicated GitHub label, and conceptual roots in a 2023 "Three Horizon" planning framework (kibana-team#692) authored by a team leader. Board #1885 "Global Experience Horizons" (created by `@clintandrewhall`, 2025-04-03) is the **tracking surface** for that track. The initiative is deliberately framed as bottom-up, exploratory, discretionary-time ("10-15%") work. Therefore "formally chartered initiative" overstates it and "informal grouping" understates it; the most accurate label is **"lightly-formalized internal R&D/incubator track."** This rests on the two meta-issue bodies and the board README. A fuller charter could exist in internal Slack/Docs — that is **unknown**.

---

## Q3 — Which items have shipped, and which are still exploratory?

Two distinct signals must be kept apart:

**(a) The board owner's Status labels (fact; source: project #1885 Status field):**
- Complete (9): #1, #4, #8, #9, #10, #11, #12, #26, #29
- Archived (5): #6, #23, #25, #31, #38
- Shelved (5): #2, #7, #19, #20, #21
- In Progress (1): #36 · Some Progress (2): #3, #13 · Needs Attention (2): #24, #39
- Open (14) + no Status (2: #33, #40) — the not-started / exploratory bucket

**(b) Actual merged code tied to a board item (fact; source: reverse-direction PR references, `merged: true`):**
- **#4 Code Sharing** ← kibana#242734 (MERGED 2026-02-13, external nav package)
- **#24 dom virtualization** ← kibana#226927 (MERGED)
- **#25 useObservable in chrome** ← kibana#224255, kibana#247466, kibana#249866 (all MERGED)
- **#31 Inspect Component Plugin** ← kibana#232108 (MERGED)
- #10 Theme illustrations ← kibana#224853 (MERGED) — but this is a *consumer* of the theme-asset idea in another team's UI, not the core `EuiIllustration` work (eui#9797, still OPEN)

### CONCLUSION (researcher)

- **"Complete" on the board ≠ shipped to production.** Several "Complete" items are backed by issues that are still OPEN (e.g., #1/kibana#217081, #9/kibana#225637, #10/kibana#221938) and by draft/unmerged PRs. "Complete" is read here as "the exploration reached its intended POC end-state." Confidence: **probable**.
- **Shipped code (merged to `main`) is confirmable for 4 board items: #4, #24, #25, #31.** Confidence: **confirmed** for the merges themselves; **speculative** as to whether any merge constitutes a full production/user-facing rollout (release inclusion not traced).
- **#10 is best read as NOT shipped** (core work still open); confidence probable.
- **Still exploratory:** the 14 "Open" items + 2 no-status + "Some Progress"/idea drafts (#3, #13), plus every item backed only by draft/closed-unmerged PRs.
- "Merged" is used as the proxy for "shipped." Release-tag inclusion was **not** verified.

---

## Reconciliation against the requester's PR list

Requester-supplied PRs believed to belong to the initiative: kibana **152172, 153274, 206540, 212002, 217052, 219820, 225329, 228794, 235808, 242734, 248932**, and eui **9797**.

**Structural fact:** board #1885 contains **zero PR-type items**, so **none of the 12 PRs are board items.** The meaningful relationship is which PRs *close/reference an issue that is on the board* (source: each PR's `closingIssuesReferences`).

### Requester PRs that DO link to a board item (5 of 12)

| PR | State | Title | Board item it closes |
|----|-------|-------|----------------------|
| kibana#206540 | OPEN·draft | [experiment] Adaptive Illustrations for themes and color modes | #10 (kibana#221938) |
| kibana#212002 | CLOSED·draft | Kibana Workspace | #1 (kibana#217081) |
| kibana#217052 | CLOSED·draft | [workspace] Notification Center | #7 (kibana#217082) |
| kibana#219820 | CLOSED·draft | [workspace] Notification Center | #7 (kibana#217082) |
| kibana#225329 | OPEN·draft | [Horizon] Preview Screenshots of Dashboards… | #9 (kibana#225637) |

### Requester PRs NOT on the board and with no sourced link to a board item (7 of 12)

| PR | State | Title | Note |
|----|-------|-------|------|
| kibana#152172 | CLOSED·draft | [poc][serverless] Unified Navigation | created 2023-02-27; predates board |
| kibana#153274 | CLOSED·draft | [serverless][poc] Unified Navigation | created 2023-03-19; predates board |
| kibana#228794 | CLOSED·draft | [exploration] Video Recording for Functional Tests (local) | no closing issue |
| kibana#235808 | OPEN·draft | [exploration] Workspace Chrome - phase 2 | no issue (thematically follows #1) |
| kibana#242734 | MERGED | [one navigation] Create external package for Kibana navigation | on board #1102 (SharedUX), not #1885; but reverse-refs board issue #4/kibana#223855 |
| kibana#248932 | OPEN·draft | [horizon] Generate plugin 'flat' types, reduce circular deps | self-titled "[horizon]"; untracked |
| eui#9797 | OPEN | [EuiIllustration] Add adaptive light-dark illustration variant | on board #1079 (EUI Team); reverse-refs board issue #10/kibana#221938 |

Note: kibana#242734 and eui#9797, though not in the "linked via closingIssuesReferences" set above from the forward direction, **do** appear as reverse references on board issues #4 and #10 respectively (see reverse-direction section). They are associated with board items via cross-reference, not via a closing link.

### Board items NOT represented in the requester's PR list

**35 of 40** board items have no PR from the requester's list attached. Only **4** board items are reached by a listed PR: #1 (←#212002), #7 (←#217052/#219820), #9 (←#225329), #10 (←#206540). (Reverse direction adds #4 ←#242734 and #10 ←eui#9797 via cross-reference.) Caveat: linkage was only checked for the 12 named PRs; the other 36 items may have other PRs.

---

## Reverse direction — full PR footprint per board issue

For the 21 issue-backed board items, all PRs that close or cross-reference them (source: `closedByPullRequestsReferences` + `CROSS_REFERENCED_EVENT` timeline per issue). **16 of these PRs were not in the requester's original list.** Merged = code landed on `main`.

| Board item (issue) | PR | State | Author — role | In requester list? |
|--------------------|----|-------|---------------|--------------------|
| #1 kibana#217081 | kibana#212002 | CLOSED·draft | clintandrewhall — Principal Eng | yes |
| #4 kibana#223855 | kibana#220847 | CLOSED·draft | clintandrewhall — Principal Eng | no |
| #4 kibana#223855 | **kibana#242734** | **MERGED** | clintandrewhall — Principal Eng | yes |
| #4 kibana#223855 | kibana#247141 | CLOSED | bollinic (Cecilia Bollini) — unknown | no |
| #6 kibana#218022 | kibana#224736 | CLOSED·draft | paulinashakirova — Frontend Eng | no |
| #7 kibana#217082 | kibana#217052 | CLOSED·draft | clintandrewhall — Principal Eng | yes |
| #7 kibana#217082 | kibana#219820 | CLOSED·draft | clintandrewhall — Principal Eng | yes |
| #7 kibana#217082 | kibana#268795 | CLOSED·draft | tsullivan (Tim Sullivan) — unknown | no |
| #9 kibana#225637 | kibana#225329 | OPEN·draft | clintandrewhall — Principal Eng | yes |
| #10 kibana#221938 | kibana#206540 | OPEN·draft | clintandrewhall — Principal Eng | yes |
| #10 kibana#221938 | eui#9797 | OPEN | clintandrewhall — Principal Eng | yes |
| #10 kibana#221938 | **kibana#224853** | **MERGED** | JoseLuisGJ (José Luis González) — Senior UX Designer/Eng | no (tangential consumer) |
| #10 kibana#221938 | kibana#263891 | OPEN·draft | JasonStoltz (Jason Stoltzfus) — unknown | no |
| #24 kibana#224197 | **kibana#226927** | **MERGED** | eokoneyo (Eyo O. Eyo) — unknown | no |
| #25 kibana#225265 | **kibana#224255** | **MERGED** | Dosant (Anton Dosov) — unknown | no |
| #25 kibana#225265 | kibana#226283 | CLOSED·draft | Dosant (Anton Dosov) — unknown | no |
| #25 kibana#225265 | **kibana#247466** | **MERGED** | Dosant (Anton Dosov) — unknown | no |
| #25 kibana#225265 | **kibana#249866** | **MERGED** | Dosant (Anton Dosov) — unknown | no |
| #26 kibana#240452 | kibana#234343 | CLOSED | clintandrewhall — Principal Eng | no |
| #28 kibana#254311 | kibana#264922 | OPEN·draft | eokoneyo (Eyo O. Eyo) — unknown | no |
| #31 kibana#233495 | **kibana#232108** | **MERGED** | kowalczyk-krzysztof — Software Eng | no |
| #36 kibana#258993 | kibana#234343 | CLOSED | clintandrewhall — Principal Eng | no (same PR as #26) |
| #38 kibana#269217 | kibana#268795 | CLOSED·draft | tsullivan (Tim Sullivan) — unknown | no |
| #39 kibana#269831 | kibana#270483 | OPEN·draft | andreadelrio (Andrea Del Rio) — unknown | no |

Board issues with **no PRs found**: #15 (kibana#219983), #16 (platform-ux-team#742), #19 (kibana-team#1696), #21 (eui-private#352), #23 (eui#8796), #30 (kibana#233131), #37 (kibana-team#3138).

---

## What should be on the board but isn't

Signals used: the org's **`horizon` label** (kibana, kibana-team) and the **Horizons container issue**. Ranked by strength of belonging.

### Strong — belongs on the board, currently absent

1. **kibana-team#2383 — "[SharedUX][Meta]: Horizons Projects"** (OPEN, `@petrklapka` — Team leader). The container/definition issue for the whole initiative; not an item on #1885. Source: kibana-team#2383. Confidence **confirmed** (missing); "should be the umbrella" is a **probable** conclusion.
2. **kibana#216317 — "[workspace] Banner improvements"** (CLOSED, `@clintandrewhall`, 2025-03-28). Carries the **`horizon` label** but is not a board item — the only horizon-labeled issue absent from the board. Source: `horizon` label listing. Confidence **confirmed**.
3. **kibana#248932 — "[horizon] Generate plugin 'flat' types, reduce circular deps"** (OPEN·draft PR, `@clintandrewhall`). Self-titled "[horizon]", no backing issue, no board item. Source: PR #248932. Confidence **confirmed** (untracked).

### Medium — exploratory work in the Horizon vein, untracked (researcher judgment)

4. **kibana#235808 — "[exploration] Workspace Chrome - phase 2"** (OPEN·draft, `@clintandrewhall`). Continuation of board item #1; no issue/board entry of its own. Source: PR #235808.
5. **kibana#228794 — "[exploration] Video Recording for Functional Tests (local)"** (CLOSED·draft, `@clintandrewhall`). Adjacent to VRT items #26/#36; no board entry. Source: PR #228794.

### Speculative — requires requester's judgment

6. **search-team#14979 — "[NC] Notification query function (collapse, horizon, read-state, filters)"** (OPEN, `@wildemat` — "Dev @ Elastic"; 2026-06-22). "[NC]" reads as Notification Center; uses "horizon" as a concept; possibly downstream of items #7/#38. No sourced link. Confidence **speculative**.
7. **kibana#152172, kibana#153274 — Unified Navigation POCs** (2023, `@clintandrewhall`). Predate the board by ~2 years; conceptual ancestor of the nav work but historical. Source: PRs #152172/#153274.

### Explicitly NOT recommended as new board items

The merged/implementation PRs in the reverse-direction section (e.g., Dosant's useObservable PRs, kibana#232108, kibana#226927, kibana#242734) implement issues already on the board and belong **under** existing items, not as new ones.

### Origin/context artifact (not a board candidate, but relevant)

**kibana-team#692 — "[Meta] Three Horizon Planning"** (CLOSED, `@petrklapka`, 2023-12-08). Conceptual origin of the "Horizon" terminology in this org; a team planning framework, not an incubator item. Source: kibana-team#692.

---

## Open items / suggested next steps for the requester

- The **19 draft-issue board items** were not searched for related PRs (they have no issue to reverse-reference). If a complete PR footprint is required, those need author/title/branch search.
- The **rendered board view #1 column configuration is unverified**; if exact column names/order matter, that requires a logged-in browser session.
- Whether a **formal Horizons charter** exists beyond kibana-team#2383/#692 is **unknown** (no access to internal Slack/Docs).
- **Release/production inclusion** of the merged PRs (#242734, #226927, #224255, #247466, #249866, #232108) was **not** verified; "merged to `main`" is the strongest claim supported here.
