export const getStrapiUrl = () => {
  return process.env.NODE_ENV === "production"
    ? "https://strapi.alexanderclaes.be"
    : "http://localhost:1337";
};
