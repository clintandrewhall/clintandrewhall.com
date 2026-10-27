# P3 — Kibana Application Chrome Rewrite: Tracking Artifact

**Question:** Find the issue/epic/meta-issue/RFC that tracks the Kibana application chrome
rewrite. Determine its metadata, the PRs against it, engineer/PR counts, and whether it
references the requester's exploration PRs (`kibana#212002`, `kibana#235808`) or merged PR
(`kibana#242734`).

**Method:** `gh` CLI against `elastic/kibana` (public) and `elastic/kibana-team` (private,
authenticated access confirmed). Every claim cites a specific artifact. Facts read from an
artifact are labeled **confirmed/probable/speculative**; my interpretations are labeled
**Conclusion (mine)**. Where a thing could not be sourced, it says **unknown** and stops.

---

## Bottom line

**There is no single tracking artifact.** The chrome rewrite was tracked as a *family of
epics* under the "Workspace Chrome" program, coordinated via a GitHub Project board
(`https://github.com/orgs/elastic/projects/1878`), living mostly in the **private**
`elastic/kibana-team` repo.

- **Confirmed:** A title search of `elastic/kibana-team` for Workspace-Chrome epics returns
  the sibling epics listed below and **no umbrella/parent meta-issue** linking them.
- **Conclusion (mine):** The closest thing to *the* rewrite epic is `kibana-team#1581`; the
  rest are phase/child epics. If a single tracker is required for the resume narrative, it
  does not exist — the honest description is "a program tracked across several epics + a
  project board."

---

## The epic family (all authored by `petrklapka`)

| Artifact | Title | Status | Filed | Closed |
|---|---|---|---|---|
| `kibana-team#1440` | [Epic]: Navigation groupings | Closed | 2025-01-29 | 2025-07-31 |
| `kibana-team#1581` | [Epic]: Workspace Chrome Grid Layout | Closed | 2025-03-31 | 2025-07-31 |
| `kibana-team#1840` | [Epic] [Workspace Chrome] Grid - Rollout and Testing | Closed | 2025-07-18 | 2025-11-25 |
| `kibana-team#1842` | [Epic]: [Workspace Chrome] - Grouping SideNav Integration Into New Layout | Closed | 2025-07-18 | 2025-09-24 |
| `kibana-team#1860` | [Epic]: [Workspace Chrome] - SideBar M1 & Polish | Closed | 2025-07-24 | unknown (not retrieved) |
| `kibana-team#2106` | [Epic]: Chrome visual improvements: Differentiate chrome from app space | Closed | 2025-10-01 | unknown (not retrieved) |
| `kibana#220492` | [Epic] Workspace and Chrome visual update | Closed | 2025-05-08 | 2025-08-05 |

*(All rows **confirmed** — issue JSON / search results. Two close dates were not fetched and
are marked unknown rather than guessed.)*

---

## Primary rewrite epic — `elastic/kibana-team#1581`

- **URL:** https://github.com/elastic/kibana-team/issues/1581 *(private repo)*
- **Title:** "[Epic]: Workspace Chrome Grid Layout"
- **Status / dates:** Closed. Filed **2025-03-31**, closed **2025-07-31**. Labels: `meta`, `Epic`. *(confirmed — issue JSON)*
- **Filed by:** `petrklapka` / **Petr Klapka**.
  - Role: GitHub bio self-describes as "Team leader" at Elastic; he authored every epic in
    the series (#1440, #1581, #1840, #1842). **Team lead / engineering manager.**
    *(confirmed he filed it — issue author field; title **probable** — `users/petrklapka` bio)*
- **Stated intent (quote, <15 words):** "deliver a new layout engine into Production Main that
  enables the new Workspace Chrome". *(confirmed — #1581 body)*

### Does #1581 reference the requester's PRs?

- **No** to 212002 / 235808 / 242734. *(confirmed — grep of body)*
- The body links **`kibana#220174`** under the line **"Clint's POC"**. *(confirmed — #1581 body)*
- ⚠️ **Discrepancy (explicit gap):** `kibana#220174` ("Exploration/kibana workspace") was
  **opened by `mattkime` / Matthew Kime**, is still **OPEN**, created 2025-05-05, and its body
  is the empty PR template — it does **not** mention `212002` or the requester's username.
  *(confirmed facts)*
  - **Conclusion (mine):** I **cannot confirm** that the epic's "Clint's POC → #220174" is the
    same work as the requester's exploration PRs (212002/235808). Whether #220174 is the
    requester's branch opened by a colleague, or a separate exploration, is **unknown**. Do
    not assert #1581 cites the requester's exploration.

### PRs "closed against" #1581 — count not cleanly derivable

PRs in this program close **child issues / the project board**, not the epic directly, so there
is no clean "closed via" list. Sourceable facts:

- #1581's own checklist explicitly lists these implementation PRs (all `elastic/kibana`,
  merged): **#223890, #224255, #225772, #225824**. *(confirmed — #1581 body)*
- A title search of `elastic/kibana` for `"[Workspace Chrome]"` returns **24 PRs**:
  - **18 authored by `Dosant` / Anton Dosov** (Elastic).
  - Remainder: `tsullivan` ×2, `clintandrewhall` ×1 (the requester's #235808), `CAWilson94` ×1,
    `ek-so` ×1, `mgadewoll` ×1.
  - *(confirmed — PR search)*
- **Conclusion (mine):** The grid-layout rewrite in `elastic/kibana` was executed
  **predominantly by one engineer** (Dosant), ~18 merged PRs under the Workspace-Chrome title,
  plus a few adaptation PRs from other teams. A precise total PR count for the *whole* program
  (grid engine + nav groupings + visual + rollout, across the epic family) is **unknown** — no
  single artifact totals it.

---

## Earliest artifact proposing the rewrite

- **Earliest rewrite-specific epic:** `kibana-team#1581` (filed 2025-03-31). Does **not** cite
  the requester's exploration by PR number (links the ambiguous "Clint's POC" #220174 instead).
  *(confirmed)*
- **Earlier but narrower:** `kibana-team#1440` "[Epic]: Navigation groupings" (filed
  **2025-01-29**, petrklapka). Scope = nav groupings, not the layout rewrite; body references
  **none** of the requester's PRs. *(confirmed — issue JSON + grep)*
- The requester's **PR #212002 ("Kibana Workspace")** was filed **2025-02-21**, ~5 weeks before
  #1581, but **no epic cites 212002**. *(confirmed — dates + grep across 9 epics)*
- **Conclusion (mine):** The earliest artifact proposing the *rewrite itself* is #1581, and it
  does **not** cite the requester's exploration by PR number.

---

## Where the requester's exploration IS cited (accurate contribution trail)

Exploration **PR #235808** ("[exploration] Workspace Chrome - phase 2") is explicitly cited as
the POC that downstream work drew from:

- `kibana-team#1860` (filed 2025-07-24, petrklapka): Useful Links →
  "POC Reference: PR #235808". *(confirmed)*
- `kibana-team#2106` (filed 2025-10-01, petrklapka): "POC: [deploy link] … Dev lead on this
  epic can extract changes from here." *(confirmed)*
- `kibana#243289` ("[Workspace Chrome] Visual Improvements", by `tsullivan`): "These visual
  changes have been pulled out of an exploration POC: …/pull/235808". *(confirmed)*
- The #235808 body itself states it "adapts #212002 onto `kibana-team#1581` as part of
  `kibana#220492`" — establishing the 212002 → 235808 → epic lineage. *(confirmed)*
- **#212002** and **#242734** appear in **none** of the epic bodies checked.
  *(confirmed — grep across 9 issues)*

**Conclusion (mine):** The sourceable, accurate framing is that the requester's exploration
(212002 → 235808) served as the **POC/reference that the team's visual-improvements and sidebar
epics drew changes from** — direction, not authorship — while the layout-engine rewrite was
executed by the team (predominantly Dosant) under petrklapka's epics.

---

## Engineer / PR count

- **Confirmed (grid-layout track only, `[Workspace Chrome]`-titled PRs in `elastic/kibana`):**
  24 PRs, **6 distinct authors** (Dosant, tsullivan, clintandrewhall, CAWilson94, ek-so,
  mgadewoll); Dosant authored 18.
- **Conclusion (mine):** Core implementation was **one primary engineer** with a small number of
  cross-team contributors.
- **Whole-program totals (all epics, incl. nav groupings #1440/#1842 and rollout #1840):**
  **unknown** — not derivable from any single tracker.

---

## PR #242734 — separate track (not chrome rewrite)

The requester's merged PR **#242734** ("[one navigation] Create external package for Kibana
navigation") is tracked **separately** from the chrome-rewrite epics. Its cross-references are
`cloud-ui#635`, `cloud-ui#634`, and backport `kibana#247141`, under Team:Cloud / Team:SharedUX.
No Workspace-Chrome epic references it. *(confirmed — PR timeline)*

---

## People named (roles for writing around the names)

| Handle | Name | Sourced role | Confidence |
|---|---|---|---|
| petrklapka | Petr Klapka | Team lead / EM — filed all epics; bio "Team leader" | confirmed filer; probable title |
| Dosant | Anton Dosov | Implementing engineer — ~18 grid-layout PRs | confirmed authorship; title unknown |
| alexmarhaba | (name hidden on profile) | Product ("Product @elastic" bio); filed `kibana#220492` | probable |
| tsullivan | Tim Sullivan | Engineer, Elastic; visual-improvements PRs #243289/#245898 | confirmed authorship |
| mattkime | Matthew Kime | Engineer, Elastic; opened `kibana#220174` | confirmed authorship |
| mgadewoll | Lene Gadewoll | Engineer, Elastic; testing PR #243553 | confirmed authorship |

---

## Open gaps (explicit, not filled)

1. Whether "Clint's POC → `kibana#220174`" in #1581 is the same work as the requester's
   exploration PRs — **unknown**.
2. Precise total PR/engineer count across the entire Workspace-Chrome program — **unknown**.
3. Exact close dates for `kibana-team#1860` and `kibana-team#2106` — not retrieved.
4. Job titles (vs. GitHub bios) for Dosant and alexmarhaba — **unknown**.
