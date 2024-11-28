import { makeSource, defineDocumentType } from "contentlayer/source-files";
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    }
}
const Page = defineDocumentType(() => ({
    name: "Page",
    contentType: "mdx",
    filePathPattern: "pages/**/*.mdx",
    fields: {
        title: {
            type: "string",
            required: true
        },
        image: {
            type: "string",
            required: true,
        },
    },
    computedFields
}));
const Post = defineDocumentType(() => ({
    name: "Post",
    contentType: "mdx",
    filePathPattern: "posts/**/*.mdx",
    fields: {
        title: {
            type: "string",
            required: true
        },
        description: {
            type: "string",
            required: true,
        },
        date: {
            type: "date",
            required: true,
        }
    },
    computedFields
}))
export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Page, Post],
})