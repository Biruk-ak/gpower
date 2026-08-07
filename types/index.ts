export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  span?: "tall" | "wide" | "normal";
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
  rating: number;
  initial: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  image: string;
}

export interface ContactInfo {
  phones: string[];
  email: string;
  address: string;
  hours: string[];
  mapsUrl: string;
}
