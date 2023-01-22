exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

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
  `);

  postData.data.allWpPost.edges.map(({ node }) => {
    createPage({
      path: `/artykul/${node.slug}/`,
      component: require.resolve(
        "./src/components/ArticleTemplate/ArticleTemplate.js"
      ),
      context: {
        postId: node.id,
      },
    });
  });

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
  `);

  caseData.data.allWpCaseStudy.edges.map(({ node }) => {
    createPage({
      path: `/case/${node.slug}/`,
      component: require.resolve(
        "./src/components/CaseTemplate/CaseTemplate.js"
      ),
      context: {
        caseId: node.id,
      },
    });
  });
};
