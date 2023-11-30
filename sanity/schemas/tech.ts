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
      description: "Title of the Tech you use",
    }),
    defineField({
      name: "serial",
      title: "Serial Number",
      type: "number",
      description: "Add a number to sort the techs in the order you want",
    }),
    defineField({
      name: "stack",
      title: "Belongs to Stack",
      type: "string",
      description:
        "The stack this tech belongs to, e.g. Frontend, Backend, etc.",
      initialValue: "Frontend",
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Devops", value: "devops" },
        ],
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      serial: "serial",
    },
    prepare(selection) {
      const { author, serial, title } = selection;
      return {
        ...selection,
        title: `${serial} - ${title}`,
        subtitle: author && `by ${author}`,
      };
    },
  },
});
