export default {
  name: "comment",
  type: "document",
  title: "Commentaire",
  fields: [
    {
      title: "Nom",
      name: "name",
      type: "string",
    },
    {
      title: "Approuver",
      name: "approved",
      type: "boolean",
      description:
        "Les commentaires non approuvé, ne seront pas visible dans le site.",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Commentaire",
      name: "comment",
      type: "text",
    },
    {
      title: "Article",
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
  preview: {
    select: {
      name: "name",
      comment: "comment",
      post: "post.title",
    },
    prepare({ name, comment, post }) {
      return {
        title: `${name} dans ${post}`,
        subtitle: comment,
      };
    },
  },
};
