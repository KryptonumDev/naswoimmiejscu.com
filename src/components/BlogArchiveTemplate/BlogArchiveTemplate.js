import React, { useEffect, useMemo, useState } from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import Container from "../Container/Container";
import BlogCard from "../BlogCard/BlogCard";

import {
    StyledHeading,
    StyledSlidesWrapper,
    StyledCategories,
} from "../Blog/StyledBlog";
import { StyledText } from "../Text/StyledText";

const Blog = ({
    data: {
        wpPage: { blog },
        allWpPost: { edges },
    },
    pageContext: {
        slug
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
    }, [])

    return (
        <Container>
            <StyledHeading>
                {blog?.tytul ? parse(blog.tytul) : null}
                <StyledCategories>
                    {/* {categories.group(({ name }) => name).map((category) => (
            <StyledText
              hasdeclaredfontcolor="var(--normalBlack)"
              hasdeclaredtexttransform="uppercase"
            >
              {category}(2)
            </StyledText>
          ))} */}
                </StyledCategories>
            </StyledHeading>
            <StyledSlidesWrapper>
                {posts.map(({ node }) => (
                    <BlogCard
                        category={node.categories.nodes[0].name}
                        title={node.title}
                        desc={node.artykul.miniaturka.krotkiOpisDoMiniaturki}
                        date={node.date}
                        btnText={node.artykul.miniaturka.tekstPrzycisku}
                        slug={node.slug}
                        imageDesktop={node.artykul.miniaturka.zdjecieDoMiniaturki}
                        imageMobile={node.artykul.miniaturka.zdjecieDoMiniaturkiMobile}
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
      blog {
        tytul
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
          date
          artykul {
            miniaturka {
              krotkiOpisDoMiniaturki
              tekstPrzycisku
              zdjecieDoMiniaturki {
                altText
                title
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              zdjecieDoMiniaturkiMobile {
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
