import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "The title of the page, please don't change this",
      readOnly: true,
      initialValue: "Contact Section",
    }),
    defineField({
      name: "copyright",
      title: "copyright text",
      type: "string",
      description: "The copyright text section at the bottom of the page",
      initialValue: "© 2023 username. All Rights Reserved.",
    }),

    defineField({
      name: "links",
      title: "List of links",
      type: "array",
      description: "List of links to social media and other sites",
      // @ts-ignore
      of: [
        {
          type: "object",
          fields: [
            {
              //  use a select field here
              name: "socialMediaName",
              title: "Social Media Name",
              type: "string",
              description: "The name of the company you worked for",
            },
            {
              name: "designation",
              title: "Designation",
              type: "string",
              description: "The position you held in the company",
            },
            {
              name: "startDate",
              title: "Start Date",
              type: "date",
              description: "Start date of employment",
            },
            {
              name: "currentlyEmployed",
              title: "Currently Employed",
              type: "boolean",
              description: "Check if the employee is still employed",
              initialValue: false,
            },
            {
              name: "endDate",
              title: "End Date",
              type: "date",
              description: "End date of employment",
              hidden: ({
                parent,
              }: {
                parent: {
                  currentlyEmployed: boolean;
                };
              }) => parent.currentlyEmployed, // Hide if currentlyEmployed is checked\
            },
            {
              name: "body",
              title: "Body",
              type: "blockContent",
              description: "Description of the work you did",
              initialValue: "Description of the work you did",
            },
          ],
          preview: {
            select: {
              title: "companyName",
              designation: "designation",
              time: "startDate",
              endTime: "endDate",
            },
            prepare(selection: any) {
              const { title, designation, time, endTime } = selection;
              return {
                title: title,
                subtitle: `${designation} - ${time} - ${
                  endTime ? endTime : "Present"
                }`,
              };
            },
          },
        },
      ],
    }),
  ],
});
