module.exports = {
  siteMetadata: {
    siteUrl: "https://carlo-p-tech.github.io",
    title: "CP_Blog",
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
