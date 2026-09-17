export type Service = {
  id: string;
  title: string;
  description: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
};

export const dummyData: Service[] = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Creating intuitive, engaging user experiences grounded in meaningful user research.",
  },
  {
    id: "mobile-app-design",
    title: "Mobile App Design",
    description:
      "Designing seamless, responsive mobile experiences that feel intuitive and natural across native and cross-platform platforms.",
  },
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Creating responsive, high-performance websites that align with your brand and are designed to drive meaningful conversions.",
  },
  {
    id: "saas-dashboards",
    title: "SaaS & Dashboards",
    description:
      "Simplifying complex data visualizations and workflows into intuitive, user-friendly experiences.",
  },
  {
    id: "prototyping",
    title: "Prototyping",
    description:
      "Creating high-fidelity, interactive prototypes that bring product concepts to life for user testing and stakeholder validation.",
  },
  {
    id: "design-systems",
    title: "Design Systems",
    description:
      "Building scalable, well-documented design systems that ensure consistency across digital products.",
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Elevating visual communication through high-impact digital and print assets.",
  },
  {
    id: "brand-design",
    title: "Brand Design",
    description:
      "Crafting cohesive identities that resonate with your target audience and stand the test of time.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "pitch-velocity",
    title: "Pitch Velocity",
    category: "SportsTech",
    description: "Performance tracking for elite athletes.",
    image: "https://picsum.photos/seed/pitch-velocity/1200/675",
    featured: true,
  },
  {
    id: "kick-bot",
    title: "Kick Bot",
    category: "SportsTech",
    description: "Automated sports analytics for the next generation.",
    image: "https://picsum.photos/seed/kick-bot/800/450",
    featured: false,
  },
  {
    id: "medix",
    title: "Medix",
    category: "HealthTech",
    description: "Healthcare management simplified for patients and providers.",
    image: "https://picsum.photos/seed/medix/800/450",
    featured: false,
  },
  {
    id: "readora",
    title: "READORA",
    category: "FinTech",
    description: "Personal finance management for the modern era.",
    image: "https://picsum.photos/seed/readora/800/450",
    featured: false,
  },
  {
    id: "medtrak",
    title: "MEDTRAK",
    category: "HealthTech",
    description: "Performance tracking for elite athletes.",
    image: "https://picsum.photos/seed/medtrak/800/450",
    featured: false,
  },
];
