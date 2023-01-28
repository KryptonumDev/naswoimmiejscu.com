/** @format */

import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import Image from "../Image/Image";
import HomeBlogSection from "../HomeBlogSection/HomeBlogSection";
import Container from "../Container/Container";

import {
    StyledFirstSection,
    StyledTextWrapperFirst,
    StyledImageFirstSection,
    StyledTitle,
    StyledDescFirst,
    StyledSecondDesc,
    StyledCirclesWrapper,
    StyledSecondSection,
    StyledLeftSecondWrapper,
    StyledRightSecondWrapper,
    StyledIconsWrapper,
    StyledIconWrapper,
    StyledIcon,
    StyledTextWrapper,
    StyledName,
    StyledDesc,
    StyledCircleWrapper,
    StyledGlobalWhiteCircle,
    StyledMobileCircle,
} from "./StyledFirstSection";
import { StyledCircle } from "../Circle/StyledCircle";
import { useEffect } from "react";

const CaseTemplate = ({
    data: {
        wpCaseStudy: {
            caseStudyArtykul: {
                trescStronyCaseStudy: {
                    pierwszaSekcjaCaseStudy,
                    drugaSekcjaCaseStudy,
                },
                sekcjaZBlogiem,
            },
        },
    },
}) => {
    useEffect(() => {
        setTimeout(() => {
          document.getElementById('main').classList.add('active')
        }, 1)
    }, [])
    return (
        <main id='main'>
            <Container>
                <StyledFirstSection>
                    <StyledTextWrapperFirst>
                        <StyledTitle className="case-template">
                            {pierwszaSekcjaCaseStudy.tytul
                                ? parse(pierwszaSekcjaCaseStudy.tytul)
                                : null}
                        </StyledTitle>
                        <StyledDescFirst>
                            {pierwszaSekcjaCaseStudy.pierwszyOpis
                                ? parse(pierwszaSekcjaCaseStudy.pierwszyOpis)
                                : null}
                        </StyledDescFirst>
                        <StyledSecondDesc>
                            {pierwszaSekcjaCaseStudy.drugiOpis
                                ? parse(pierwszaSekcjaCaseStudy.drugiOpis)
                                : null}

                            <StyledCirclesWrapper>
                                <StyledCircle
                                    hasdeclaredbg="var(--normalGreen)"
                                    hasdeclaredwidth="22px"
                                    hasdeclaredheight="22px"
                                />
                                <StyledCircle
                                    hasdeclaredbg="var(--normalGreen)"
                                    hasdeclaredwidth="22px"
                                    hasdeclaredheight="22px"
                                />
                            </StyledCirclesWrapper>
                        </StyledSecondDesc>
                        <StyledGlobalWhiteCircle>
                            <svg
                                width="774"
                                height="774"
                                viewBox="0 0 774 774"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="387"
                                    cy="387"
                                    r="351.5"
                                    stroke="white"
                                    strokeWidth="71"
                                />
                            </svg>
                        </StyledGlobalWhiteCircle>
                    </StyledTextWrapperFirst>
                    <StyledImageFirstSection>
                        <StyledCircleWrapper>
                            <StyledCircle
                                hasdeclaredbg="var(--normalGreen)"
                                hasdeclaredwidth="97px"
                                hasdeclaredheight="97px"
                            />
                        </StyledCircleWrapper>
                        <StyledMobileCircle>
                            <StyledCircle
                                hasdeclaredbg="var(--paginationNormal)"
                                hasdeclaredwidth="30px"
                                hasdeclaredheight="30px"
                            />
                        </StyledMobileCircle>
                        <Image
                            imageDesktop={
                                pierwszaSekcjaCaseStudy.zdjeciePoPrawo
                            }
                            imageMobile={
                                pierwszaSekcjaCaseStudy.zdjeciePoPrawoMobile
                            }
                        />
                    </StyledImageFirstSection>
                </StyledFirstSection>
                <StyledSecondSection>
                    <StyledLeftSecondWrapper>
                        <Image
                            imageDesktop={drugaSekcjaCaseStudy.zdjeciePoLewo}
                            imageMobile={
                                drugaSekcjaCaseStudy.zdjeciePoLewoMobile
                            }
                        />
                    </StyledLeftSecondWrapper>
                    <StyledRightSecondWrapper>
                        <StyledDescFirst className="second">
                            {drugaSekcjaCaseStudy.tytul
                                ? parse(drugaSekcjaCaseStudy.tytul)
                                : null}
                        </StyledDescFirst>
                        <StyledSecondDesc className="second">
                            {drugaSekcjaCaseStudy.opis
                                ? parse(drugaSekcjaCaseStudy.opis)
                                : null}
                        </StyledSecondDesc>
                        <StyledIconsWrapper>
                            <StyledIconWrapper>
                                <StyledIcon>
                                    <Image
                                        imageDesktop={
                                            drugaSekcjaCaseStudy.zKimObraz
                                        }
                                    />
                                </StyledIcon>
                                <StyledTextWrapper>
                                    <StyledName>Z kim?</StyledName>
                                    <StyledDesc>
                                        {drugaSekcjaCaseStudy.zKimOpis
                                            ? parse(
                                                  drugaSekcjaCaseStudy.zKimOpis
                                              )
                                            : null}
                                    </StyledDesc>
                                </StyledTextWrapper>
                            </StyledIconWrapper>
                            <StyledIconWrapper>
                                <StyledIcon>
                                    <Image
                                        imageDesktop={
                                            drugaSekcjaCaseStudy.celObraz
                                        }
                                    />
                                </StyledIcon>
                                <StyledTextWrapper>
                                    <StyledName>Cel:</StyledName>
                                    <StyledDesc>
                                        {drugaSekcjaCaseStudy.celOpis
                                            ? parse(
                                                  drugaSekcjaCaseStudy.celOpis
                                              )
                                            : null}
                                    </StyledDesc>
                                </StyledTextWrapper>
                            </StyledIconWrapper>
                            <StyledIconWrapper>
                                <StyledIcon>
                                    <Image
                                        imageDesktop={
                                            drugaSekcjaCaseStudy.jakObraz
                                        }
                                    />
                                </StyledIcon>
                                <StyledTextWrapper>
                                    <StyledName>Jak?</StyledName>
                                    <StyledDesc>
                                        {drugaSekcjaCaseStudy.jakOpis
                                            ? parse(
                                                  drugaSekcjaCaseStudy.jakOpis
                                              )
                                            : null}
                                    </StyledDesc>
                                </StyledTextWrapper>
                            </StyledIconWrapper>
                            <StyledIconWrapper>
                                <StyledIcon>
                                    <Image
                                        imageDesktop={
                                            drugaSekcjaCaseStudy.efektyObraz
                                        }
                                    />
                                </StyledIcon>
                                <StyledTextWrapper>
                                    <StyledName>Efekty</StyledName>
                                    <StyledDesc>
                                        {drugaSekcjaCaseStudy.efektyOpis
                                            ? parse(
                                                  drugaSekcjaCaseStudy.efektyOpis
                                              )
                                            : null}
                                    </StyledDesc>
                                </StyledTextWrapper>
                            </StyledIconWrapper>
                        </StyledIconsWrapper>
                    </StyledRightSecondWrapper>
                </StyledSecondSection>
            </Container>
            <HomeBlogSection
                addnotationSecond={
                    sekcjaZBlogiem.adnotacjaNaDoleStronyDrugaLinia
                }
                addnotationFirst={
                    sekcjaZBlogiem.adnotacjaNaDoleStronyPierwszaLinia
                }
                blogTitle={sekcjaZBlogiem.blogTytul}
                blogOpis={sekcjaZBlogiem.blogOpis}
                anotherPerson={sekcjaZBlogiem.linkDoInnejOsoby}
                isCase={true}
                iconImage={sekcjaZBlogiem.ikonkaDoLinku}
                tekstDoLinku={sekcjaZBlogiem.tekstDoLinku}
                isCasePage={true}
            />
        </main>
    );
};

export default CaseTemplate;

export { Head } from "../Head/Head";

export const query = graphql`
    query caseStudyQuery($caseId: String) {
        wpCaseStudy(id: { eq: $caseId }) {
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
            caseStudyArtykul {
                miniaturkaCaseStudy {
                    opisDoMiniaturki
                    podpisPodIminiem
                    nazwaOsobyDoMiniaturki
                    avatar {
                        altText
                        title
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
                sekcjaZBlogiem {
                    adnotacjaNaDoleStronyDrugaLinia
                    adnotacjaNaDoleStronyPierwszaLinia
                    blogOpis
                    blogTytul
                    ikonkaDoLinku {
                        altText
                        title
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    tekstDoLinku
                    linkDoInnejOsoby {
                        ... on WpCaseStudy {
                            id
                            slug
                            caseStudyArtykul {
                                miniaturkaCaseStudy {
                                    avatar {
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
                        }
                    }
                }
                trescStronyCaseStudy {
                    drugaSekcjaCaseStudy {
                        celOpis
                        jakOpis
                        opis
                        tytul
                        zKimOpis
                        efektyOpis
                        celObraz {
                            altText
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        efektyObraz {
                            altText
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        jakObraz {
                            altText
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        zKimObraz {
                            altText
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        zdjeciePoLewoMobile {
                            altText
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        zdjeciePoLewo {
                            altText
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                    pierwszaSekcjaCaseStudy {
                        drugiOpis
                        pierwszyOpis
                        tytul
                        zdjeciePoPrawo {
                            altText
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        zdjeciePoPrawoMobile {
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
            }
        }
    }
`;
