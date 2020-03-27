export const getStrapiUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "http://strapi.alexanderclaes.be"
    : "http://localhost:1337";
};
