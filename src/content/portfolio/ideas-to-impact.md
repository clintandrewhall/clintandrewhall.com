---
id: 'ideas-to-impact'
name: 'From Ideas to Impact'
caption: 'A practice I instituted on my team at Elastic for turning everyday ideas into real improvements to the Kibana Platform.'
cover: 'ideas-to-impact-2'
tags: [{ name: 'Elastic', slug: 'elastic' }, { name: 'Kibana', slug: 'kibana' }]
timestamp: 1757592000
website: 'https://eui.elastic.co'
---

# Background

I'm a Principal Engineer at [Elastic](https://www.elastic.co/), where I serve as Tech Lead for Global Experience in [Kibana](https://github.com/elastic/kibana)– the [Elastic UI](https://eui.elastic.co/) design system and component library, and the Shared UX team that builds the common infrastructure every Kibana application is built on. It's platform work: the code, tooling, and building blocks other teams use to ship search, observability, and security solutions.

Platform teams live with a hard question every day: with limited time and a hundred worthy things to build, how do you decide what's actually worth doing– and where does the room to explore new ideas come from? Over time I developed a way of answering both for my team, and a lightweight practice to go with it that we call **Horizons**.

# Defining Impact

Before you can prioritize, you have to agree on what "impact" even means. I like to plot a change on two axes. One is **engineering effort**– the time and number of people it takes to deliver, from a single person's afternoon to multiple teams over months. The other is **benefit** to a person, system, or team– does the change simply maintain the status quo, or is there a noticeable, perceptible improvement?

That gives you four quadrants, and the lesson is in the corners. The most impactful work is cheap *and* perceptible– the bottom right. The work to be most wary of is the opposite: massive refactors and "this will make future development easier" projects that cost months of multiple teams and, when you're honest, mostly preserve the status quo. Big, genuinely valuable projects still exist– but the move is to divide them into smaller pieces and drive them south, toward less effort and clearer benefit.

I push my team to be **ruthless** about this: ruthlessly divide the work, prioritize what ships fastest, measure whether a problem is even real, and iterate. Ship fast, fail fast, and learn.

![Being ruthless about small, measurable, perceptible change](ideas-to-impact-3?medium)

# Horizons

"Ship small and measurable" is a great way to run, but it can quietly crowd out exploration. Elastic already carves out dedicated time for that– we call it Spacetime, and our team-wide version is an On-Week– but those are periodic. What about the low-priority idea you're quietly passionate about, or the thing you can feel coming before anyone's fully articulated it?

That's the gap Horizons fills. A Horizon is an idea way, way out that's worth chipping at in 10–15% time, continuously, across cycles. The principle I built it on is that innovation is a *process*, not a lightning strike– you'll never be screaming "Eureka!" from your bathtub. You come with an idea, find partners across product, design, and engineering to challenge and refine it, lean on what already exists instead of building something new, and write the cheapest code you can to prove or kill it quickly.

![Horizons: innovation as a process, not a lightning strike](ideas-to-impact-4?medium)

The part that makes it work is redefining success. A Horizon is a win whether it's *completed* or *abandoned*– so long as the result gets communicated. An idea we shelved because it taught us it wasn't worth pursuing is just as valuable as one that shipped, and it costs the team almost nothing to reach that conclusion.

# Results

The practice has produced real, shippable improvements the team might otherwise never have gotten to. A couple of favorites: theme-adaptive illustrations that collapse four SVG variants into one by embedding theme-derived CSS variables, and object-preview screenshots that capture a saved object as you last saw it, straight from the browser.

![Two Horizons my team explored](ideas-to-impact-5?medium)

I've since shared the whole framework more broadly– most recently in a talk, _From Ideas to Impact_, at a joint Elastic and Confluent community meetup.

![The talk that grew out of the practice](ideas-to-impact-1?medium)
