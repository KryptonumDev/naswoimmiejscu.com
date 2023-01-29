exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const postData = await graphql(`
    {
      allWpPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  postData.data.allWpPost.edges.map(({ node }) => {
    createPage({
      path: `/blog/${node.slug}/`,
      component: require.resolve(
        './src/components/ArticleTemplate/ArticleTemplate.js'
      ),
      context: {
        postId: node.id
      }
    })
  })

  const caseData = await graphql(`
    {
      allWpCaseStudy {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)

  caseData.data.allWpCaseStudy.edges.map(({ node }) => {
    createPage({
      path: `/sukcesy/${node.slug}/`,
      component: require.resolve(
        './src/components/CaseTemplate/CaseTemplate.js'
      ),
      context: {
        caseId: node.id
      }
    })
  })

  const blogArchiveData = await graphql(`
    {
      allWpCategory(filter: { count: { gt: 0 } }) {
        nodes {
          name
          slug
          id
        }
      }
    }
  `)

  createPage({
    path: `/blog/`,
    component: require.resolve(
      './src/components/BlogArchiveTemplate/BlogArchiveTemplate.js'
    ),
    context: {
      id: 'cG9zdDo0ODM='
    }
  })

  blogArchiveData.data.allWpCategory.nodes.map(({ name, slug, id }) => {
    createPage({
      path: `/blog/${slug}/`,
      component: require.resolve(
        './src/components/BlogArchiveTemplate/BlogArchiveTemplate.js'
      ),
      context: {
        id: id,
        slug: slug,
        name: name
      }
    })
  })
}
