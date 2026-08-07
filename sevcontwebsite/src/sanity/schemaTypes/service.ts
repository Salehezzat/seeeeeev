import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 2 }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "icon", title: "Icon name (Lucide)", type: "string" }),
    defineField({ name: "items", title: "Capability tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
