---
id: 'adaptive-illustrations'
name: 'Adaptive Illustrations'
caption: 'A proof-of-concept that lets a single Kibana SVG adapt its colors to any theme and color mode.'
cover: 'adaptive-illustrations-1'
tags: [{ name: 'Elastic', slug: 'elastic' }, { name: 'Kibana', slug: 'kibana' }]
timestamp: 1748525838
website: 'https://github.com/elastic/kibana/issues/221938'
---

# Background

At Elastic, I work on [Kibana](https://www.elastic.co/kibana), and one of the small-but-persistent papercuts in our codebase is illustrations. For any given illustration, we maintain _two_ discrete SVG files: one for light mode, and one for dark mode. It's the developer's job to remember to swap between them whenever the color mode changes.

When we introduced our new [Borealis](https://eui.elastic.co/) theme, that math got worse. If we wanted our illustrations to follow the new palette, we'd suddenly need to maintain _four_ versions of every image. Add "developer blue", high-contrast, and print modes down the road, and the number of files we'd have to keep in sync just keeps multiplying.

![Two themes, two color modes: four files per illustration](adaptive-illustrations-1?medium)

That felt like exactly the kind of problem worth solving once, in one place, rather than asking every team to babysit a growing pile of near-identical assets.

# The Idea

The insight is that our illustrations aren't really four different images-- they're one image with a handful of colors that shift depending on theme and color mode. So instead of shipping four files, what if we shipped _one_ SVG whose colors were CSS variables, and let the browser resolve the right palette at runtime?

I filed the approach as a [Horizon writeup](https://github.com/elastic/kibana/issues/221938)-- our term for a far-future idea worth documenting-- and built a [proof-of-concept](https://github.com/elastic/kibana/pull/206540) to prove it out.

The recipe comes down to three pieces:

- **One SVG.** Take the source illustration and replace every hard-coded `fill` with a `style` using a CSS variable and a fallback hex value, so the file still renders correctly even with no variables provided.
- **One color profile.** A small JSON file enumerates each variable and its value, grouped by `common`, `light`, `dark`, and then per-theme (`amsterdam`, `borealis`) overrides. Colors drawn straight from the EUI palette reference an `--eui-color-*` variable; derivative shades are computed.
- **One component.** A React `Illustration` component reads the current theme and color mode, compiles the relevant slices of the profile into a single set of CSS variables, applies them to `:root` via `emotion`'s `Global`, and renders the SVG inline.

![The single-SVG diff: fills become CSS variables with fallbacks](adaptive-illustrations-2?medium)

# The Fun Part

The genuinely satisfying bit was the derivative colors. Not every color in an illustration is a pure EUI palette color-- many are _shades_ of one, hand-picked by a designer for the original Amsterdam theme. Those don't have a Borealis equivalent to point at.

So rather than ask a designer to re-pick every shade for every new theme, I calculated the RGB delta between the EUI base color and its derivative shade in Amsterdam, then applied that same delta to the Borealis base color:

```
  Amsterdam primary:  #0077CC   R:  0, G: 119, B: 204
  Amsterdam fill two: #0066B1   R:  0, G: 102, B: 177
                   Difference   R:  0, G: -17, B: -27

  Borealis primary:   #0B64DD   R: 11, G: 100, B: 221
                                              -17     -27
  Borealis fill two:  #0B53C2   R: 11, G:  83, B: 194
```

It's a little crude, but it means a new theme only needs its five or six base colors defined, and every derivative shade across every illustration shifts along with it, automatically.

# Results

The POC ships a working Storybook demo rendering the same single SVG across both themes and both color modes, side by side. One file, four appearances.

It's an experiment, not a shipped feature-- the kind of thing that graduates only after an RFC with the EUI team and a workflow sign-off from our design and asset folks. But it points at a real reduction in maintenance: migrate SVGs once, in stack-ranked order of traffic, and every future theme comes mostly for free.

# Colophon

The proof-of-concept lives in [`@kbn/shared-svg`](https://github.com/elastic/kibana/pull/206540). The `Illustration` component imports both the SVG and its color profile dynamically, composes the CSS variables from the active theme and color mode, and applies them globally through `@emotion/react`.

A couple of honest caveats: the demo renders the SVG with `insertAdjacentHTML` purely because Storybook doesn't play nicely with inlined SVGs-- in production we'd reach for the right Webpack loader instead. And to show both themes at once in a single Storybook frame, I added an `isLocal` prop that scopes the variables to a `className` rather than the global `:root`. Handy for demos; rarely what you'd want in the real app.
