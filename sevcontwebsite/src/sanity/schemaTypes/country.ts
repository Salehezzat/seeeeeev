import { defineField, defineType } from "sanity";

export const country = defineType({
  name: "country",
  title: "Country / Market",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "code", title: "ISO Code", type: "string", validation: (r) => r.required().length(2) }),
    defineField({ name: "lat", title: "Latitude", type: "number", validation: (r) => r.required() }),
    defineField({ name: "lng", title: "Longitude", type: "number", validation: (r) => r.required() }),
    defineField({ name: "live", title: "Active Market", type: "boolean", initialValue: true }),
    defineField({ name: "blurb", title: "Short Description", type: "text", rows: 2 }),
    defineField({ name: "projects", title: "Project Count", type: "number" }),
    defineField({ name: "partners", title: "Partner Count", type: "number" }),
    defineField({ name: "services", title: "Services Offered", type: "array", of: [{ type: "string" }] }),
  ],
});
