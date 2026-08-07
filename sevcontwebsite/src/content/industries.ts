import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "construction",
    title: "Construction",
    summary:
      "Structural steel, power equipment, and materials supply for large-scale construction programs.",
    icon: "HardHat",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary:
      "Factory equipment, raw materials, and MRO supply chains for continuous production lines.",
    icon: "Factory",
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    summary:
      "Power systems and industrial components engineered for upstream and downstream operations.",
    icon: "Flame",
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    summary:
      "Turnkey sourcing and engineering support for roads, utilities, and public works projects.",
    icon: "Landmark",
  },
  {
    slug: "government",
    title: "Government Projects",
    summary:
      "Compliant, transparent procurement for national development and public sector programs.",
    icon: "ShieldCheck",
  },
];
