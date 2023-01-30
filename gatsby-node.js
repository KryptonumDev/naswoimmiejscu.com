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
        postId: node.id,
        url: `/blog/${node.slug}/`
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
        caseId: node.id,
        url: `/sukcesy/${node.slug}/`
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
      id: 'cG9zdDo0ODM=',
      url: `/blog/`
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
        name: name,
        url: `/blog/${slug}/`
      }
    })
  })



  createPage({
    path: `/`,
    component: require.resolve(
      './src/templates/index.js'
    ),
    context: {
      url: '/'
    }
  })

  createPage({
    path: `/kobiety/`,
    component: require.resolve(
      './src/templates/kobiety.js'
    ),
    context: {
      url: '/kobiety/'
    }
  })

  createPage({
    path: `/kontakt/`,
    component: require.resolve(
      './src/templates/kontakt.js'
    ),
    context: {
      url: '/kontakt/'
    }
  })

  createPage({
    path: `/mlodziez`,
    component: require.resolve(
      './src/templates/mlodziez.js'
    ),
    context: {
      url: '/mlodziez/'
    }
  })

  createPage({
    path: `/o-mnie/`,
    component: require.resolve(
      './src/templates/o-mnie.js'
    ),
    context: {
      url: '/o-mnie/'
    }
  })

  createPage({
    path: `/opinie/`,
    component: require.resolve(
      './src/templates/opinie.js'
    ),
    context: {
      url: '/opinie/'
    }
  })

  createPage({
    path: `/polityka-prywatnosci/`,
    component: require.resolve(
      './src/templates/polityka-prywatnosci.js'
    ),
    context: {
      url: '/polityka-prywatnosci/'
    }
  })

  createPage({
    path: `/spotkajmy-sie/`,
    component: require.resolve(
      './src/templates/spotkajmy-sie.js'
    ),
    context: {
      url: '/spotkajmy-sie/'
    }
  })
}
