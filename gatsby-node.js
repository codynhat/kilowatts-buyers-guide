/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type googleSheetDataRow implements Node {
      model: String
      releasedate: String
    }
  `
  createTypes(typeDefs)
}
