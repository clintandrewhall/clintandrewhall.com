# clintandrewhall.com

Hi!  You're looking at the source code for my personal website and portfolio.

## Inception

I got tired of Wordpress and decided to roll my own portfolio site.  The goal was to serve a portfolio both as a browseable website and an example of work product.

Another requirement was to be able to update the site and my resume quickly and easily.  So all of the content is sourced from a single JSON file in the [FRESH](https://github.com/fresh-standard/fresh-resume-schema) schema.  The aim was to use it to generate both a dynamic and static version of the site, as well as resumes in a bunch of popular formats, (e.g. HTML, MD, text, etc).

Now I just need to write an entry for this portfolio repo in... my portfolio. 😆

## Changelog

### WIP Version (June 2022)

After I moved the site to Github Pages, I realized the components and practices in which my site was built are very out-of-date, not only in my own code, but in my dependencies, (`hackmyresume` hasn't been updated in a long time, for example).

I'm carving out time here and there to bring my portfolio in line with my current practices and also to experiment with some new tech, too:

- move to [JSON resume schema](https://www.npmjs.com/package/resume-schema)
- functional React, further split up
- CSS-in-JS (likely emotion)
- Storybook for development and testing

This WIP branch is pretty ugly, but is here: [resume-refactor](https://github.com/clintandrewhall/clintandrewhall.com/tree/resume-refactor).

### Change of Host (April 2022)

When Heroku had its data breach, I decided to [move the site](https://github.com/clintandrewhall/clintandrewhall.com/pull/42) off of their infra and deploy the site to Github Pages using Actions.

### First/Current Version (circa 2018)

The current version uses:

- the [FRESH](https://github.com/fresh-standard/fresh-resume-schema) resume schema to organize content.
- a [custom theme](https://github.com/clintandrewhall/clintandrewhall.com/tree/main/src/resume) for [hackmyresume](https://www.npmjs.com/package/hackmyresume) to generate all of the resumes for the site.
- [custom scripts](https://github.com/clintandrewhall/clintandrewhall.com/tree/main/scripts) to pull Github and Medium content at build time.
- Markdown files with [YAML front matter](https://assemble.io/docs/YAML-front-matter.html) for site content unassociated with my resume, like [portfolio entries](https://github.com/clintandrewhall/clintandrewhall.com/tree/main/src/content/portfolio).
- CRA, React, Typescript, CSS Modules, etc to generate the site.
- a [custom script](https://github.com/clintandrewhall/clintandrewhall.com/blob/main/scripts/snap.js) to leverage [react-snap](https://www.npmjs.com/package/react-snap) and [puppeteer](https://www.npmjs.com/package/puppeteer) to generate a site map and static version of the site.

This first version was deployed to Heroku using a custom buildpack.
