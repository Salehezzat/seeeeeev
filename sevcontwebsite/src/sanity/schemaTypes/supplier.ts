import { defineField, defineType } from "sanity";

export const supplier = defineType({
  name: "supplier",
  title: "Supplier",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "country", title: "Country", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
  ],
});
