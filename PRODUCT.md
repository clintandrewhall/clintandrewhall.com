# Product

## Register

brand

## Users

Hiring managers, engineering recruiters, and design-engineering leaders evaluating senior UI engineer candidates. They arrive with limited time—often between meetings or while scanning a stack of portfolios—and need to quickly assess whether Clint has the craft, leadership, and human fit for a senior role.

A secondary audience is technical evaluators who inspect the repo itself: the site is intentionally inspectable, showing how content, routing, styling, image generation, and deployment fit together.

## Product Purpose

Convince hiring managers and recruiters that Clint Andrew Hall is the right senior UI engineer. The site itself is the primary evidence: interface quality, narrative clarity, and technical depth should do the persuading before a résumé PDF ever gets opened. Success looks like a recruiter moving Clint to the next round because the portfolio demonstrated senior-level UI engineering—not because it checked boxes on a template.

The site also serves as a living modernization of the older static site—a portfolio, resume surface, and playground for frontend architecture on the `vite` branch. The resume section is actively being converted and should not be treated as complete until its backing data and presentation are finished.

## Brand Personality

Confident craft, warm humanity. A senior engineer who cares deeply about UI quality and can lead others toward it—without the cold distance of a credentials dump. Approachable storyteller: professional credibility with a personal voice. The tone is expert but inviting, precise but human.

## Anti-references

- Generic SaaS landing pages: hero metrics, identical card grids, cream backgrounds, eyebrow kickers on every section
- Flashy dev portfolios: particle effects, terminal cosplay, dark-mode-by-default theatrics
- Résumé-as-webpage: dense bullet lists with no visual story or hierarchy
- Startup hype aesthetics: gradient text, glassmorphism, loud CTAs, urgency theater

## Design Principles

- **The site is the portfolio piece.** Interface quality is the proof—typography, motion, layout, and polish must demonstrate senior craft, not describe it.
- **Warm confidence.** Expertise without corporate coldness; credibility through clarity and restraint, not volume.
- **Narrative over bullet lists.** Sections tell a story (who, what, why) rather than dumping credentials. Scroll flow and hierarchy carry the argument.
- **Restraint over spectacle.** Motion and effects serve readability and delight; never compete with the work being shown.
- **Practice what you preach.** Every interaction—links, focus states, responsive behavior, reduced motion—should reflect the engineering standards Clint would bring to a team.
- **Inspectable architecture.** The repo should reinforce the same standards visible in the UI: coherent theme tokens, Linaria discipline, and a build pipeline that earns trust under code review.

## Accessibility & Inclusion

WCAG 2.1 AA baseline. Motion must respect `prefers-reduced-motion` through the existing `useMotionPreferences` hook and the theme's motion duration/easing tokens—any future Motion library integration must wire into that infrastructure, not bypass it. Scroll-linked section tracking uses intersection observers; reduced-motion users should get equivalent navigation without motion-dependent affordances. Body text contrast and focus visibility are non-negotiable for a portfolio that claims UI engineering leadership.
