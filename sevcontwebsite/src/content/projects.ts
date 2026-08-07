import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "power-plant-libya",
    title: "Power Plant Libya",
    location: "Tripoli, Libya",
    country: "Libya",
    industry: "Power Generation",
    summary:
      "Supply and commissioning support for a multi-unit diesel power plant serving regional grid capacity.",
    description:
      "SEVCONT managed sourcing, factory inspection, and logistics for generator units and switchgear, coordinating delivery across three shipment phases with zero schedule slippage.",
    stats: [
      { label: "Capacity", value: "24 MW" },
      { label: "Units Delivered", value: "6" },
      { label: "Timeline", value: "9 months" },
    ],
  },
  {
    slug: "steel-supply-egypt",
    title: "Steel Supply Egypt",
    location: "Cairo, Egypt",
    country: "Egypt",
    industry: "Construction",
    summary:
      "Structural steel supply chain for a mixed-use development program across two cities.",
    description:
      "End-to-end mill sourcing, quality certification, and door-to-door delivery of structural steel, with in-market warehousing to smooth site drawdown schedules.",
    stats: [
      { label: "Volume", value: "14,000 t" },
      { label: "Mills Engaged", value: "3" },
      { label: "On-Time Delivery", value: "100%" },
    ],
  },
  {
    slug: "generator-project-rwanda",
    title: "Generator Project Rwanda",
    location: "Kigali, Rwanda",
    country: "Rwanda",
    industry: "Power Systems",
    summary:
      "Standby and hybrid power systems deployed across a national infrastructure initiative.",
    description:
      "Design support, equipment sourcing, and technical training delivered alongside hardware to build in-country maintenance capability.",
    stats: [
      { label: "Sites", value: "18" },
      { label: "Systems", value: "Hybrid + BESS" },
      { label: "Local Training", value: "40 engineers" },
    ],
  },
  {
    slug: "solar-project-saudi-arabia",
    title: "Solar Project Saudi Arabia",
    location: "Riyadh, Saudi Arabia",
    country: "Saudi Arabia",
    industry: "Renewable Energy",
    summary:
      "Utility-scale solar component supply with full technical and logistics management.",
    description:
      "Coordinated procurement of panels, inverters, and BESS units with pre-shipment inspection and bonded warehousing ahead of a phased site rollout.",
    stats: [
      { label: "Capacity", value: "60 MWp" },
      { label: "Components", value: "PV + BESS" },
      { label: "Phases", value: "3" },
    ],
  },
];
