import React, { useMemo } from "react";
import { graphql, Link } from "gatsby";

import Container from "../Container/Container";
import BlogCard from "../BlogCard/BlogCard";

import {
  StyledHeading,
  StyledSlidesWrapper,
  StyledCategories,
} from "../Blog/StyledBlog";
import { StyledText } from "../Text/StyledText";
import styled from "styled-components";

const Blog = ({
  data: {
    allWpPost: { edges },
    allWpCategory: { nodes }
  },
  pageContext: {
    slug,
    name
  }
}) => {
  const posts = useMemo(() => {
    if (!slug) {
      return edges
    }
    return edges.filter(({ node }) => {
      let isAccepted = false
      node.categories.nodes.every(element => {
        if (element.slug === slug) {
          isAccepted = true
        }
        return !isAccepted
      })
      return isAccepted
    })
  }, [edges, slug])

  return (
    <Container>
      <Circle className="circle" width="774" height="774" viewBox="0 0 774 774" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="387" cy="387" r="351.5" stroke="#0BC76D" stroke-width="71" />
      </Circle>
      <StyledHeading>
        <h1>Blog{slug ? ' – ' + name : ''}</h1>
        <StyledCategories>
          <Link activeClassName="active" to={'/blog/'}>
            <StyledText
              hasdeclaredfontcolor="var(--normalBlack)"
              hasdeclaredtexttransform="uppercase"
            >
              blog ({edges.length})
            </StyledText>
          </Link>
          {nodes.map(({ slug, name, count }) => (
            <Link activeClassName="active" to={'/blog/' + slug + '/'}>
              <StyledText
                hasdeclaredfontcolor="var(--normalBlack)"
                hasdeclaredtexttransform="uppercase"
              >
                {name} ({count})
              </StyledText>
            </Link>
          ))}
        </StyledCategories>
      </StyledHeading>
      <StyledSlidesWrapper>
        {posts.map(({ node }) => (
          <BlogCard
            category={node.categories.nodes[0].name}
            title={node.title}
            desc={node.artykul.miniaturka.krotkiOpisDoMiniaturki}
            date={node.date}
            btnText={'POZNAJ TĘ NOWOŚĆ'}
            slug={node.slug}
            imageDesktop={node.artykul.miniaturka.zdjecieDoMiniaturki}
          />
        ))}
      </StyledSlidesWrapper>
    </Container>
  );
};

export default Blog;

export { Head } from "../Head/Head";

export const query = graphql`
  query blogQuery {
    wpPage(id: { eq: "cG9zdDo0ODM=" }) {
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphUrl
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
    }
    allWpCategory(filter: {count: {gt: 0}}) {
      nodes {
        name
        count
        slug
      }
    }
    allWpPost{
      edges {
        node {
          slug
          title
          date(formatString: "DD.MM.YYYY r.")
          artykul {
            miniaturka {
              krotkiOpisDoMiniaturki
              zdjecieDoMiniaturki {
                altText
                title
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

const Circle = styled.svg`
  position: absolute;
  right: -500px;
  top: 30%;
  z-index: 0;
`