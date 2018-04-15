---
cover:
  src: "/images/portfolio/event-wall-1.jpg"
  size: "1024x752"
slug: "photo-wall"
caption: "My Event Wall is an open-source art installation used to project photos uploaded to a Facebook Event in real time."
tags: [{name: 'NodeJS', slug: 'node'}, {name: 'Facebook', slug: 'facebook'}]
timestamp: 1471203000
title: "Event Wall"
website: "https://www.github.com/clintandrewhall/photo-wall"
---

# Background

In 2010, I volunteered to help organize Party Arty, the annual fundraising event for the Young Friends of Art for the Nelson-Atkins Museum in Kansas City. During the planning, it occurred to me that there was an opportunity to experiment with an art installation of my own: displaying live pictures taken that evening.

My feature list was extensive, (and a bit challenging): since we would have several photographers on site taking photos, I decided to use Eye-Fi cards to upload those photos to a server as they were taken. Once stored and processed, a remote web interface on an iPad/iPhone would be used by the event ambassadors and staff to approve photos and send them to the photo wall. I also thought that, if I had time, I would post some photos to Facebook and Twitter, and perhaps even allow attendees to post photos from their own cameras to the queue.

# Result

[Watch a Video Demo](http://www.youtube.com/watch?v=VZLN7TtUVx4)

In the end, as is often the case, the design proved a bit too ambitious, and I had to cut out the Facebook and attendees posts. In addition, the Eye Fi cards on the museum’s wireless network were quite slow in getting photos to the server. With a bit of behind-the-scenes live hacking, we were able to swap out cards and get new photos up very quickly. Event organizers and attendees absolutely loved the system, and I’m enhancing it as we speak for next year!

# Colophon

The display was a full-screen instance of Chrome using CSS3 transitions and animations to display the normalized photos. Using Node’s async nature, I was able to process photos very quickly, (I even experimented with facial recognition to properly “center” faces!). I used Socket.io to create real-time posts to the wall– essentially, the admins approvals on the iPad or iPhone would “fly up” into the “Recent Photos” queue beneath the display.
