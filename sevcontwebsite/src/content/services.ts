import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "power-systems",
    title: "Power Systems",
    summary:
      "Reliable power generation and distribution equipment for industrial and utility-scale projects.",
    description:
      "From standby generation to grid-scale distribution, we source, engineer, and deliver power systems built for demanding industrial environments — backed by technical validation at every stage.",
    icon: "Zap",
    items: ["Generators", "Transformers", "Switchgear", "Solar", "Hybrid", "BESS"],
  },
  {
    slug: "raw-materials",
    title: "Industrial Raw Materials",
    summary:
      "Sourcing and supply of steel, aluminum, copper, and industrial components at scale.",
    description:
      "We connect manufacturers and contractors with vetted mills and fabricators across Asia, managing quality, certification, and logistics from mill to site.",
    icon: "Boxes",
    items: ["Steel", "Aluminum", "Copper", "Industrial Components", "Factory Equipment"],
  },
  {
    slug: "engineering",
    title: "Engineering",
    summary:
      "Electrical design and technical consultation that de-risks procurement and execution.",
    description:
      "Our engineering team supports clients from concept through commissioning — tender documentation, value engineering, and on-site project management included.",
    icon: "DraftingCompass",
    items: [
      "Electrical Design",
      "Technical Consultation",
      "Tender Support",
      "Value Engineering",
      "Project Management",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    summary:
      "End-to-end freight, inspection, and warehousing across international trade corridors.",
    description:
      "A full logistics stack — freight forwarding, pre-shipment inspection, bonded warehousing, and export/import documentation — delivered door-to-door.",
    icon: "Ship",
    items: ["Freight", "Inspection", "Warehousing", "Export", "Import", "Door-to-Door"],
  },
];
