exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            url
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const { url } = node.frontmatter
    actions.createPage({
      path: `/${url}`,
      component: require.resolve("./src/templates/single-post.js"),
      context: { url },
    })
  })
}
