import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Mohammed Albadrani",
    title: "Emergency & Security Operations Manager",
    phone: "0559691116",
    email: "moh.albadrani@hotmail.com",
    location: "Yanbu, Saudi Arabia",
    badge: "Emergency Operations • Security Systems • Public Safety",
    heroTagline:
      "Leading Emergency Operations with Readiness, Security, and Precision.",
    heroSummary:
      "Emergency and Security Operations Manager with over a decade of experience at the Royal Commission Yanbu. Specializing in control room leadership, emergency communication systems, incident coordination, physical security, smart city operations, and government service excellence—committed to advancing public safety and Saudi Vision 2030.",
    aboutSummary:
      "A seasoned Emergency and Security Operations Manager with a proven track record at the Royal Commission Yanbu, driving operational readiness across emergency communications, control room management, and physical security systems. Recognized internationally for service excellence and dedicated to enhancing public safety through smart city innovation and government coordination.",
  },

  stats: [
    { label: "Years of Experience", value: "10+", icon: "Clock" },
    { label: "International Recognition", value: "2024 & 2025", icon: "Award" },
    { label: "Government Operations", value: "Royal Commission", icon: "Building2" },
  ],

  experiences: [
    {
      id: "exp-1",
      title: "Manager of Emergency and Communication Systems",
      organization: "Royal Commission Yanbu",
      period: "May 2025 – Present",
      location: "Yanbu, Saudi Arabia",
      responsibilities: [
        "Supervise Operations Center service quality and manage emergency call handling while ensuring the availability of response resources.",
        "Verify operational efficiency and effectiveness of all emergency communication systems and technologies.",
        "Ensure proper functionality and continuous operation of physical security systems and monitoring platforms.",
        "Develop and maintain incident reporting standards, procedures, and performance metrics; update reporting mechanisms in line with operational changes.",
        "Coordinate with government entities and relevant authorities to ensure compliance with national safety regulations and security protocols.",
        "Ensure full readiness of the Operations Center to respond to incidents, crises, and disasters, and coordinate with security agencies during emergencies.",
        "Support the development of the General Emergency Response Plan in collaboration with internal departments and government representatives.",
        "Review risk reports and operational data, prepare mitigation procedures, and deliver statistical analysis and performance reports to management.",
        "Contribute to preparing technical specifications for security systems, wireless communication devices, and surveillance technologies.",
      ],
    },
    {
      id: "exp-2",
      title: "Security System Coordinator",
      organization: "Royal Commission Yanbu",
      department: "Industrial Security & Safety Department",
      period: "Feb 2015 – 2023",
      location: "Yanbu, Saudi Arabia",
      responsibilities: [
        "Managed emergency case handling within the control room and monitored utilities via the CCTV system.",
        "Analyzed and contributed to security plans, working with smart city systems including CCTV monitoring, maintenance, and Intelligent Traffic Systems.",
        "Served as official acting Section Manager of Emergency and Communication Systems for two years.",
        "Oversaw crisis and disaster incident reporting and coordinated government affairs handling.",
        "Managed control room operations, risk and crisis management, and incident management processes.",
        "Administered city management systems, vehicle management systems, and physical security systems.",
      ],
    },
    {
      id: "exp-3",
      title: "Technician – Air Quality Monitoring",
      organization: "Saudi Environment Protection Company",
      period: "2013 – 2015",
      responsibilities: [
        "Operated and maintained air quality monitoring equipment in the air quality section.",
        "Conducted technical troubleshooting, prepared environmental reports, and calibrated measurement devices for daily air sample analysis.",
      ],
    },
  ],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor's Degree",
      field: "Information Technology (Computing & Informatics)",
      institution: "Saudi Electronic University",
      graduationYear: "2024",
    },
    {
      id: "edu-2",
      degree: "Diploma",
      field: "Instrumentation and Control Technology",
      institution: "Yanbu Industrial College",
      graduationYear: "2013",
    },
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Project Management",
      issuer: "Royal Commission",
      date: "May 2017",
    },
    {
      id: "cert-2",
      title: "Crisis Management",
      issuer: "TÜV NORD",
      date: "Sep 2017",
    },
    {
      id: "cert-3",
      title: "Control Room Management",
      issuer: "Professionals",
      date: "Mar 2015",
    },
    {
      id: "cert-4",
      title: "Intelligent Traffic System (ITS)",
      issuer: "Royal Commission Yanbu",
      date: "Feb 2019",
    },
    {
      id: "cert-5",
      title: "Hytera System",
      issuer: "Hytera",
      date: "May 2019",
    },
    {
      id: "cert-6",
      title: "ISO 9001",
      issuer: "TÜV NORD",
      date: "Jul 2017",
    },
  ],

  awards: [
    {
      id: "award-1",
      title: "Gold Winner – Best Emergency Service",
      description:
        "Global Top Ranking Performers Awards for Contact Center & CX Best Practices – Gold Winner for Best Emergency Service in Europe, Middle East & Africa.",
      year: "2024 & 2025",
    },
    {
      id: "award-2",
      title: "Best Public Service Center",
      description:
        "Contact Center World Best Public Service Center Award in Europe, Middle East & Africa – recognized for outstanding public service excellence.",
      year: "2024 & 2025",
    },
  ],

  expertise: [
    {
      id: "expertise-1",
      title: "Emergency & Control Room Operations",
      icon: "Siren",
      description:
        "Operations center management, emergency call handling, and round-the-clock operational readiness.",
      skills: [
        "Control Room Operations",
        "Emergency Call Handling",
        "Operational Readiness",
        "Emergency Communication Systems",
      ],
    },
    {
      id: "expertise-2",
      title: "Incident, Crisis & Disaster Management",
      icon: "ShieldAlert",
      description:
        "End-to-end incident coordination, crisis response planning, and disaster management.",
      skills: [
        "Incident Management",
        "Crisis Management",
        "Disaster Response",
        "Emergency Response Planning",
      ],
    },
    {
      id: "expertise-3",
      title: "Physical Security & Surveillance",
      icon: "Cctv",
      description:
        "Physical security systems, CCTV monitoring and maintenance, and surveillance technologies.",
      skills: [
        "Physical Security Systems",
        "CCTV Monitoring & Maintenance",
        "Surveillance Technologies",
        "Security Monitoring",
      ],
    },
    {
      id: "expertise-4",
      title: "Smart City & Traffic Systems",
      icon: "Building",
      description:
        "Smart city operations, intelligent traffic systems, vehicle management, and city management platforms.",
      skills: [
        "Smart City Operations",
        "Intelligent Traffic Systems (ITS)",
        "Vehicle Management Systems",
        "City Management",
      ],
    },
    {
      id: "expertise-5",
      title: "Risk Management & Compliance",
      icon: "FileSearch",
      description:
        "Risk analysis, operational data review, ISO auditing, and regulatory compliance.",
      skills: [
        "Risk Management",
        "ISO 9001 Auditing",
        "Regulatory Compliance",
        "Contract Management",
      ],
    },
    {
      id: "expertise-6",
      title: "Leadership & Government Coordination",
      icon: "Users",
      description:
        "Team leadership, stakeholder coordination, government liaison, and performance reporting.",
      skills: [
        "Team Leadership",
        "Government Coordination",
        "Stakeholder Communication",
        "Performance Metrics & Reporting",
      ],
    },
  ],

  focusAreas: [
    {
      id: "focus-1",
      title: "Emergency Operations Center Readiness",
      icon: "Radio",
      description:
        "Ensuring full operational readiness for incident, crisis, and disaster response through robust operations center management and coordinated emergency protocols.",
      highlights: [
        "24/7 operations center supervision",
        "Emergency response resource management",
        "Crisis and disaster coordination",
        "General Emergency Response Plan development",
      ],
    },
    {
      id: "focus-2",
      title: "Emergency Communication & Incident Coordination",
      icon: "PhoneCall",
      description:
        "Managing emergency communication systems, emergency call handling, and multi-agency incident coordination to ensure swift and effective response.",
      highlights: [
        "Emergency communication system oversight",
        "Emergency call handling and dispatch",
        "Multi-agency incident coordination",
        "Communication technology specifications",
      ],
    },
    {
      id: "focus-3",
      title: "Physical Security & Smart City Operations",
      icon: "Shield",
      description:
        "Overseeing physical security systems, CCTV monitoring and maintenance, and smart city platforms including intelligent traffic systems.",
      highlights: [
        "Physical security platform continuity",
        "CCTV system monitoring and maintenance",
        "Intelligent Traffic System operations",
        "Smart city and vehicle management systems",
      ],
    },
    {
      id: "focus-4",
      title: "Risk, Reporting & Continuous Improvement",
      icon: "BarChart3",
      description:
        "Reviewing risk reports, developing mitigation procedures, maintaining incident reporting standards, and delivering data-driven performance analysis to management.",
      highlights: [
        "Risk report review and mitigation",
        "Incident reporting standards and procedures",
        "Statistical analysis and performance metrics",
        "Operational data analysis and management reporting",
      ],
    },
  ],


};
