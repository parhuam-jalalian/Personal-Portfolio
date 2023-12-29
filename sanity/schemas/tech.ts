import { defineField, defineType } from "sanity";

export default defineType({
  name: "tech",
  title: "Tech Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the Page",
      initialValue: "Technologies",
      readOnly: true,
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      description: "Choose List of technologies you want to display",
      // @ts-ignore
      of: [{ type: "reference", to: { type: "technologyOptions" } }],
    }),
  ],
});
