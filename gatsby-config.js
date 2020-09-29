module.exports = {
  siteMetadata: {
    title: `Kilowatt Media | US BEV Buyer's Guide`,
    description: ``,
    author: `@codynhat`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1aZ1pb9QjMAZjyDYSeyq7uM9oFqav4jMAl6l7spfCTIE",
        worksheetTitle: "data",
        credentials: JSON.parse(process.env.SHEETS_SERVICE_ACCOUNT),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
