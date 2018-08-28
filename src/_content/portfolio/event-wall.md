---
cover:
  src: '/images/portfolio/event-wall-1.jpg'
  size: '1024x752'
slug: 'event-wall'
caption: 'My Event Wall is an open-source art installation used to project
  photos uploaded to a Facebook Event in real time.'
tags: [{ name: 'NodeJS', slug: 'node' }, { name: 'Facebook', slug: 'facebook' }]
timestamp: 1471203000
title: 'Event Photo Wall'
website: 'https://www.github.com/clintandrewhall/photo-wall'
---

# Background

In 2010 I volunteered to help organize Party Arty, the annual fundraising event
for the Young Friends of Art for the Nelson-Atkins Museum in Kansas City. During
the planning, it occurred to me that there was an opportunity to experiment with
some art of my own: displaying live pictures taken that evening.

My feature list was extensive (and a bit challenging): since we would have
several photographers on site taking photos, I decided to use Eye-Fi cards to
upload those photos to a server as they were taken. Once stored and processed,
we could use a web interface on an iPad/iPhone to approve photos and send them
to the photo wall.

# 2010 Version

[Watch a Video Demo](http://www.youtube.com/watch?v=VZLN7TtUVx4)

As it turned out, the Eye-Fi cards on the museum’s wireless network were slow
getting photos to the server. With a bit of behind-the-scenes live-hacking, I
was able to use the photographers' memory cards directly to get new photos up on
the wall. Event organizers and attendees absolutely loved it!

# 2015 Version

My Photo Wall kept evolving for various friends' events until, in 2015, I had an
event of my own: my wedding to my wife, Olivia.

By then, I had been working for Facebook for three years. It occurred to me that
I could source the photos from a Facebook Event or Group far easier than
coordinate downloading images from a card or phone... plus, I could make it
refresh the moment it was posted!

I refactored and open-sourced the code to it's current iteration: a
live-updating display of photos posted to a Facebook wall. It doesn't even
require a server: the page is static and can be run from a hard drive or
Dropbox.

![alt text][one]
![alt text][two]
![alt text][three]
![alt text][four]

# Colophon

The first version was a full-screen instance of Chrome using CSS3 transitions
and animations to display the normalized photos. Using Node’s async nature, I
was able to process photos very quickly, (I even experimented with facial
recognition to properly “center” faces!). I used Socket.io to create real-time
posts to the wall– essentially, the admins approvals on the iPad or iPhone would
“fly up” into the “Recent Photos” queue beneath the display.

The second version removed all of those dependencies, opting instead for a
polling call to a Facebook GraphQL URL. The creator need only issue themselves
a long-access token and specify the Facebook ID of the Event they want to
display.

[one]: /images/portfolio/event-wall-1.jpg 'Masonry View'
[two]: /images/portfolio/event-wall-2.jpg 'Polaroid View'
[three]: /images/portfolio/event-wall-3.jpg 'A photo from our reception'
[four]: /images/portfolio/event-wall-4.jpg 'A photo from our reception'
