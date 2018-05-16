// @flow

export type Recommendation = {
  person: {
    name: string,
    imageSrc: string,
    title: string,
    connection: string,
  },
  timestamp: number,
  content: string,
};

export type LinkedIn = {
  recommendations: Array<Recommendation>,
};

const content: LinkedIn = {
  recommendations: [
    {
      person: {
        name: 'Patrick Keenan',
        imageSrc: '/images/linkedin/patrick.jpg',
        title: 'Lead Product Designer: Facebook Local App',
        connection: 'Clint worked with Patrick on the same team',
      },
      timestamp: 1526342400,
      content: `Clint is a powerhouse of code and collaboration. He single
        handedly maintained and updated the product on web, refactoring when
        appropriate. He was proactive in working with design and also brought
        good questions to help round out the approach. Even in a remote office,
        it felt like he was always ready to help out.`,
    },
    {
      person: {
        name: 'Naithan Jones',
        imageSrc: '/images/linkedin/naithan.jpg',
        title: 'Partner at Andreessen Horowitz',
        connection: 'Naithan worked with Clint but at different companies',
      },
      timestamp: 1526256000,
      content: `Clint worked as an consulting engineer on the initial build of
        my first venture backed product. Thoughtful and pragmatic engineer with
        advanced understanding of how to scale code for future usability and
        performance. One of the strongest engineers I know and a great all
        around person to boot. Would highly recommend Clint.`,
    },
    {
      person: {
        name: 'David Cacioppo',
        imageSrc: '/images/linkedin/david.jpg',
        title: 'President/CEO of emfluence',
        connection: "David was a client of Clint's",
      },
      timestamp: 1317081600,
      content: `Clint delivers on what he says he will and brings great ideas
        to the table. If you get the opportunity to work with Clint, bring him
        in early in the concept phase of your project. Odds are, he will have
        input that makes your project better.`,
    },
    {
      person: {
        name: 'Scott Ackerson',
        imageSrc: '/images/linkedin/scott.jpg',
        title: 'Vice President at Cerner Corporation',
        connection: 'Scott managed Clint directly',
      },
      timestamp: 1316995200,
      content: `Clint Hall embodies all that is web. His code, ideas and
        passion for all things web extend past his professional career into his
        social and personal life. He is un-conventional only in the fact that
        he is ahead of the thought leadership and natural curve of web
        developers. He also has a certain social adeptness that garners many
        opportunities for him and those around him.`,
    },
    {
      person: {
        name: 'Bo Fishback',
        imageSrc: '/images/linkedin/bo.jpg',
        title: 'CEO of Zaarly, Inc',
        connection: 'Bo worked with Clint, but at different companies',
      },
      timestamp: 1315785600,
      content: `Clint is a great guy to work with. He's a sharp, curious,
      problem solver and has both a deep knowledge base to draw from and an
      impressive capacity to learn quickly and apply new skills. I've had the
      chance to work with him on multiple occasions at multiple different
      companies and have been impressed at every turn.`,
    },
  ],
};

export default content;