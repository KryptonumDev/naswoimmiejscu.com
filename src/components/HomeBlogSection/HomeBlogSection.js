import React, { useState } from "react";
import parse from "html-react-parser";
import { useStaticQuery, graphql } from "gatsby";

import AHASvg from "../AHASvg/AHASvg";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledHomeBlogSection,
  StyledContent,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledDescWrapper,
  StyledTitleElement,
  StyledIconWrapper,
} from "./StyledHomeBlogSection";

const HomeBlogSection = () => {
  const {
    wpPage: { stronaGlowna },
  } = useStaticQuery(graphql`
    query homeBlog {
      wpPage(id: { eq: "cG9zdDoyOA==" }) {
        stronaGlowna {
          sekcjaZBlogiem {
            rekomendacjeTytul
            rekomendacjeOpis
            blogTytul
            rekomendacjePrzycisk {
              url
              title
              target
            }
            blogOpis
            blogPrzycisk {
              url
              title
              target
            }
          }
        }
      }
    }
  `);
  const [isBlog, setIsBlog] = useState(true);

  return (
    <StyledHomeBlogSection>
      <StyledLeftWrapper>
        <StyledIconWrapper>
          <AHASvg />
        </StyledIconWrapper>
        <StyledContent
          onClick={() => setIsBlog(true)}
          type="button"
          hasdeclaredpadding="64px 87px 0 0"
          isactive={isBlog}
        >
          <StyledCircle hasdeclaredbg="var(--normalGreen)" />
          <StyledTitleElement>
            {stronaGlowna.sekcjaZBlogiem.blogTytul
              ? parse(stronaGlowna.sekcjaZBlogiem.blogTytul)
              : null}
          </StyledTitleElement>
          <StyledDescWrapper isleft>
            {stronaGlowna.sekcjaZBlogiem.blogTytul
              ? parse(stronaGlowna.sekcjaZBlogiem.blogOpis)
              : null}
          </StyledDescWrapper>
        </StyledContent>
        <StyledContent
          onClick={() => setIsBlog(false)}
          type="button"
          isright
          hasdeclaredpadding="0 87px 0 0"
          isactive={!isBlog}
        >
          <StyledCircle />
          <StyledTitleElement>
            {stronaGlowna.sekcjaZBlogiem.rekomendacjeTytul
              ? parse(stronaGlowna.sekcjaZBlogiem.rekomendacjeTytul)
              : null}
          </StyledTitleElement>
          <StyledDescWrapper>
            {stronaGlowna.sekcjaZBlogiem.rekomendacjeOpis
              ? parse(stronaGlowna.sekcjaZBlogiem.rekomendacjeOpis)
              : null}
          </StyledDescWrapper>
        </StyledContent>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        {isBlog ? (
          <div>tutaj będzie blog</div>
        ) : (
          <div>tutaj będą rekomendacje</div>
        )}
      </StyledRightWrapper>
    </StyledHomeBlogSection>
  );
};

export default HomeBlogSection;
