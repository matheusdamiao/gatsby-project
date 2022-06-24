module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "My first gatsby project"
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`
      },
    }
  ],
}
