---
caption: 'A method of flexing semantic HTML based on the immutable properties of the device before code is even downloaded.'
cover:
  src: './bootstrapper-1.png'
  size: '1525x1162'
slug: 'web-bootstrapper'
tags: [{ name: 'Cerner', slug: 'cerner' }, { name: 'Web', slug: 'web' }]
timestamp: 1242432000
title: 'Web Bookstrapper'
---

# Background

In 2009, I was asked to serve as Presentation Architect for a very ambitious
project at Cerner known as “Healthe”. I was tasked with bringing the forthcoming
web solutions level with the rest of the industry: semantic markup, high levels
of accessibility, mobile, low bandwidth, etc.

I set straight to work, rapidly iterating on static HTML prototypes of visual
designs and putting them in front of stakeholders. I wrote a great deal of code
in that time, and I began to think of ways we could better leverage this highly
semantic, viewable-in-Lynx web code. My thought was, if we adhered to this
strict Progressive Enhancement model, could we simply “re-skin” our HTML code
passively for any device?

What followed was the implementation of what I called a “Web Bootstrapper”,
where immutable properties of the web client are provided to a server-side
process (e.g. rules engine) in order to determine the best collection of static
resources for that client. While some presentation flexing tools download all
front-end code and flex based on client attributes, the Bootstrapper returned
only those items that are necessary. In addition, it allowed for runtime
configuration, where skins can be “shut off” or added at will.

# Results

As a side project within Cerner, my Web Bootstrapper didn’t get much attention
until it hit production on our Personal Health Record (PHR) and Activity
Tracking prototype. I was able to demonstrate I could take the oldest mobile
device in the room, (some scarily obsolete!) and load my PHR quickly and, most
importantly, consistently. Shortly thereafter, teams began using it to flex
their PE muscle in all kinds of ways.

# World Wide Web Conference 2009

In 2009, I submitted [a paper](/pdf/web-bootstrapper-paper.pdf) to the [World
Wide Web](http://www2009.wwwconference.org/) and
[Web4All](http://www.w4a.info/2018/) conferences in Madrid, where I was accepted
and [invited to speak](/pdf/web-bootstrapper-deck.pdf) on the impact of
Progressive Enhancement on accessibility and code reuse. A few months prior to
the conference, Cerner [filed a
patent](http://www.faqs.org/patents/app/20100180192). Later that year, I also
[presented the
approach](http://ajaxexperience.techtarget.com/conference/html/speakers.html#CHall)
at the [Ajax
Experience](http://ajaxexperience.techtarget.com/conference/index.html) in
Boston.

![Bootstrap the Web](/images/portfolio/bootstrapper-1.png)
![How the Bootstrapper Works](/images/portfolio/bootstrapper-2.jpg)
![Such a Broad Landscape](/images/portfolio/bootstrapper-3.jpg)
![Ajax Experience 2009](/images/portfolio/bootstrapper-4.png)
![Demo of 12 skins on one site](/images/portfolio/bootstrapper-5.png)
