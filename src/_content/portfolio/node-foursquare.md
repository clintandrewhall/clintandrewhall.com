---
caption: 'I maintain the Foursquare/Swarm library for Node.js.'
cover:
  src: './node-foursquare-1.jpg'
  size: '750x450'
slug: 'node-foursquare'
tags: [{ name: 'NodeJS', slug: 'node' }, { name: 'Swarm', slug: 'swarm' }]
timestamp: 1513728000
title: 'node-foursquare'
website: 'http://www.github.com/clintandrewhall/node-foursquare'
---

# Background

I was getting ready to build
[Backstrok.es](http://www.clintandrewhall.com/portfolio/backstrokes), but I
realized I needed a solid Foursquare library. Looking around, I noticed there
were few implementations, and most either were abandoned or lacked access to the
endpoints I needed. So I decided to fork an existing library,
[Foursquare-on-node](https://github.com/yikulju/Foursquare-on-node), and add
functionality.

Inevitably, I refactored the fork well beyond a simple pull request. After
contacting [the author](https://github.com/yikulju), I applied an MIT license
and released my node-foursquare library in the [npmjs](http://www.npmjs.org/)
repository for Node. It is currently
[listed](https://developer.foursquare.com/docs/libraries.html) on the
[Foursquare Developer site](http://developer.foursquare.com/) as the only
library for using Foursquare within Node.

![Two](/images/portfolio/node-foursquare-2.jpg)
![Three](/images/portfolio/node-foursquare-3.jpg)

# Implementation

Since the Foursquare API is
[well-documented](https://developer.foursquare.com/docs/index_docs.html), I was
able to quickly add all “getter” endpoints to the library. There seems to be
little demand for the “setter” endpoints at the moment, in the Node context.

# Colophon

This library conforms to [Foursquare API
v2](https://developer.foursquare.com/docs/overview.html) and uses
[winston](https://github.com/winstonjs/winston) as a logging strategy. It has
great [configuration
options](https://github.com/clintandrewhall/node-foursquare), such as warnings
vs. errors on deprecated endpoints and targeting specific API changelog numbers.
I currently use it in my
[Backstrok.es](http://www.clintandrewhall.com/portfolio/backstrokes) project.
