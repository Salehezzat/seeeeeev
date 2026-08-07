export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  items: string[];
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  country: string;
  industry: string;
  summary: string;
  description: string;
  stats: { label: string; value: string }[];
};

export type Article = {
  slug: string;
  title: string;
  category: "Market Update" | "Engineering" | "Import Guide";
  excerpt: string;
  date: string;
  readTime: string;
};

export type Testimonial = {
  industry: string;
  country: string;
  focus: string;
};

export type Supplier = {
  name: string;
  category: string;
  country: string;
};

export type Download = {
  title: string;
  category: "Company Profile" | "Brochures" | "Catalogues";
  fileType: string;
  size: string;
};

export type ProcessStep = {
  label: string;
  description: string;
};
