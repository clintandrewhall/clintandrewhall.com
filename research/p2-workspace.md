# Kibana Workspace (#212002) — Artifact Trace

**Research question (paraphrased):** Establish, in artifacts, the path from the "Kibana Workspace" exploration (draft PR elastic/kibana#212002, open ~16 months, closed 2026-06-15) to organizational direction — culminating in a June 2026 reorg that created a Global UX group under Application Experience nine days after the PR closed.

**Prepared by:** research pass over GitHub via authenticated `gh` (user `clintandrewhall`), 2026-07-24.

---

## Rules this document follows

- Every factual claim cites a specific artifact (PR/issue number, project README, GitHub profile bio).
- Where a fact cannot be sourced, it says **unknown** and stops — no inference to fill the gap.
- **Observations** (what an artifact says) are separated from **conclusions** (what the researcher infers); conclusions are explicitly labelled.
- Confidence per finding: **confirmed** / **probable** / **speculative**.
- Named people are given a role with its source; where only a title-less GitHub profile exists, the title is marked **unknown**.
- No editorializing on impact or significance.

## Access boundary (affects Q4 and Q5)

- **GitHub:** readable — elastic/kibana, elastic/kibana-team, org Projects (scopes: repo, read:org, read:project). elastic/ml-team, elastic/security-team readable only for issue titles surfaced via search; some bodies not read.
- **Internal sources (email, Google Drive, Slack):** **NOT reachable.** No connectors are installed in this session (`list_connectors` returned empty). Every internal-source claim below is **unknown**. Artifacts that *point into* those systems are listed so the requester can open them directly.

---

## Q1 — PR #212002 read in full

**The PR** — [elastic/kibana#212002](https://github.com/elastic/kibana/pull/212002) (`gh pr view`, `gh api pulls/212002`):

- Author **clintandrewhall**; **draft the entire lifetime**; created **2025-02-21**, closed **2026-06-15T13:27:06Z**, **never merged** (`mergedAt: null`). **Confirmed.**
- Branch `experiments/workspace` → `main`. **122 changed files, +4055 / −135**, a single commit "Kibana Workspace exploration" (authored 2025-02-07, committed 2025-03-13). Diff concentrated in new `src/core/packages/workspace/components/*` and `src/core/packages/chrome/*` (`workspace_service`, `chrome_service`) — a new core "workspace" chrome layer. **Confirmed** (`pulls/212002/files`).
- Description in full: *"This is an experiment. Details and writeup coming after demos/reviews."* + `cc: @ryankeairns @lukeelmers @ghudgins`. **Confirmed.**

**Thread engagement** (`issues/212002/comments`, `pulls/212002/comments`, reviews):

| Person (login) | Role at the time (source) | Engagement | Confidence |
|---|---|---|---|
| Anton Dosov (`Dosant`) | Elastic; org MEMBER. **Title unknown** (bio blank). See Q3/attribution — later evidenced as a code contributor. | Only substantive reviewer. Review 2025-03-11: questioned the proposed app-facing API (`vs core.workspace.openToolbox(...)`) and a Storybook template change. | Confirmed |
| Clint Andrew Hall (`clintandrewhall`) | Principal Engineer, Elastic (GitHub bio, self-reported) | Author. Replied 2025-03-13: Storybook line was a leftover to remove; stated a design preference to avoid start contracts in React and lean on Redux. | Confirmed |
| Aleh Zasypkin (`azasypkin`) | Elastic; org MEMBER. **Title unknown** (bio blank). | Sole human issue comment, 2026-06-04, tagged *"The Summer Prune (review requests)"*, asking whether to convert the experiment or close it. No in-thread reply from the author. | Confirmed |
| Philippe Oberti (`PhilippeOberti`) | Elastic; org MEMBER. **Title unknown** (bio blank). | Closed the PR 2026-06-15, no comment (see Q5). | Confirmed |

**cc'd in the description, silent in the thread:** Ryan Keairns (`ryankeairns`, Elastic; title unknown/bio blank), Luke Elmers (`lukeelmers`, Elastic; title unknown/bio blank), Graham Hudgins (`ghudgins`, **"Kibana Product Lead @ Elastic"** — GitHub bio). No comments/reviews from the three appear on the PR. **Confirmed** they were cc'd; **unknown** whether they engaged elsewhere.

Remaining thread content is bot output (`elasticmachine`, `kibanamachine`: CI trigger checkbox, a build-failure notice, a project-deploy credential link). **Confirmed.**

---

## Q2 — What references / links to #212002

GitHub records only **two** inbound cross-references (`issues/212002/timeline`, event `cross-referenced`), plus the description cc's:

- **elastic/ml-team#1505** "[Spacetime] Kibana Global State Registry" — cross-referenced **2025-03-03** by Walter Rafelsberger (`walterra`, *"Data Visualization Engineer at Elastic"* — GitHub bio). **Confirmed** it links here; **body contents unknown** (ml-team repo body not read).
- **elastic/kibana#235808** "[exploration] Workspace Chrome - phase 2" — cross-referenced **2025-09-19** by the author. The explicit successor (Q3). **Confirmed.**

Additionally, **GitHub Project 1878** README lists #212002 as the "Original PR" (Q4). **Confirmed.**

> **Conclusion (researcher, probable):** #212002's inbound auto-link graph is thin for a 16-month draft; the successor chain is carried in **prose inside epics and the phase-2 PR** rather than through GitHub mentions. A plain-text `gh search issues "212002"` returned nothing, consistent with body-prose references.

---

## Q3 — Successor work

Chain of evidence: **#235808 body** states it *"adapts #212002 onto elastic/kibana-team#1581 as part of elastic/kibana#220492."* The work splits into two lines.

### Line A — Workspace Chrome / grid layout (productionized)

| Artifact | What it is | Relation to #212002 | Confidence |
|---|---|---|---|
| [#217081](https://github.com/elastic/kibana/issues/217081) "🌅 [Horizon] Workspace Chrome" (author `clintandrewhall`, **open**, 2025-04-03, labels `horizon` + `Team:SharedUX`) | Roadmap "Horizon" tracker. Body defines a Horizon as R&D that appears on the roadmap only to show a *variable portion* of engineer time, with no deadlines. | Roadmap surface for the R&D | Confirmed (body) |
| [#235808](https://github.com/elastic/kibana/pull/235808) "[exploration] Workspace Chrome - phase 2" (`clintandrewhall`, **open** PR, 2025-09-19, labels `WIP`,`horizon`) | Direct continuation of #212002 | Body: adapts #212002 onto kibana-team#1581, as part of #220492 | Confirmed |
| [#220492](https://github.com/elastic/kibana/issues/220492) "[Epic] Workspace and Chrome visual update" (author `alexmarhaba`, closed 2025-08-05, `Meta`,`Team:SharedUX`) | Epic for the visual update | "as part of" parent of #235808; depends on kibana-team#1440 (side-nav groupings) and kibana-team#1581 | Confirmed |
| **kibana-team#1581** "[Epic]: Workspace Chrome Grid Layout" (author `petrklapka`, closed 2025-07-31) | Grid-layout delivery epic; states a "Q1 MVP" intent to ship a new layout engine without regressions | The base #235808 adapts onto | Confirmed |
| Grid-layout PR chain (from #1581 body): #223890 (bootstrap grid), #224255 (feature flag + rendering decouple + classic header), #225772 / #225824 (project + app header) | Shipped grid-layout engine | Enumerated as done in #1581 | Confirmed (epic body) |
| ~15 "[Workspace Chrome]" QA/bug issues, Oct–Nov 2025 (e.g. #225263, #225264, #234770, #239568, #240271, #241372, #241422, #241706, #241710, #241829, #242129) | Rollout QA across solution teams behind a feature flag | `gh search "Workspace Chrome in:title"` | Confirmed the issues exist/are titled/dated; that each descends from #212002 is **researcher inference — probable** |
| [#220174](https://github.com/elastic/kibana/pull/220174) "Exploration/kibana workspace" (**author of record: `mattkime` / Matthew Kime**, open PR, 2025-05-05) | Another workspace exploration branch | kibana-team#1581 body cites it as *"Clint's POC"* — **the PR author of record is mattkime, not clintandrewhall** (discrepancy flagged, not resolved) | Confirmed artifact; attribution conflict noted |

### Line B — "one navigation" (code sharing / external package)

| Artifact | What it is | Relation | Confidence |
|---|---|---|---|
| [#223855](https://github.com/elastic/kibana/issues/223855) "[Horizon] Code Sharing b/w web applications" (`clintandrewhall`, closed 2025-10-24, `horizon`) | Horizon for sharing UI across Elastic web apps | One of two named bases of #242734 | Confirmed |
| [#222202](https://github.com/elastic/kibana/pull/222202) "[Console] Add bundling capabilities… (one-console)" (author `sabarasaba` / Ignacio Rivas, "Senior Software Engineer @Elastic"; **merged** 2025-10-21) | Bundling pattern for a standalone package | Named basis of #242734's approach | Confirmed |
| [#242734](https://github.com/elastic/kibana/pull/242734) "[one navigation] Create external package for Kibana navigation" (`clintandrewhall`, **merged** 2026-02-13, `v9.4.0`) | Ships `@kbn/one-navigation` external package (navigation component usable by other Elastic products) | Body: *"based on #222202 and #223855"* | Confirmed |
| [#247141](https://github.com/elastic/kibana/pull/247141) same title (author `bollinic` / Cecilia Bollini, **closed unmerged** 2026-01-23) | Follow-on one-navigation PR | Cross-references #242734 | Confirmed exists / closed-unmerged; exact relation (superseded vs split) **unknown** |
| kibana-team#635 "Side Navigation redesign"; kibana-team#634 "[Onboarding] Side Navigation POC"; kibana-team#3566 "[Sidenav]… single component that talks to core.chrome.project for nav setup" | Nav-redesign work | Cross-reference #242734 | Confirmed they link; **bodies unknown** (team repo not read) |
| elastic/security-team#18403 "[Epic] AppHeader migration for Detection Engineering pages (Chrome Next)" | A consumer team adopting the new chrome/nav | Surfaced via `one-navigation` search | Confirmed exists / references this space; that it consumes #242734 specifically is **researcher inference — probable** |

> **Placement of the two items named in the question:** #235808 is the **direct phase-2 successor** of #212002 (Line A). #242734 is the **shipped external-package outgrowth** (Line B), two hops from #212002 via #223855.

---

## Q4 — Where it became a plan of record

**Primary artifact: GitHub Project 1878 "Kibana Workspace Chrome"** (`orgs/elastic/projects/1878`, private, created **2025-03-28**, README last updated 2025-03-28).

README, verbatim (**confirmed**):
- Origin: *"@ryankeairns and @clintandrewhall built a proof-of-concept… The PoC was developed in February of 2025."* Lists **#212002 as the "Original PR."**
- Trigger: names the **AI Assistant unification effort** as highlighting the need for a dedicated space and reliable state for persistent cross-app tools (Newsfeed, Search, AI Assistant, Notification Center, Help Center).
- **Transition statement:** *"Initial feedback was positive, and so we've decided to start requirements gathering and design conversations to ratify the proposal into a funded project."*

**RACI from the README** (roles confirmed by README placement + each GitHub bio):

| RACI role | Person (login) | Title (source) |
|---|---|---|
| Driver | Graham Hudgins (`ghudgins`) | "Kibana Product Lead @ Elastic" (bio) |
| Driver | `alexmarhaba` | "Product @elastic" (bio); real name not on profile — **unknown** |
| Accountable | Petr Klapka (`petrklapka`) | "Team leader" (bio); owner of the SharedUX board (below) |
| Accountable | Yan Walton (`yanwalton`) | **"Design Director – Platform UX"** (bio) |
| Contributor | Clint Andrew Hall (`clintandrewhall`) | Principal Engineer (bio) |
| Contributor | Ryan Keairns (`ryankeairns`) | title **unknown** (bio blank); README pairs him as PoC co-author |
| Contributor | Anton Dosov (`Dosant`) | title **unknown** (bio blank) |
| Contributor | Kate Sosedova (`ek-so`) | **"Platform UX Designer"** (bio) |

**Project 1878 items (21).** Board mixes merged early PRs and open design questions. Sourced items:
- Merged early workspace PRs: #216137 "[Chrome Workspace] Push flyout breakpoint…" and #216143 "[Chrome Workspace] Fix banner" — **both authored by Anton Dosov (`Dosant`), both merged 2025-03-28 into a shared branch `exploration/kibana-workspace` (not `main`)**. #216317 "[workspace] Banner improvements" is an **issue** (author `clintandrewhall`, closed 2025-03-28).
- Design issues (elastic/kibana-team, both **open**, both created **2025-03-28**): #1579 "Notification Center prototype" (author `ghudgins`, assignee `clintandrewhall`); #1580 "[workspace] Flyout/Tool/Navigation design, sizing, open/close matrix" (author `clintandrewhall`, assignees `ryankeairns`, `Dosant`, `ek-so`).
- Open design-question cards (draft): secondary navigation, Global Search, Help Center as a tool, accessing chrome/tool APIs from apps, thinner AI assistant, "Write-up of PoC Details."

> **Conclusion (researcher):**
> - The experiment→plan transition is **documented and dated to late March 2025** with converging artifacts: Project 1878 created 2025-03-28; the two design issues filed and assigned the same day; early PRs merged to the exploration branch the same day. **Confidence: confirmed** for the facts; **probable** that these constitute the operational start of "requirements gathering and design conversations."
> - The README resolves the earlier attribution ambiguity by crediting the PoC to **Clint Andrew Hall and Ryan Keairns jointly**, with #212002 as its "Original PR." **Confirmed** (README wording).
> - **Anton Dosov was a code contributor, not merely a reviewer** — two merged PRs on `exploration/kibana-workspace` — consistent with his "Contributor" RACI listing. **Confirmed.**
> - The README's stated outcome ("ratify… into a funded project") is realized by the later delivery epics (#220492, kibana-team#1581). That the epics are the funding realization is **researcher inference — probable**.

**Secondary artifact: GitHub Project 1102 "AppEx: SharedUX Team Board"** (`orgs/elastic/projects/1102`, private, created 2022-12-07, owner `petrklapka`, 2,592 items). Title/description: *"…for Kibana/AppEx SharedUX."* **Confirmed.**

> **Conclusion (researcher, probable):** "AppEx" = Application Experience. SharedUX was an Application Experience team well before June 2026 (board in continuous use, owned by Klapka, who is also "Accountable" on Project 1878). The June 2026 "Global UX under Application Experience" reorg therefore landed on top of an **existing AppEx / SharedUX + Platform UX structure** — the same people (Klapka, Walton, Sosedova, Keairns) already grouped around this workstream.

**Internal-source pointers found (contents unknown — not reachable here):**
- PRD (Google Doc): `docs.google.com/document/d/1Me7GNcKfNIk6F9p-ItVM-Zr9NUDccCjUutFsO9vtEk4` — linked from kibana-team#1581 and Project 1878.
- Slack `#ux-wg-workspace-chrome` (`C08GKQQ85U4`) and a Slack "Task list" — linked from kibana-team#1581; Project 1878 links a Slack "Development branch" permalink.
- Figma "Sidebar – UI design" / "Theme concepts" — linked from #220492 and Project 1878.

---

## Q5 — Why #212002 closed on 2026-06-15

**Artifact facts (confirmed):**
- Closed by **Philippe Oberti** (`PhilippeOberti`) at **2026-06-15T13:27:06Z**. **No closing comment. Not merged. `state_reason` is null** (`gh api issues/212002`).
- The only preceding thread signal is **azasypkin's 2026-06-04 comment** tagged *"The Summer Prune (review requests)"* asking whether to convert or close. **No in-thread reply from the author.**
- The person who raised the prune (azasypkin) and the person who closed (PhilippeOberti) differ.

> **Conclusion (researcher, probable):** This reads as **housekeeping — a periodic "Summer Prune" of stale draft PRs / open review requests — not a documented supersession event.** Functionally the exploration had already been superseded in **September 2025** when #235808 forked from it, so nothing depended on #212002 remaining open. The differing raiser/closer actors are consistent with a bulk/triage sweep rather than a decision authored on this PR. **The specific reason Philippe Oberti clicked "close" (vs. a supersede/abandon rationale) is not documented — unknown.**

### On the exploration → June 2026 reorg link

**Stated plainly:** No artifact reachable here connects #212002's closure — or the workspace/one-navigation work — to the June 2026 creation of a Global UX group under Application Experience.
- `gh search issues "Global UX"` in elastic/kibana returned nothing relevant.
- No PR/issue/epic/project in the successor chain mentions the reorg, the group, or any 2026 staffing change.
- Project 1878 has not been updated since March 2025; Project 1102 is a rolling board with no reorg marker queryable here.
- The nine-day gap between the close (2026-06-15) and the reorg (~2026-06-24, **date asserted by the requester, not sourced here**) is **temporal only**.

> **Conclusion (researcher):** On artifacts alone, the **exploration→funded-project** link is well-supported; the **funded-project→June-2026-reorg** link is **not present in any reachable artifact** and would live in Drive/Slack/email/HR systems with no connector here. **Recommendation: keep the first claim; drop or heavily caveat the second.** What is defensibly assertable: the work became a funded, RACI'd project under Application Experience during 2025, staffed by people (Klapka, Walton, Sosedova, Keairns, Hudgins) who already populated that org area.

---

## Documented timeline (dated, sourced)

| Date | Event | Source |
|---|---|---|
| Feb 2025 | PoC built (Clint Andrew Hall + Ryan Keairns) | Project 1878 README |
| 2025-02-21 | #212002 opened (draft) | PR metadata |
| 2025-03-03 | ml-team#1505 cross-references #212002 | #212002 timeline |
| 2025-03-11 | Anton Dosov reviews #212002 | PR reviews |
| 2025-03-28 | Project 1878 created; RACI set; design issues #1579/#1580 filed & assigned; early PRs #216137/#216143 merged to `exploration/kibana-workspace` | Project 1878 + issue/PR metadata |
| 2025-04-03 | #217081 "[Horizon] Workspace Chrome" opened | issue metadata |
| 2025-05-08 | Epic #220492 opened | issue metadata |
| 2025-07-31 | kibana-team#1581 grid-layout epic closed | issue metadata |
| 2025-08-05 | Epic #220492 closed | issue metadata |
| 2025-09-19 | #235808 phase-2 opened, forks from #212002 | #235808 body + timeline |
| Oct 2025–Feb 2026 | grid layout rolled out behind flag ("[Workspace Chrome]" QA cluster); `@kbn/one-navigation` shipped (#242734 merged 2026-02-13) | search + PR metadata |
| 2026-06-04 | azasypkin "Summer Prune" comment on #212002 | issue comment |
| 2026-06-15 | #212002 closed by Philippe Oberti, no comment | issue metadata / timeline |
| ~2026-06-24 | Global UX group created under Application Experience | **asserted by requester; unsourced here** |

## Open items a requester with internal access should check

1. PRD Google Doc (link above) — most likely place a funding/staffing decision is written down.
2. Slack `#ux-wg-workspace-chrome` history and the linked Slack "Task list."
3. Any 2026 reorg/planning doc naming "Global UX" and "Application Experience" — needed to source the final link, which GitHub does not contain.
4. elastic/ml-team#1505, kibana-team#635/#634/#3566, security-team#18403 bodies (not read here) — to confirm downstream-consumer relationships marked "probable" above.
