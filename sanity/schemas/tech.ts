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
      description: "List of technologies used",
      // @ts-ignore
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              description: "The name or label of the technology",
            },
            // Here we define the stack field as a normal object field, not with defineField
            {
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
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              description: "The icon of the technology",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                  initialValue: "Technology Icon",
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "label",
              stack: "stack",
              media: "icon",
            },
            prepare(selection: any) {
              const { title, stack, media } = selection;
              return {
                title: title,
                media: media,

                subtitle:
                  stack &&
                  `Stack: ${stack.charAt(0).toUpperCase() + stack.slice(1)}`,
              };
            },
          },
        },
      ],
    }),
  ],
});
