import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'id',
            title: 'ID',
            type: 'number',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.email().required().error("Please provide a valid email"),
        }),
        defineField({
            name: 'image',
            title: 'Image URL',
            type: 'url',
        }),
        defineField({
            name: 'bio',
            title: 'Biography',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
});
