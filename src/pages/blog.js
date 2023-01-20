import React from "react";
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
  },
}) => {
  return (
    <Container>
      <StyledHeading>
        {blog?.tytul ? parse(blog.tytul) : null}
        <StyledCategories>
          <StyledText
            hasdeclaredfontcolor="var(--normalBlack)"
            hasdeclaredtexttransform="uppercase"
          >
            kategoria 1(2)
          </StyledText>
          <StyledText
            hasdeclaredfontcolor="var(--normalBlack)"
            hasdeclaredtexttransform="uppercase"
          >
            kategoria 1(2)
          </StyledText>
          <StyledText
            hasdeclaredfontcolor="var(--normalBlack)"
            hasdeclaredtexttransform="uppercase"
          >
            kategoria 1(2)
          </StyledText>
          <StyledText
            hasdeclaredfontcolor="var(--normalBlack)"
            hasdeclaredtexttransform="uppercase"
          >
            kategoria 1(2)
          </StyledText>
        </StyledCategories>
      </StyledHeading>
      <StyledSlidesWrapper>
        <BlogCard
          category="nazwa kategorii"
          title="Lorem ipsum dolor sit"
          desc="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Quis ipsum"
          date="01.10.2022"
          btnText="POZNAJ"
          slug=""
          image=""
        />
      </StyledSlidesWrapper>
    </Container>
  );
};

export default Blog;

export const query = graphql`
  query blogQuery {
    wpPage(id: { eq: "cG9zdDo0ODM=" }) {
      blog {
        tytul
      }
    }
  }
`;
