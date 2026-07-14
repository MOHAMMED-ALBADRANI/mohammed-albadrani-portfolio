export interface PersonalInfo {
  fullName: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  heroTagline: string;
  heroSummary: string;
  aboutSummary: string;
  badge: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  department?: string;
  period: string;
  location?: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  graduationYear: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export interface Award {
  id: string;
  title: string;
  description: string;
  year: string;
}

export interface ExpertiseCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface FocusArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  highlights: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface StatCard {
  label: string;
  value: string;
  icon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  awards: Award[];
  expertise: ExpertiseCategory[];
  focusAreas: FocusArea[];
  languages: Language[];
  stats: StatCard[];
}
