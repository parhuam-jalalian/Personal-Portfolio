import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      description: "Your Job Title",
    }),
    defineField({
      name: "resume",
      title: "resume",
      type: "file",
      description: "Upload your resume",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Add your name here",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      description: "Add your image here",
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
    defineField({
      name: "github",
      title: "GitHub Link",
      type: "string",
      description: "Add your GitHub link here",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn Link",
      type: "string",
      description: "Add your LinkedIn link here",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      description: "Add your email here",
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
