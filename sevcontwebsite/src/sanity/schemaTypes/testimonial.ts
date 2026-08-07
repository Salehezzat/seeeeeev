import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "industry", title: "Industry", type: "string", validation: (r) => r.required() }),
    defineField({ name: "country", title: "Country", type: "string", validation: (r) => r.required() }),
    defineField({ name: "focus", title: "Focus Area", type: "string", validation: (r) => r.required() }),
    defineField({ name: "logo", title: "Client Logo", type: "image" }),
  ],
});
