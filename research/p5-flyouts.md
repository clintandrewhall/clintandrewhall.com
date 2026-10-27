# EUI Flyout Sessions & Developer API — Research Findings

**Prepared for:** the agent that posed the research question
**Subject repos:** `elastic/eui`, `elastic/kibana`
**Method:** GitHub CLI (`gh`) against the live repos — PR metadata, issue/review comment threads, reviews, changelog, release tags, and code search. Every factual claim is cited to a PR/issue number, a comment author + date, a changelog line, or a release tag.

**Ground rules honored:** one citation per claim; explicit "unknown" where unsourceable (no inference); conclusions labeled as mine and separated from what documents say; per-finding confidence (confirmed / probable / speculative); each named person given a role; no editorializing about impact.

---

## 0. Critical framing note (read first)

The subject contributor's self-description was: *"my contribution was largely a direction correction — I steered the implementation away from an overly complex approach and unblocked the engineer doing the work,"* naming PRs **#8939, #9075, #9124**.

All three of those PRs are **authored by the contributor themselves** (`clintandrewhall`). The *sustained* implementation of the flyout system was done mostly by **Tim Sullivan (`tsullivan`)**, with substantial work from **Tomasz Kajtoch (`tkajtoch`)**. See §1–§2.

**Release mechanics that affect every "release version" answer:** every implementation PR merged into the **feature branch** `feat/flyout-system`, not into `main`. The whole branch reached users as a single unit:
- First merged to main as beta via [#9068](https://github.com/elastic/eui/pull/9068) (2025-10-30).
- **Reverted** by [#9175](https://github.com/elastic/eui/pull/9175) "Revert flyout system changes" (author `tkajtoch`, merged 2025-11-05).
- **Restored** and shipped via [#9202](https://github.com/elastic/eui/pull/9202) (merged 2025-12-03), released in **EUI v111.0.0** (2025-12-08).

So individual PR merge dates below are *branch* merges; the npm release for all of them is **v111.0.0**. *(Confidence: confirmed — `gh pr view`, revert-PR search, changelog, release tag.)*

---

## 1. People (affiliation + role)

Roles are taken from each person's **current** GitHub profile (`gh api users/<login>`). They are therefore **probable**, not confirmed, as a description of the role "at the time" — a bio read in 2026 is not dated evidence of a 2025 title.

| Login | Name | Affiliation / stated role (source: GH bio) | Role confidence |
|---|---|---|---|
| `tsullivan` | Tim Sullivan | Elastic; bio states no title | affiliation confirmed; **title unknown** |
| `tkajtoch` | Tomasz Kajtoch | "Principal Engineer at Elastic — EUI and Kibana" | probable |
| `weronikaolejniczak` | Weronika Olejniczak | Elastic; "Design System Engineer" | probable |
| `paulinashakirova` | Paulina Shakirova | Elastic; "frontend engineer" | probable |
| `acstll` | Arturo Castillo Delgado | Elastic; no title in bio | affiliation confirmed; title unknown |
| `ThomThomson` | Devon Thomson | Elastic; reviewed #8939 "as a potential consumer" (Kibana side) | affiliation confirmed; Kibana role **probable** |
| `clintandrewhall` | Clint Andrew Hall | Elastic; "Principal Engineer" | — |

**My conclusion (labeled):** the "engineer doing the work" is **Tim Sullivan (`tsullivan`)** — he authored the majority of the feature-branch PRs. *Confidence: probable*, based on authorship counts from the branch PR listing, not on any stated task assignment.

---

## 2. Implementation PRs (flyout sessions + developer API)

All authored against `feat/flyout-system`; merge dates from `gh pr view`. The branch had ~30 PRs; pure storybook/Loki/CI-cleanup PRs (e.g. #9070, #9122, #9123, #9155) are omitted. **Release version for every row = EUI v111.0.0** (see §4).

| PR | Title | Author (role) | Branch-merge date | State |
|---|---|---|---|---|
| [#8851](https://github.com/elastic/eui/pull/8851) | Add FlyoutSystemMenu component | Tim Sullivan (Elastic) | 2025-07-25 | merged |
| [#8939](https://github.com/elastic/eui/pull/8939) | [flyouts] Developer API + sessions | **Clint Andrew Hall** (Elastic, Principal Eng) | 2025-09-02 | merged |
| [#8982](https://github.com/elastic/eui/pull/8982) | Support `size="fill"` | Tim Sullivan | 2025-09-04 | merged |
| [#8997](https://github.com/elastic/eui/pull/8997) | require title for session flyouts, support custom actions in top menu | Tim Sullivan | 2025-09-16 | merged |
| [#8999](https://github.com/elastic/eui/pull/8999) | Support resizing flyouts | Tomasz Kajtoch (Elastic, Principal Eng) | 2025-09-16 | merged |
| [#9003](https://github.com/elastic/eui/pull/9003) | Add managed history controls | Tim Sullivan | 2025-09-29 | merged |
| [#9015](https://github.com/elastic/eui/pull/9015) | Integrate unmanaged EuiFlyout animations with managed transitions | Tomasz Kajtoch | 2025-09-25 | merged |
| [#9056](https://github.com/elastic/eui/pull/9056) | Add `hasChildBackground` prop | Paulina Shakirova (Elastic) | 2025-10-15 | merged |
| [#9075](https://github.com/elastic/eui/pull/9075) | Keep Flyout Manager sync'd across React roots | **Clint Andrew Hall** | 2025-10-15 | merged |
| [#9083](https://github.com/elastic/eui/pull/9083) | Remove `isOpen` prop | Tomasz Kajtoch | 2025-10-12 | merged |
| [#9101](https://github.com/elastic/eui/pull/9101) | Update consumer and developer documentation | Tomasz Kajtoch | 2025-10-23 | merged |
| [#9124](https://github.com/elastic/eui/pull/9124) | Breaking: prevent default-config flyouts from interacting with the system (session boolean → enum) | **Clint Andrew Hall** | 2025-10-17 | merged |
| [#9163](https://github.com/elastic/eui/pull/9163) | Make session logic truly opt-in | Tim Sullivan | 2025-11-24 | merged |
| [#9068](https://github.com/elastic/eui/pull/9068) | Feature: Flyout System [Beta] (branch → main) | Tim Sullivan | 2025-10-30 | merged, later reverted (#9175) |
| [#9202](https://github.com/elastic/eui/pull/9202) | Restore Flyout System feature in EUI (branch → main, shipped) | Tim Sullivan | 2025-12-03 | merged |

*Confidence: confirmed* for numbers/titles/authors/dates/states (direct `gh` reads).

---

## 3. Where the approach changed direction — what the public record shows

**Question posed:** is the course-correction legible in the public record, or did it only happen in private?

**My overall conclusion (labeled):** it is **partially legible**. There is a real, visible architectural argument in the #8939 review threads in which the contributor steers toward a simpler API, plus one concrete hard correction (#9124 → #9163). But the threads read as collaborative design debate rather than a dramatic rescue, several of the contributor's positions were *contested at the time*, and the threads repeatedly defer decisions to an off-record planning doc. Evidence below, each item labeled.

### 3a. Central thread — single `session` prop vs. direct use of low-level `EuiFlyoutMain`/`EuiFlyoutChild`

Clearest public instance of steering toward a simpler API. All quotes are inline review comments on `packages/eui/src/components/flyout/manager/reducer.ts` in [#8939](https://github.com/elastic/eui/pull/8939).

- **Clint Andrew Hall (Principal Eng, Elastic), 2025-08-15:**
  > "I don't *intend* for anyone to consume `EuiMainFlyout` and `EuiChildFlyout` *directly*, only through `<EuiFlyout session={true} />`. … This is one of the reasons that, originally, the boolean parameter was `managed`… but I felt it wasn't descriptive enough for the results and the DX."
- **Tim Sullivan (implementing engineer, Elastic), 2025-08-15, same thread:**
  > "I was thinking along the same lines as Weronika and assumed that the main and child components would be available without the decoration of having a session."
- **Weronika Olejniczak (Design System Engineer, Elastic), 2025-08-18, same thread:**
  > "if those components are not meant to be used directly then we likely shouldn't export them. And if we still export them, there should be a warning."
- **Tim Sullivan, 2025-08-28, same thread (pushes back with a concrete constraint):**
  > "consuming the `EuiFlyoutMain` and `EuiFlyoutChild` directly is the only way I am able to successfully launch a flyout system showing a main flyout with a child flyout that is automatically open. This use case is an ask from our Solutions teams…"
- **Tomasz Kajtoch (Principal Eng, Elastic), 2025-08-28, same thread:**
  > "It should be possible to open main and child flyouts together without consuming these two (semi)internal components…"

Supporting: the [#8939 PR description](https://github.com/elastic/eui/pull/8939) (Clint, 2025-08-01) states the main/child relationship is "**implicitly derived** from the React structure."

**My reading (conclusion, *probable*):** the "overly complex approach" is visible here as the model where developers explicitly pick and mount `EuiFlyoutMain`/`EuiFlyoutChild`; the contributor argued for implicit derivation behind one `session` prop. But the public thread shows the position was **contested and not resolved in-thread** — Sullivan had a Solutions-team requirement needing direct child rendering, and Kajtoch said he would rework it. The record shows a direction being *set and argued*, not a clean documented win.

### 3b. Removing "automatic" virtualization — arguing against pre-optimization

Issue-comment thread on [#8939](https://github.com/elastic/eui/pull/8939):

- **Clint Andrew Hall, 2025-08-15:**
  > "I did, indeed, remove 'automatic' virtualization for this approach. I just felt the DX ease justified the trade-off. … but I'd rather solve a problem that arises, rather than plan to pre-optimize."
- **Tim Sullivan, 2025-08-15:**
  > "it sounds like this is an optimization that doesn't necessarily need to be made in this PR. The idea wouldn't be a major pivot from the direction we're starting here, correct? … Totally agree"

**Conclusion (*probable*):** a second, smaller simplification of scope; here the record shows agreement rather than tension.

### 3c. Concrete API course-correction — `session` boolean → enum ([#9124](https://github.com/elastic/eui/pull/9124))

Most legible *hard* correction; authored by the contributor. From the [#9124 description](https://github.com/elastic/eui/pull/9124) (2025-10-17):
> "**Before**: the session prop to EuiFlyout was an optional boolean. **Now**: session is an optional string with the allowed values of start | inherit | never."

and:
> "a flyout will no longer get 'bumped' into automatically/accidentally becoming a child … This was a bug and was causing confusion all around."

- **Tomasz Kajtoch on #9124, 2025-10-17:** "I love how clean the solution is!"
- Sullivan's follow-up [#9163](https://github.com/elastic/eui/pull/9163) "Make session logic truly opt-in" (merged 2025-11-24) continued the same direction.

**Conclusion (*probable*):** #9124 → #9163 is the direction-change most cleanly documented in the public record — moving from "flyouts implicitly absorbed into sessions" to "sessions explicit and opt-in."

### 3d. Evidence that decisive coordination was off-record

- **Tim Sullivan, approving review on [#8939](https://github.com/elastic/eui/pull/8939), 2025-08-29:**
  > "All tasks that are open are going to be handled in separate PRs in this feature branch… they're being tracked in this document: [links a private Google Doc 'punch list']"
- Sullivan repeatedly notes "Added this to the punch list document" on individual #8939 review comments (2025-08-28).

**Conclusion:** off-record channels demonstrably existed (*confirmed*). What direction-setting happened inside them is **unknown** (*speculative* to guess) — the private Google Doc is not accessible, and any Slack/meeting coordination is **unknown / unsourceable**.

### 3e. On "unblocked the engineer"

**Unknown.** No public comment was found in which Sullivan (or anyone) states they were blocked and that the contributor's intervention unblocked them. The closest public signal: on [#9075](https://github.com/elastic/eui/pull/9075) ("Keep Flyout Manager sync'd across React roots"), Sullivan wrote **2025-10-06**: *"Thank you so much for working this out!"* — gratitude for solving a specific cross-React-root state problem, which is **not**, on its face, evidence of a broader unblock. Flagged as a gap rather than inferred.

---

## 4. Release + consumers

### Which EUI release shipped flyout sessions

**EUI `v111.0.0`, published 2025-12-08.** *Confidence: confirmed* (`gh api repos/elastic/eui/releases/tags/v111.0.0` → `published_at: 2025-12-08`). The [CHANGELOG_2025.md](https://github.com/elastic/eui/blob/main/packages/eui/changelogs/CHANGELOG_2025.md) opens the v111.0.0 section:
> "Added an opt-in EuiFlyout session management … ([#9202])"

The v111.0.0 section credits #9202, #9056, #9003, #8999, #8997, and #8851.

> **Changelog erratum:** the CHANGELOG writes the "require title / custom actions" PR as **#8897**, which does **not exist** (`gh pr view 8897` → "Could not resolve to a PullRequest"). The description matches **#8997** (Tim Sullivan, merged 2025-09-16). *Confidence: confirmed the typo.*

### What consumes it today

Consumer repo: **`elastic/kibana`** `main`, which pins `@elastic/eui` **`117.1.0`** (Kibana `package.json`). *Confidence: confirmed via `gh search code`.*

- **Platform level — Kibana Core overlays service.** `src/core/packages/overlays/browser` exposes **`openSystemFlyout`**; its README states it *"Opens flyouts with `session=\"start\"` for full EUI Flyout System integration, supporting … flyout navigation and stacking."* Implemented in `src/core/packages/overlays/browser-internal/src/flyout/system_flyout_service.tsx` (its test asserts *"renders with default `session=\"start\"`"*). This is the most significant consumer — a core API any plugin can call.
- **Direct `session="start"` usage across plugins** (18+ code hits), including: unified doc viewer / Discover doc-viewer flyout and Observability trace-waterfall flyouts; APM service and trace flyouts; SLO edit + overview flyouts; Alerting v2 rule-form and rule-summary flyouts; `share` export integrations; `files_management` file and diagnostics flyouts; `newsfeed` flyout list; Observability "nightshift" event flyout.

**Not checked:** non-Kibana Elastic repos or external consumers — **unknown** from this research.

---

## 5. Confidence summary

| Finding | Confidence |
|---|---|
| PR numbers/titles/authors/branch-merge dates/states (§2) | confirmed |
| Feature shipped in EUI v111.0.0 on 2025-12-08 (§4) | confirmed |
| Beta #9068 merged then reverted (#9175) then restored (#9202) (§0) | confirmed |
| Changelog "#8897" is a typo for #8997 (§4) | confirmed |
| Kibana consumes via Core `openSystemFlyout` + 18+ plugin call sites (§4) | confirmed |
| Named persons' *affiliation* to Elastic (§1) | confirmed |
| Named persons' *titles/roles* "at the time" (§1) | probable (current bios) |
| "Engineer doing the work" = Tim Sullivan (§1) | probable |
| Contributor steered toward simpler single-`session`-prop API (§3a) | probable; contested in-thread |
| #9124 → #9163 as the documented opt-in course-correction (§3c) | probable |
| Direction-setting inside the private planning doc / Slack / meetings (§3d) | unknown / speculative |
| "Unblocked the engineer" as a discrete public event (§3e) | unknown |

## 6. Bottom line

The public record supports that the contributor **authored** the foundational developer-API/sessions PR ([#8939](https://github.com/elastic/eui/pull/8939)), the cross-React-root state fix ([#9075](https://github.com/elastic/eui/pull/9075)), and the boolean→enum session correction ([#9124](https://github.com/elastic/eui/pull/9124)), and that they **argued in-thread** for a simpler single-prop API over direct low-level component use. It does **not**, on its own, document a "rescued an over-complex approach and unblocked the engineer" narrative: the threads read as collaborative, several of the contributor's positions were contested at the time, and the decisive coordination points to a private planning doc not in the public record. The durable public anchors for the stronger claim are #8939 (implicit-derivation design), #9124 → #9163 (opt-in course-correction), and #9075 (the fix Sullivan explicitly thanked them for).
