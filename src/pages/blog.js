import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import Container from "../components/Container/Container";
import BlogCard from "../components/BlogCard/BlogCard";

import {
  StyledHeading,
  StyledSlidesWrapper,
  StyledCategories,
} from "../components/Blog/StyledBlog";
import { StyledText } from "../components/Text/StyledText";

const Blog = ({
  data: {
    wpPage: { blog },
    allWpPost: { edges },
  },
}) => {
  const [categories, setCategories] = useState([]);

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
        {edges.map(({ node }) => (
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

export { Head } from "../components/Head/Head";

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
    allWpPost {
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
            }
          }
        }
      }
    }
  }
`;
