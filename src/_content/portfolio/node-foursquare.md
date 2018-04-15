---
coverSrc: "/images/portfolio/node-foursquare-1.jpg"
coverSize: "750x450"
slug: "node-foursquare"
caption: ""
tags: [{name: 'NodeJS', slug: 'node'}, {name: 'Swarm', slug: 'swarm'}]
timestamp: 1450224000
title: "node-foursquare"
---

# Background

With [Backstrok.es](http://www.clintandrewhall.com/backstrokes) on my mind, I realized I needed a solid Foursquare library. Looking around, I noticed there were few implementations, and most either were abandoned or lacked access to the endpoints I needed. So I decided to fork a library, [Foursquare-on-node](https://github.com/yikulju/Foursquare-on-node), that seemed the most complete and add functionality.

Inevitably, I refactored the fork well beyond a simple pull request. After contacting [the author](https://github.com/yikulju), I applied an MIT license and released my node-foursquare library in the [npmjs](http://www.npmjs.org/) repository for Node. It is currently [listed](https://developer.foursquare.com/docs/libraries.html) on the [Foursquare Developer site](http://developer.foursquare.com/) as the only library for using Foursquare within Node.

# Implementation

Since the Foursquare API is so [well-documented](https://developer.foursquare.com/docs/index_docs.html), I was able to quickly add all “getter” endpoints to the library. There seems to be little demand for the “setter” endpoints, but I’m planning on adding them soon. I’m focusing on a good testing strategy for them first, (adding dummy data to Foursquare production in the process of testing simply doesn’t seem prudent).

# Colophon

This library conforms to [Foursquare API v2](https://developer.foursquare.com/docs/overview.html) and uses [log4js](https://github.com/csausdev/log4js-node) as a logging strategy. It has great [configuration options](https://github.com/clintandrewhall/node-foursquare), such as warnings vs. errors on deprecated endpoints and targeting specific API changelog numbers. I currently use it in my [Backstrok.es](http://www.clintandrewhall.com/portfolio/backstrokes) project.
