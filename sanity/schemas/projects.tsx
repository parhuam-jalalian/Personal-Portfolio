import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Featured Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      description: "Add your project title here",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Add your project description here",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      description: "Add your project image here",
      options: {
        hotspot: true,
      },
      // @ts-ignore
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Add an alt text of the project image",
        },
      ],
    }),
    defineField({
      name: "github",
      title: "GitHub repository Link",
      type: "string",
      description: "Add project github repository link here",
    }),
    defineField({
      name: "deployment",
      title: "Deployment Link",
      type: "string",
      description: "Add Live deployment link here",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author && `by ${author}`,
      };
    },
  },
});
