declare type Contact = {
  website: string,
  email: string,
  other: any[],
};

declare type Education = {
  level: string,
  degree: string,
  history: EducationHistory[],
};

declare type Employment = {
  history: EmploymentHistory[],
};

declare type EmploymentHistory = {
  employer: string,
  key: string,
  position: string,
  summary: string,
  start: string,
  end: string,
  keywords: any[],
  highlights: any[],
};

declare type EducationHistory = {
  institution: string,
  title: string,
  url: string,
  start: string,
  end: string,
  summary: string,
  curriculum: any[],
};

declare type Info = {
  label: string,
  brief: string,
  image: string,
};

declare type Location = {
  address: string,
  city: string,
  region: string,
  code: string,
  country: string,
};

declare type Meta = {
  format: string,
  version: string,
};

declare type Publisher = {
  name: string,
  url: string,
};

declare type Recognition = {
  flavor: string,
  from: string,
  title: string,
  event: string,
  date: string,
  summary: string,
  url?: string,
};

declare type FreshResume = {
  name: string,
  meta: Meta,
  info: Info,
  contact: Contact,
  location: Location,
  social: Social[],
  employment: Employment,
  education: Education,
  speaking: Speaking[],
  writing: Writing[],
  recognition: Recognition[],
  testimonials: Testimonial[],
};

declare type Social = {
  label: string,
  network: string,
  user: string,
  url: string,
};

declare type Speaking = {
  name: string,
  event: string,
  role: string,
  releaseDate?: string,
  url: string,
  summary: string,
  date?: string,
};

declare type Testimonial = {
  name: string,
  imageSrc: string,
  flavor?: string,
  title: string,
  connection: string,
  timestamp: number,
  quote: string,
};

declare type Writing = {
  title: string,
  flavor: string,
  date: string,
  publisher: Publisher,
  url: string,
  author: string,
  summary: string,
};
