// contentlayer.config.js
import { makeSource, defineDocumentType } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Page = defineDocumentType(() => ({
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
      required: true
    }
  },
  computedFields
}));
var Post = defineDocumentType(() => ({
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
      required: true
    },
    date: {
      type: "date",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Page, Post]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HFO7IF2R.mjs.map
