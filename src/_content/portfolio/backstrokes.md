---
coverSrc: "/images/portfolio/backstrokes-1.jpg"
coverSize: "600x400"
slug: "backstrokes"
caption: ""
tags: [{name: 'NodeJS', slug: 'node'}, {name: 'Swarm', slug: 'swarm'}]
timestamp: 1450224000
title: "Backstrok.es"
---

# Background

I had the pleasure of attending [SxSW](http://www.sxsw.com/) in 2010, my third trip to that conference. There were a lot of new sights and places to visit, but just as many events I remembered from trips past. I found myself wondering things like, “where was that one place we went on Friday last year, with the **\_\_** and the **\_\_**? Did we go to the **\_\_\_\_**-sponsored talk last time? Where was that awesome restaurant where we met \***\*\_\*\***?” Those kinds of questions inevitably got answered, but not after a lot of searching… through memory, anecdote, blog… and [Foursquare](http://www.foursquare.com/).

One night I was wandering through Austin, (keeping a weather eye open for the next awesome experience) when I saw a _very_ large group gathering in the lobby of the Hilton. Checking my Twitter feed, I saw [Dennis Crowley](http://denniscrowley.com/) of Foursquare had been tweeting [cryptic](http://www.twitter.com/dens/status/47559270732009472)[messages](http://www.twitter.com/dens/status/47539944884932609) hinting toward some kind of “swimming” event. As it turned out, every year the Foursquare guys would lie on their backs and race across the lobby floor using their feet and a backstroking motion with their arms. It was hilarious, and I found myself wondering how I’d never heard of it before.

Inspired by the shenanigans, I decided I would go ahead and build a “memory” tool for social media, and I would call it “Backstrokes”… allowing people to “swim back” through their history.

# The Project

[Backstrok.es](http://backstrok.es/) currently has one facet, the one that was the most interesting to me: trips to other cities. Using a home zip code, Backstrok.es will organize checkins within a certain range of each other into “trips”, making it easy to list and recall the places you’ve been.

The code is now [open-source](https://github.com/clintandrewhall/backstrok.es) on <a href="">[my Github](https://github.com/clintandrewhall).  I intend to update it when I have some time.

# Colophon

Backstrok.es is built on Node.JS. It uses my [node-foursquare](http://www.clintandrewhall.com/portfolio/node-foursquare) library for working with the Foursquare API and currently uses no database– all data is retrieved and organized on each page load. In the future, I’ll be using a Redis-backed session store and database for “sharing” trips with your friends.
