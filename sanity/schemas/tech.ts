import { defineField, defineType } from "sanity";
import { ITechnologyReferenceDocument } from "@/types/interface";

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
      of: [
        {
          type: "reference",
          to: { type: "technologyOptions" },
          validation: (Rule: any) => Rule.unique(),
          options: {
            filter: ({
              document,
            }: {
              document: ITechnologyReferenceDocument;
            }) => {
              // console.log("documents list", document);
              const existingProjects = document.technologies
                .map((project) => project._ref)
                .filter(Boolean);
              return {
                filter: "!(_id in $existingProjects)",
                params: {
                  existingProjects,
                },
              };
            },
          },
        },
      ],
    }),
  ],
});
