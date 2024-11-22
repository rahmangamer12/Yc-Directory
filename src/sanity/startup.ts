import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: 'startup',
    title: 'Startup',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: "author" }],
        }),
        defineField({
            name: 'views',
            title: 'Views',
            type: 'number',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: (Rule) => Rule.max(20).required().error("Please enter a category"),
        }),
        defineField({
            name: 'image',
            title: 'Image URL',
            type: 'url',
            validation: (Rule) => Rule.required().error("Image URL is required"),
        }),
        defineField({
            name: 'pitch',
            title: 'Pitch',
            type: 'markdown',
        }),
    ],
});
