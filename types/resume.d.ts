/**
 * Résumé of an individual defined using the JSON Resume schema.
 *
 * @see {@link https://jsonresume.org/}
 *
 * Adapted for my use case-- made some portions required.
 */
declare interface Resume {
  /** Version of JSON schema is defined against. */
  $schema?: string;

  /** Basic information of an individual. */
  basics: Basic;

  /** Work history. */
  work: Work[];

  /** Volunteering experience. */
  volunteer?: Volunteer[];

  /** Education history. */
  education: Education[];

  /** Awards received throughout one's professional career. */
  awards?: Award[];

  /** Certificates received throughout one's professional career. */
  certificates?: Certificate[];

  /** Publications throughout one's career. */
  publications?: Publication[];

  /** Professional skills. */
  skills?: Skill[];

  /** List of languages one speaks. */
  languages?: Language[];

  /** List of interests one has. */
  interests?: Interest[];

  /** List of references one has received */
  references: Reference[];

  /** Projects one has participated in. */
  projects: Project[];

  /** The schema version and any other tooling configuration lives here. */
  meta: Meta;
}

/** Basic information of an individual.  */
declare interface Basic {
  /**
   * Name of the individual.
   *
   * @see {@link https://www.w3.org/International/questions/qa-personal-names}
   */
  name: string;

  /**
   * The primary position of the individual.
   *
   * For example: Web Developer
   */
  label: string;

  /** URL to an a JPEG or PNG image. */
  image: string;

  /**
   * Email address to contact the individual.
   *
   * For example: thomas@jsonresume.org
   */
  email: string;

  /**
   * Phone numbers, can be specified in any format.
   *
   * For example: 712-117-2923 or +44 7267038141
   */
  phone?: string;

  /**
   * URL to the individuals website.
   *
   * For example: a portfolio or personal homepage
   */
  url: string;

  /** A short bio about the individual. */
  summary: string;

  /** Where the individual is located. */
  location: ResumeLocation;

  /** An array of social media networks the individual is on. */
  profiles: Profile[];
}

/** The address to a physical location. */
declare interface ResumeLocation {
  /**
   * To add multiple address lines, use \n.
   *
   * For example: 1234 Glücklichkeit Straße\nHinterhaus 5. Etage li.
   */
  address?: string;

  /** Postal code for the location. */
  postalCode?: string;

  city: string;

  /**
   * ISO-3166-1 ALPHA-2 code for the country.
   *
   * For example: US, AU, IN
   */
  countryCode: string;

  /** The general region where you live. Can be a state, county, or province. */
  region: string;
}

/** Social media profile. */
declare interface Profile {
  /**
   * The name of the network or platform.
   *
   * For example: Facebook or Twitter
   */
  network: string;

  /**
   * Username on the platform.
   *
   * For example: elonmusk
   */
  username: string;

  /**
   * URL to the profile on the platform.
   *
   * For example: https://twitter.com/elonmusk
   * */
  url: string;
}

declare interface Occupation {
  /**
   * The start date of the occupation.
   */
  startDate: string;

  /**
   * The end date of the occupation. If undefined or null, may be interpretted
   * as "Present" by implementations.
   */
  endDate?: string;
}

/** A work entry on the résumé. */
declare interface Work extends Occupation {
  /**
   * The name of the organization.
   *
   * For example: Facebook
   */
  name: string;

  /** e.g. Menlo Park, CA */
  location: string;

  /** e.g. Social Media Company */
  description?: string;

  /** e.g. Software Engineer */
  position: string;

  /** e.g. https://facebook.com */
  url?: string;

  /** An overview of the responsibilities at the organization. */
  summary: string;

  /** Accomplishments achieved during the position. */
  highlights?: string[];

  /* CUSTOMIZATIONS FOR clintandrewhall.com */
  key: string;
  keywords: string[];
  hideFromSite?: boolean;
}

declare interface Volunteer extends Occupation {
  /** e.g. Facebook */
  organization?: string;

  /** e.g. Software Engineer */
  position?: string;

  /** e.g. https://facebook.example.com */
  url?: string;

  /** Give an overview of your responsibilities at the company */
  summary?: string;

  /** Specify accomplishments and achievements */
  highlights?: string[];
}

declare interface Education extends Occupation {
  /** e.g. Massachusetts Institute of Technology */
  institution?: string;

  /** e.g. https://facebook.example.com */
  url?: string;

  /** e.g. Arts */
  area?: string;

  /** e.g. Bachelor */
  studyType?: string;

  /** grade point average, e.g. 3.67/4.0 */
  score?: string;

  /** List notable courses/subjects */
  courses?: string[];
}

declare interface Award {
  /** e.g. One of the 100 greatest minds of the century */
  title?: string;

  date?: string;

  /** e.g. Time Magazine */
  awarder?: string;

  /** e.g. Received for my work with Quantum Physics */
  summary?: string;
}

declare interface Certificate {
  /** e.g. Certified Kubernetes Administrator */
  name?: string;

  /** e.g. 1989-06-12 */
  date?: string;

  /** e.g. https://example.com */
  url?: string;

  /** e.g. CNCF */
  issuer?: string;
}

declare interface Publication {
  /** e.g. The World Wide Web */
  name?: string;

  /** e.g. IEEE, Computer Magazine */
  publisher?: string;

  releaseDate?: string;

  /** e.g. https://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html */
  url?: string;

  /** Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML. */
  summary?: string;
}

/** A skill and description of mastery. */
declare interface Skill {
  /**
   * The name of the skill.
   *
   * For example: Web Development
   */
  name?: string;

  /**
   * A word that describes the level of mastery of the skill.
   *
   * For example: Master
   */
  level?: string;

  /** Keywords pertaining to this skill. */
  keywords?: string[];
}

/** Fluency of a language. */
declare interface Language {
  /**
   * The display friendly name of a language.
   *
   * For example: English or Spanish
   */
  language?: string;

  /**
   * The level of fluency in the language.
   *
   * For example: Fluent or Beginner
   */
  fluency?: string;
}

/** Interest or hobby an individual may have. */
declare interface Interest {
  /**
   * Name of the interest.
   *
   * For example: Philosophy
   */
  name?: string;

  keywords?: string[];
}

/** A reference on the résumé.  */
declare interface Reference {
  /** The name of the individual or entity that made the statement. */
  name?: string;

  /**
   * For example: Joe blogs was a great employee, who turned up to work at
   * least once a week. He exceeded my expectations when it came to doing
   * nothing. */
  reference?: string;

  /* CUSTOMIZATIONS FOR clintandrewhall.com */
  image?: string;
  title?: string;
  connection?: string;
  timestamp?: number;
}

/**
 * A project an individual may've particpated in during their professional
 * career.
 */
declare interface Project extends Occupation {
  /**
   * The name of the project.
   *
   * For example: JSON Resume
   */
  name?: string;

  /**
   * A short summary of project.
   *
   * For example: Collated works of 2017.
   */
  description?: string;

  /** What the individual achieved during the project. */
  highlights?: string[];

  /** Key elements or technologies involved. */
  keywords?: string[];

  /**
   * Where the project or information about the project can be found.
   *
   * For example: https://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html
   */
  url?: string;

  /** The role on this project or in the company. */
  roles?: string[];

  /**
   * Relevant entity/organization affiliations.
   *
   * For example: greenpeace or corporationXYZ
   */
  entity?: string;

  /**
   * For example: volunteering, presentation, talk, application, or conference
   */
  type?: string;
}

/** Metadata for a résumé. */
declare interface Meta {
  /** URL to the latest version of this document. */
  canonical?: string;

  /**
   * The version, should follow semantic versioning.
   *
   * For example: v1.0.0
   *
   * @see {@link https://semver.org/}
   */
  version?: string;

  /** The date that the résumé was last modified. */
  lastModified?: string;
}
