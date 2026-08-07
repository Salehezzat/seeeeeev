import { defineField, defineType } from "sanity";

export const download = defineType({
  name: "download",
  title: "Download",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Company Profile", "Brochures", "Catalogues"] },
    }),
    defineField({ name: "file", title: "File", type: "file", validation: (r) => r.required() }),
  ],
});
