# Content List framework — adoption findings

**Research question owner:** Clint Andrew Hall (author of the Content List framework).
**Prepared:** 2026-07-24.

## Ground rules applied
- Every factual claim is cited to a PR, issue, file path, or CODEOWNERS entry.
- Gaps are marked "unknown" rather than estimated.
- Document facts are separated from author conclusions ("My conclusion").
- Confidence is marked per finding: **confirmed** / **probable** / **speculative**.
- Named people are given their role at the time.
- No editorializing on impact; raw numbers only.

## Method / provenance
- All **code facts** come from a fresh clone of `elastic/kibana` `main` at commit
  `8be16fc` (2026-07-24), grepped locally.
- All **PR/issue facts** come from the GitHub API (`gh`) against `elastic/kibana`.
- **Planning facts** come from the private repo `elastic/kibana-team`: the epic
  [kibana-team#2181](https://github.com/elastic/kibana-team/issues/2181) "[Epic]: Replace
  Table List View with Composable Content List" (author petrklapka, opened 2025-10-21,
  open) and the roadmap
  [kibana-team#3417](https://github.com/elastic/kibana-team/issues/3417) "Content List
  migration: listing pages roadmap" (author alexmarhaba, `Team:SharedUX`, opened
  2026-05-20). Both are private; links resolve only for Elastic members.
- The framework is the `content-list` package family: **12 packages** under
  `src/platform/packages/shared/content-management/content_list/`, all owned by
  `@elastic/appex-sharedux` per
  [`.github/CODEOWNERS`](https://github.com/elastic/kibana/blob/main/.github/CODEOWNERS).
  *(confirmed)*
- Enumeration of listing pages was done by grepping consumer render sites of the
  shared listing components — legacy `TableListView` / `TableListViewTable` /
  `TabbedTableListView` and new `ContentList*` primitives — excluding the framework
  packages themselves, tests, mock-data, and Storybook helpers.

---

## 1. How many listing pages exist in Kibana today?

**There is no clean total for "all listing pages" — that number is `unknown`.** Custom,
bespoke tables (plugins rolling their own `EuiInMemoryTable`) are not enumerable by any
single signal. What can be bounded is the population built on a *shared* listing
component, which is what the framework addresses.

**Shared-framework listing pages today = 7 user-facing pages across 8 plugins.**
*(render sites: confirmed; collapsing the two Visualize plugins into one page: my conclusion, probable)*

| Page | Plugin(s) | State |
|---|---|---|
| Dashboards | `dashboard` | legacy (`TableListView`) |
| Files | `files_management` | legacy (`TableListView`) |
| Visualize Library | `visualization_listing` + `visualizations`/`visualize_app` | legacy (`TableListView`) |
| Maps | `maps` | migrated (Content List) |
| Graph | `graph` | migrated (Content List) |
| Annotations | `event_annotation_listing` | migrated (Content List) |
| Action Policies | `alerting_v2` | migrated (Content List) |

- Legacy render sites verified in: `dashboard/public/dashboard_listing/*`,
  `files_management/public/{app,mount_management_section}.tsx`,
  `visualization_listing/public/get_table_list.tsx`,
  `visualizations/public/visualize_app/index.tsx`. *(confirmed)*
- The Visualize Library is one user-facing page fed by two plugins —
  `visualization_listing` contributes a tab via `TableListTabParentProps` from
  `@kbn/content-management-tabbed-table-list-view`
  (`visualization_listing/public/get_table_list.tsx`). *(My conclusion that these are
  one page, not two; probable)*

**The 6 legacy consumers are confirmed by the epic.** PR
[#262645](https://github.com/elastic/kibana/pull/262645) (merged 2026-04-13) states the
default page size "matches `TableListView` behavior where **5 of 6 consumers** read this
setting," establishing **6 `TableListView` listing pages** as of April 2026 *(quoted)*.
The epic (kibana-team#2181, Feature-Requirements matrix) names all six and assigns each a
migration milestone — **confirming** the set I had earlier only inferred *(now confirmed)*:

| Consumer | Epic milestone |
|---|---|
| Graph | MS1.1 |
| Files Management | MS1.2 |
| Maps | MS2 |
| Event Annotations | MS3.1 |
| Visualizations | MS3.2 |
| Dashboard | MS3.3 |

The roadmap (kibana-team#3417) later adds **Discover sessions** to the first wave and lists
next-wave candidates (Saved Objects Management, Index Management, Fleet/Agent Policies) and
later candidates (Streams, Agent-builder, Integrations, Detection Rules, Alerts/Rules,
Cases) — all candidates, none done. *(confirmed)*

---

## 2. How many have migrated, and which?

**Four listing pages have migrated** (each verified rendering `ContentList*` primitives
on `main`). *(confirmed)*

| Page | Migration PR | Author | Merged |
|---|---|---|---|
| Annotations | [#271120](https://github.com/elastic/kibana/pull/271120) | you | 2026-06-02 |
| Maps | [#272997](https://github.com/elastic/kibana/pull/272997) | you | 2026-06-23 |
| Graph | [#268796](https://github.com/elastic/kibana/pull/268796) | you | 2026-06-22 |
| Action Policies | [#279317](https://github.com/elastic/kibana/pull/279317) | miguelmartin-elastic | 2026-07-22 |

The two known (Maps, Graph, Annotations) plus **one likely unflagged: Action Policies**
in the `alerting_v2` plugin.

**Action Policies is adoption *outside* the epic's committed scope.** It is not among the
epic's 6 consumers (kibana-team#2181) and not in the roadmap's first wave
(kibana-team#3417). It matches the epic's stated intent — "once feature parity is achieved,
**evangelize adoption of the new component for Solutions asks**" — i.e., a team outside the
committed Platform plan picked the framework up on its own. *(quote confirmed; the
"out-of-scope adoption" characterization is my conclusion, probable.)*

**Migration progress against the epic's committed scope:** of the 6 planned Platform
consumers, **3 are migrated** (Graph, Maps, Event Annotations), and **3 are outstanding** —
Files Management (no PR), Visualizations (#273978, open), Dashboard (#267635, open draft).
Action Policies is a 4th migration beyond that scope. *(confirmed)*

**Maps was reverted once.** The first Maps migration, PR
[#270044](https://github.com/elastic/kibana/pull/270044) (merged 2026-06-05), carries a
`reverted` label. Per the re-land PR #272997 body, it "was reverted because it broke the
saved-objects tagging Scout suite (`tags_maps_integration.spec.ts`) … Scout selective
testing never scheduled it on the PR." It re-landed as #272997 with the test-helper fix
from [#272996](https://github.com/elastic/kibana/pull/272996). *(confirmed, quoted)*

**In flight, not merged** (not counted above): Dashboards
([#267635](https://github.com/elastic/kibana/pull/267635), open **draft**), Visualize
Library ([#273978](https://github.com/elastic/kibana/pull/273978), open). *(confirmed)*

---

## 3. Is it the default for new listing pages? Documented?

**Documented as the recommended default in the package README — but not enforced, and the
old approach is not deprecated.** *(each sub-claim confirmed)*

- [`kbn-content-list/README.md`](https://github.com/elastic/kibana/blob/main/src/platform/packages/shared/content-management/content_list/kbn-content-list/README.md)
  describes the facade package as "the migration-friendly default surface" and says: "For
  standard Kibana listing pages, use `@kbn/content-list-page` alongside the portable
  content-list primitives." *(quoted)*
- **`TableListView` is not deprecated.** The only `@deprecated` tag in the legacy
  packages is on a single prop (`withoutPageTemplateWrapper` in
  `table_list_view_table.tsx:123`), not the component. *(confirmed by grep)*
- **No CONTRIBUTING guide, deprecation notice, or CODEOWNERS rule** mandates Content List
  for new pages. CODEOWNERS assigns the packages to `@elastic/appex-sharedux` but imposes
  no consumer rule. *(confirmed — searched)*

My conclusion: it is *positioned* as the default in its own README, but there is no
mechanism (deprecation, lint rule, ownership gate) making it an enforced default.
*(probable — I can prove absence of the mechanisms I searched for, not of every possible doc)*

**A documented plan to make it the standard does exist — but privately.** The epic
(kibana-team#2181) states the intent to "replace the existing Table List View Page in
Platform use cases" and, in Phase 2, to have "`TableListView` deprecated and removed"
*(quoted)*. So the *replacement* mandate is documented, but it lives in the private
`elastic/kibana-team` epic, not in an in-repo CONTRIBUTING guide, and the Phase-2
deprecation/removal is **not yet done** (its checkbox is unchecked; `TableListView` remains
un-`@deprecated` in code — see above). *(confirmed)*

---

## 4. Which teams adopted it, and who did the migration?

Owner teams from each plugin's `kibana.jsonc`. *(all confirmed)*

- **You / SharedUX migrated 3 pages owned by other teams:**
  - Annotations & Graph — plugins owned by `@elastic/kibana-visualizations`; migrated by
    you (#271120, #268796, both labeled `Team:SharedUX`).
  - Maps — plugin owned by `@elastic/kibana-presentation`; migrated by you (#272997; the
    original #270044 carried `Team:Presentation`).
- **One team self-migrated:** Action Policies, in `alerting_v2` (owned by
  `@elastic/rna-project-team`), was migrated by **miguelmartin-elastic** (#279317). Their
  PR history is almost entirely "Alerting V2" work (33 alerting-labeled PRs), so their
  role is **engineer on the Alerting V2 / ResponseOps (RNA) team** *(probable)*. It was
  driven by that team's own tracking issue
  [#275265](https://github.com/elastic/kibana/issues/275265), "[Alerting v2][Action
  policies] Use the Content List components…" (closed by the PR). *(confirmed)*
- **A second self-migration is planned by the same team:** issue
  [#275177](https://github.com/elastic/kibana/issues/275177) "[Alerting v2][Rules] Use the
  Content List components for the rule list page" (open, not done). *(confirmed)*

My conclusion: adoption to date is 3 pages migrated-by-you + 1 self-migrated-by-owner.
*(confirmed)*

---

## 5. Was there a zero-config / automatic migration path? (re: #262645)

**Partly — but "automatic" overstates it. It was a *minimal-config* path, not an
*automatic* one, and it migrated zero consumers by itself.** *(confirmed, from the PR body)*

PR [#262645](https://github.com/elastic/kibana/pull/262645), "reasonable defaults for
zero-config migration" (merged 2026-04-13), added **defaults** so a `TableListView`
consumer needs little config:
- default Name / Last-updated / Actions columns when none are declared;
- tags auto-shown from the provider's `supports.tags` flag;
- default Name + Last-updated sort options;
- default page size read from the `savedObjects:perPage` uiSetting.

Its own body: "adds sensible defaults … so that migrating a `TableListView` consumer
requires minimal configuration." It is explicitly "the first of three PRs in the MS1
migration plan (Graph + Files Management → Content List)" — a prerequisite for
hand-written migrations, not a replacement for them. *(quoted)*

The actual compatibility shim is a separate package,
`@kbn/content-list-provider-client`, whose README states it "wraps existing
`TableListView`-style `findItems` functions … migrate from `TableListView` … with minimal
code changes" and "Passes only `searchQuery` … matching `TableListView` behavior."
*(quoted)*

**How many consumers it covered automatically: zero.** No consumer was migrated by
#262645; every migration is a distinct hand-written PR (§2). The "5 of 6 consumers" line
in the PR is a statement about existing `TableListView` behavior, not about coverage.
*(confirmed)* No evidence of an auto-migration beyond these defaults was found.

---

## 6. What did it replace? Deprecated or deleted?

**It replaces the `TableListView` component family.** *(confirmed)* Your meta PR
[#247778](https://github.com/elastic/kibana/pull/247778) is titled "[meta] `ContentList` -
`TableListView` replacement" and calls it "a composable replacement for the monolithic
`TableListView` component."

Prior shared components, still on `main`:
- `TableListView` — `@kbn/content-management-table-list-view`
- `TableListViewTable` — `@kbn/content-management-table-list-view-table`
- `TabbedTableListView` — `@kbn/content-management-tabbed-table-list-view`

**Status: neither deprecated nor deleted.** All three packages are present on `main` with
**3 live consumer pages remaining** (Dashboards, Files, Visualize Library — §1). There is
no `@deprecated` on the components (§3). Your open issue
[#274088](https://github.com/elastic/kibana/issues/274088), "Tabbed page shell for
KibanaContentListPage to retire TabbedTableListView," shows the tabbed variant is *slated*
for retirement but not yet retired. *(confirmed)*

---

## 7. Before/after evidence

**Diffstats exist, but no duplication/consistency/bug-rate metrics do.** The migration PRs
**added** more lines than they removed — largely new Scout test suites and per-page
features, not consumer-code deletion. Raw numbers, no weight judged:

| Page | PR | Diffstat |
|---|---|---|
| Maps (reland) | #272997 | +261 / −169, 18 files |
| Maps (original, reverted) | #270044 | +230 / −145, 11 files |
| Graph | #268796 | +526 / −211, 19 files |
| Annotations | #271120 | +1675 / −710, 38 files |
| Action Policies | #279317 | +1348 / −1062, 16 files |

*(all confirmed via the GitHub API)*

- The Graph PR body notes a **de-duplication at the framework layer, not the consumer**:
  legacy `?filter=` URL handling was "handled centrally by the provider's URL sync … so
  consumers (graph, and any future migration) don't need their own per-plugin
  `URLSearchParams.get('filter')` reads." *(quoted, #268796)*
- The Action Policies PR replaced "the custom table implementation with `ContentListTable`
  and `ContentListToolbar`" — i.e., a bespoke table, not a `TableListView` (#279317).
  *(quoted)*
- **Lines-deleted / reduced-duplication / bug-rate metrics: `unknown`.** No artifact
  quantifies net duplication removed or bug-rate change. Not estimated.

**The epic states rationale figures (its claims, not my measurements):** it describes
`TableListView` as a "1,200+ line core component, 30+ props, 6 key architectural problems,"
the original consolidated PR (#247778) as "55,000+ line" later split into "18 reviewable
PRs," and the business value as work that "reduces code duplication, maintenance cost, and
promotes consistency in the product." These are assertions in kibana-team#2181, quoted
verbatim; I did not independently verify the line/prop counts. *(quoted; verification: unknown)*

---

## Explicit gaps (unknowns)

- A single grand total of "all listing pages in Kibana" — **unknown** (no signal
  enumerates custom tables).
- Any doc making Content List *mandatory* for new pages — **not found** (README
  recommendation only).
- Any Files Management migration — **none exists** (planned in the #262645 MS1 text; no PR
  merged or open). Files remains on `TableListView`, owned by `@elastic/appex-sharedux`
  (the framework's own team).
- Duplication-reduction / bug-rate before-after numbers — **unknown**.
- miguelmartin-elastic's exact title — inferred as an Alerting V2 / ResponseOps engineer
  from PR history (**probable**, not confirmed).
- **Per-consumer feature-flag gating** — the epic (kibana-team#2181, Phase 2) requires
  "Each migration gated by a per-consumer feature flag … old and new coexist until the flag
  is permanently enabled." The code census found the migrations merged directly and did
  **not** verify whether flags gate them. Whether the shipped migrations actually use
  feature flags is **unverified** — worth checking before relying on the claim.
- petrklapka's / alexmarhaba's exact roles — inferred as lead/manager (epic author) and
  SharedUX lead/PM (roadmap author) from low IC PR volume and the "R&D to production
  handoff" framing (**probable**, not confirmed).

---

## Source index

- Framework PRs (author: clintandrewhall): #247778 (meta/replacement, closed), #251344
  (Provider Foundation), #252419 (UI Foundation), #262645 (zero-config defaults).
- Migration PRs: #271120 (Annotations), #270044 (Maps, reverted), #272996 (test-helper
  fix), #272997 (Maps reland), #268796 (Graph), #279317 (Action Policies, author
  miguelmartin-elastic).
- In-flight: #267635 (Dashboards, draft), #273978 (Visualize Library).
- Issues (`elastic/kibana`): #274088 (retire TabbedTableListView), #275265 (Action Policies
  request, closed), #275177 (Rules list request, open).
- Planning (`elastic/kibana-team`, private): #2181 (epic, "Replace Table List View with
  Composable Content List", author petrklapka); #3417 (listing-pages roadmap, author
  alexmarhaba, `Team:SharedUX`).
- Files on `main` @ `8be16fc`: `.github/CODEOWNERS`;
  `.../content_list/kbn-content-list/README.md`;
  `.../content_list/kbn-content-list-provider-client/README.md`;
  `.../table_list_view_table/src/table_list_view_table.tsx:123`;
  consumer render sites listed in §1–§2.
