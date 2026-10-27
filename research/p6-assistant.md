# Fate of the AI Assistant icon / avatar / beacon components

**Question:** Do the AI Assistant icon, avatar, and beacon components still exist
and still ship in Kibana today? Were they adopted, replaced, or forked by Agent
Builder, or removed?

**Method:** Read against `elastic/kibana` `main` via the GitHub API and code
search (`gh api contents`, `gh api commits`, `gh api search/code`), plus the
original landing PRs. Every factual claim below cites a specific artifact. Items
I could not source are marked **unknown**. Statements labeled **My conclusion**
are inferences, not what a document states.

**Direct answer:** All three components still exist on `main`, are still
exported, and are still imported by shipping product code across Observability,
the shared assistant chat UI, and Security. No PR removed them. Agent Builder
neither adopted, replaced, nor forked them — it does not import the package.

---

## 1. Are the components still in the codebase? Current paths

**Confidence: confirmed.**

All three source files are present on `main` in package `@kbn/ai-assistant-icon`:

- `x-pack/platform/packages/shared/ai-assistant/icon/icon.tsx` — `AssistantIcon`
- `x-pack/platform/packages/shared/ai-assistant/icon/avatar.tsx` — `AssistantAvatar`
- `x-pack/platform/packages/shared/ai-assistant/icon/beacon.tsx` (+ `beacon.styles.ts`) — `AssistantBeacon`

Source: `gh api contents` listing of `.../ai-assistant/icon` on `main`; the
directory's `index.ts` exports `AssistantAvatar`, `AssistantBeacon`,
`useBeaconSize`, and `AssistantIcon`.

Two related observations:

- **Observation:** Package id is still `@kbn/ai-assistant-icon`, but the
  containing folder is now `icon`, under
  `x-pack/platform/packages/shared/ai-assistant/` — not the
  `packages/ai-assistant/...ai-assistant-icon` path from the original PR
  [#203879](https://github.com/elastic/kibana/pull/203879). Source: `kibana.jsonc`
  in the `icon` folder (`"id": "@kbn/ai-assistant-icon"`).
  **My conclusion:** the package was relocated/renamed at the folder level during
  Kibana's platform-package restructure; the module id was preserved so importers
  were unaffected. The specific move PR is **unknown** (not sourced).
- **Observation:** `kibana.jsonc` lists `"owner": "@elastic/appex-sharedux"`.
  **My conclusion (probable):** ownership now sits with the Shared UX team, not
  the team the work originally landed under. Ownership-change history not traced.

## 2. Still rendered, or vestigial?

**Confidence: confirmed (actively imported); render-at-runtime probable.**

GitHub code search returns 60 files referencing `@kbn/ai-assistant-icon`. Real
consumer components (excluding the package's own files, config, and tsconfig)
include:

- Observability:
  `x-pack/solutions/observability/plugins/observability_ai_assistant_app/public/rule_connector/ai_assistant.tsx`;
  `x-pack/platform/plugins/shared/observability_ai_assistant/public/components/insight/insight_base.tsx`
- Shared assistant chat UI:
  `x-pack/platform/packages/shared/kbn-ai-assistant/src/chat/chat_header.tsx`,
  `.../chat_item_avatar.tsx`, `.../welcome_message.tsx`
- Elastic Assistant (Security):
  `x-pack/platform/packages/shared/kbn-elastic-assistant/impl/assistant/assistant_body/welcome_setup.tsx`
- Security solution: multiple attack-discovery panels and empty states
  (`.../attack_discovery/pages/results/empty_states/welcome/index.tsx`,
  `.../no_alerts/index.tsx`, `.../view_in_ai_assistant/index.tsx`),
  SIEM-migration panels, and
  `.../entity_analytics/components/ai_assistant_button/ai_assistant_button.tsx`
- Sibling CTA package:
  `x-pack/platform/packages/shared/ai-assistant/ai-assistant-cta/call_to_action.tsx`

Symbol-reference counts (files containing each identifier), source
`gh api search/code` on `main`: `AssistantIcon` 26, `AssistantAvatar` 14,
`AssistantBeacon` 12.

Source: `gh api search/code q='"@kbn/ai-assistant-icon" repo:elastic/kibana'`
(total_count 60) and per-symbol searches.

**My conclusion:** the spread across three solutions plus the shared chat package
indicates live product UI, not dead code. I confirmed the imports and component
names; I did not exercise each runtime path, so "renders on a user-reachable
screen" for every listed file is **probable**, not confirmed.

## 3. Did Agent Builder adopt, replace, or fork them?

**Confidence: confirmed — none of the three.** Agent Builder does not import the
package.

- The Agent Builder plugin is at `x-pack/platform/plugins/shared/agent_builder`.
  Its `tsconfig.json` `kbn_references` include `@kbn/ai-assistant-common` and
  `@kbn/ai-assistant-management-plugin` but **not** `@kbn/ai-assistant-icon`.
  Source: `gh api contents .../agent_builder/tsconfig.json`.
- Path-scoped code search for `ai-assistant-icon` within
  `.../plugins/shared/agent_builder` returns total_count 0. Source:
  `gh api search/code`.

What did occur between Agent Builder and this package (observations from
`icon.tsx` commit history):

- **Observation:** PR [#244532](https://github.com/elastic/kibana/pull/244532)
  "[ML] Agent Builder: Opt-in flow" (commit `6f856823e`, merged 2025-12-11)
  **added** a new `RobotIcon` export and a `svg/robot.tsx` file *into* the
  `@kbn/ai-assistant-icon` package. It did not touch `AssistantIcon`,
  `AssistantAvatar`, or `AssistantBeacon`.
- **Observation:** PR [#252526](https://github.com/elastic/kibana/pull/252526)
  "[ML] Agent Opt-in flow: Replace all custom RobotIcon (Agent) with EUI
  productAgent icon" (commit `d51e2182c`, merged 2026-02-19) **removed** that
  `RobotIcon` and `svg/robot.tsx` again, moving Agent Builder to EUI's
  `productAgent` icon.

Source: `gh api commits/6f856823e` and `commits/d51e2182c`, file patches on
`.../ai-assistant/icon/icon.tsx`, `index.ts`, and `svg/robot.tsx`.

**My conclusion (probable):** Agent Builder's iconography is a separate concern (a
robot/agent glyph, ultimately EUI's `productAgent`). It briefly used the
assistant-icon package as a home for that glyph before moving it out. It did not
adopt, replace, or fork `AssistantIcon` / `AssistantAvatar` / `AssistantBeacon`;
those three were unchanged by both Agent Builder PRs.

## 4. If removed — which PR and when?

**Confidence: confirmed not removed.** The files exist on `main`, are exported,
and are imported by shipping code (findings 1–2). No removal PR exists to cite.

---

## Scope notes and gaps

- Two of the six cited PRs — [#213797](https://github.com/elastic/kibana/pull/213797)
  and [#216105](https://github.com/elastic/kibana/pull/216105) — are the **CTA**
  package (`@kbn/ai-assistant-cta`), not icon/avatar/beacon. For completeness:
  that package also still exists on `main` at
  `x-pack/platform/packages/shared/ai-assistant/ai-assistant-cta/` and still
  imports `@kbn/ai-assistant-icon`. Confidence: confirmed (directory listing +
  code search). Its render sites were not audited (outside the narrow question).
- The only person named in this material is the PR author (`clintandrewhall`). No
  colleagues are named, so no roles to supply.
- **Unknown:** the PR that relocated the package folder from
  `packages/ai-assistant/...` to
  `x-pack/platform/packages/shared/ai-assistant/icon`; and the PR that reassigned
  ownership to `@elastic/appex-sharedux`. Neither was sourced; neither is inferred.

## Landing-PR reference (as provided in the question)

- [#203879](https://github.com/elastic/kibana/pull/203879) — created
  `AssistantIcon`, `AssistantAvatar`, `AssistantBeacon` (merged 2024-12-13)
- [#204289](https://github.com/elastic/kibana/pull/204289) — Observability adoption
  (merged 2024-12-17)
- [#204287](https://github.com/elastic/kibana/pull/204287) — Search adoption
  (merged 2024-12-18)
- [#204286](https://github.com/elastic/kibana/pull/204286) — Security adoption
  (merged 2025-01-02)
- [#213797](https://github.com/elastic/kibana/pull/213797) — CTA components
  (`@kbn/ai-assistant-cta`, merged 2025-03-13)
- [#216105](https://github.com/elastic/kibana/pull/216105) — CTA updates
  (merged 2025-03-27)
