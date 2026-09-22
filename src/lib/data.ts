import {
	Blend,
	LayoutDashboard,
	Network,
	PanelsTopLeft,
	PencilRuler,
	Smartphone,
} from "lucide-react";
import gem from "@/assets/gem.svg";
import handshake from "@/assets/handshake.svg";
import headCog from "@/assets/headCog.svg";

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

export const servicesData = [
	{
		id: "ui-ux-design",
		title: "UI/UX Design",
		description:
			"User-centered interfaces designed for clarity and ease of use. We prioritize functional elegance and rigorous testing to ensure seamless user journeys.",
		Icon: PencilRuler,
	},
	{
		id: "mobile-app-design",
		title: "Mobile App Design",
		description:
			"Intuitive mobile experiences built around real user needs. Native iOS and Android designs tailored for performance and native conventions.",
		Icon: Smartphone,
	},
	{
		id: "web-design",
		title: "Web Design",
		description:
			"Modern, responsive websites designed for businesses and digital products. We build accessible, high-performance web presences.",
		Icon: PanelsTopLeft,
	},
	{
		id: "saas-dashboards",
		title: "SaaS & Dashboards",
		description:
			"Clear interfaces for complex platforms and business systems. We transform dense data into actionable, visual insights.",
		Icon: LayoutDashboard,
	},
	{
		id: "design-systems-1",
		title: "Design Systems",
		description:
			"Scalable visual systems that create consistency across products. Comprehensive token libraries and component documentation.",
		Icon: Network,
	},
	{
		id: "design-systems-2",
		title: "Design Systems",
		description:
			"Scalable visual systems that create consistency across products. Comprehensive token libraries and component documentation.",
		Icon: Network,
	},
	{
		id: "graphics-design",
		title: "Graphics Design",
		description:
			"High-impact visual communication that cuts through the noise. From marketing collateral to digital assets, we create designs that command attention.",
		Icon: Network,
	},
	{
		id: "brand-design",
		title: "Brand Design",
		description:
			"Building cohesive visual identities that tell a story. We define the look, feel, and voice of your brand to create lasting connections with your audience.",
		Icon: Blend,
	},
];

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
		description:
			"Elevating visual communication through high-impact digital and print assets.",
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

export type PricingPlan = {
	id: string;
	name: string;
	tagline: string;
	price?: string;
	description?: string;
	features: string[];
	cta: string;
};

export const digitalProductPricing: PricingPlan[] = [
	{
		id: "starter",
		name: "STARTER",
		tagline: "For simple design needs.",
		price: "₦200,000",
		features: ["Basic Website UI", "Basic Mobile UI", "Basic Prototype"],
		cta: "Contact Sales",
	},
	{
		id: "business",
		name: "BUSINESS",
		tagline: "For complete digital experiences.",
		price: "₦300K-500K",
		features: [
			"Website UI/UX",
			"Mobile App UI/UX",
			"User Flows",
			"Wireframes",
			"Prototype",
		],
		cta: "Contact Sales",
	},
	{
		id: "custom-production",
		name: "Custom Production",
		tagline: "Large scale design for big companies",
		description:
			"We create a tailored design package based on your goals, requirements and scope. Let's discuss your project.",
		features: [],
		cta: "Contact Sales",
	},
];

export const brandAndVisuals: PricingPlan[] = [
	{
		id: "startup-and-business",
		name: "Startup and Business",
		tagline: "For businesses that need consistent visuals.",
		price: "₦200,000",
		features: [
			"Logo & Brand Identity",
			"Colour Palette",
			"Typography",
			"Brand Guidelines",
			"Social Media Designs",
		],
		cta: "Contact Sales",
	},
	{
		id: "custom-production",
		name: "Custom Production",
		tagline: "Large scale design for big companies",
		description:
			"We create a tailored design package based on your goals, requirements and scope. Let's discuss your project.",
		features: [],
		cta: "Contact Sales",
	},
];

export const processSteps = [
	{
		title: "Discovery",
		description:
			"Identifying core challenges and defining clear, strategic objectives to guide the design process.",
	},
	{
		title: "Design",
		description:
			"Iteratively refining structure, user flows, and visual direction to create clear and cohesive experiences.",
	},
	{
		title: "Delivery",
		description:
			"Delivering meticulous design handoffs with clear documentation and ongoing support throughout implementation.",
	},
];

export type PartnerBenefit = {
	id: string;
	title: string;
	description: string;
	image: string;
};

export const partnerBenefits: PartnerBenefit[] = [
	{
		id: "venture-partnerships",
		title: "Venture Partnerships",
		description: "Flexible models for startups and growing businesses.",
		image: handshake,
	},
	{
		id: "ecosystem-growth",
		title: "Ecosystem Growth",
		description: "Partnering with hubs and accelerators to foster innovation.",
		image: headCog,
	},
	{
		id: "strategic-execution",
		title: "Strategic Execution",
		description: "High-impact design that drives business results and scaling.",
		image: gem,
	},
];

export type PartnershipOpportunity = {
	id: string;
	title: string;
	description: string;
};

export const partnershipOpportunities: PartnershipOpportunity[] = [
	{
		id: "startups-scale-ups",
		title: "Startups & Scale-Ups",
		description:
			"Looking for a dedicated design partner to help scale your product.",
	},
	{
		id: "corporate-ventures",
		title: "Corporate Ventures",
		description:
			"Modernizing legacy systems and launching new digital initiatives.",
	},
	{
		id: "hubs-accelerators",
		title: "Hubs & Accelerators",
		description:
			"Supporting portfolio companies with world-class design expertise.",
	},
];
