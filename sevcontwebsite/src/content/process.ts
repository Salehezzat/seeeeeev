import type { ProcessStep } from "./types";

export const whySevcontProcess: ProcessStep[] = [
  { label: "Customer Requirement", description: "We start by understanding technical and commercial needs in detail." },
  { label: "Supplier Selection", description: "Vetted manufacturers are matched against specification and budget." },
  { label: "Engineering Review", description: "Our engineers validate designs and specifications before order." },
  { label: "Quality Inspection", description: "Factory and pre-shipment inspection ensures compliance." },
  { label: "Logistics", description: "Freight, customs, and warehousing are coordinated end-to-end." },
  { label: "Delivery", description: "Goods arrive on schedule, documented, and ready for site." },
  { label: "After-sales Support", description: "Ongoing technical support and spare parts coordination." },
];

export const trustedProcessSteps: ProcessStep[] = [
  { label: "Inquiry", description: "Share your requirement and we scope it within 24 hours." },
  { label: "Technical Discussion", description: "Our engineers align on specification and standards." },
  { label: "Commercial Offer", description: "A transparent, itemized quotation is prepared." },
  { label: "Engineering Review", description: "Designs and documentation are validated before production." },
  { label: "Production", description: "Manufacturing is tracked against agreed milestones." },
  { label: "Inspection", description: "Independent quality checks before goods leave the factory." },
  { label: "Shipping", description: "Freight is booked and tracked across the full route." },
  { label: "Delivery", description: "Goods are delivered door-to-door, on schedule." },
];

export const whyIcons = [
  "Reliable Suppliers",
  "Competitive Pricing",
  "Technical Support",
  "Quality Assurance",
  "Fast Delivery",
  "International Standards",
] as const;

export const heroStats = [
  { value: "10+", label: "Global Markets" },
  { value: "40+", label: "Industrial Solutions" },
  { value: "15+", label: "Engineering Experts" },
  { value: "100+", label: "Shipments Delivered" },
] as const;
