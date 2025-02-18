import React from 'react'
import { graphql } from 'gatsby'
import FirstSecionWomens from '../components/FirstSecionWomens/FirstSecionWomens'
import SecondSectionWomens from '../components/SecondSectionWomens/SecondSectionWomens'
import EffectWomens from '../components/EffectWomens/EffectWomens'
import MeetsFormwomens from '../components/MeetsFormwomens/MeetsFormwomens'
import HomeBlogSection from '../components/HomeBlogSection/HomeBlogSection'
import Wrapper from '../components/PageWrapper/PageWrapper'

const Adults = ({
  data: {
    wpPage: {
      dorosli: {
        pierwszaSekcja,
        drugaSekcja,
        efektWspolpracy,
        formaSpotkan,
        sekcjaZBlogiem
      }
    }
  }
}) => {
  return (
    <Wrapper>
      <FirstSecionWomens
        title={pierwszaSekcja.tytul}
        desc={pierwszaSekcja.opis}
        image={pierwszaSekcja.zdjeciePoPrawo}
        imageMobile={pierwszaSekcja.zdjeciePoPrawoMobile}
        womens={true}
      />
      <SecondSectionWomens
        image={drugaSekcja.zdjeciePoLewo}
        imageMobile={drugaSekcja.zdjeciePoLewoMobile}
        title={drugaSekcja.tytul}
        desc={drugaSekcja.opis}
        btn={drugaSekcja.przycisk}
        isWomens={true}
      />
      <EffectWomens
        image={efektWspolpracy.zdjeciePoPrawo}
        imageMobile={efektWspolpracy.zdjeciePoPrawoMobile}
        title={efektWspolpracy.tytul}
        listElements={efektWspolpracy.elementListy}
        desc={efektWspolpracy.opis}
        isWomens={true}
      />
      <MeetsFormwomens
        firstBtn={formaSpotkan.pierwszyPrzycisk}
        secondBtn={formaSpotkan.drugiPrzycisk}
        title={formaSpotkan.tytul}
        desc={formaSpotkan.opis}
        image={formaSpotkan.obrazPoLewo}
        isWomens={true}
        imageMobile={formaSpotkan.obrazPoLewoMobile}
      />
      <HomeBlogSection
        anotherPerson={sekcjaZBlogiem.linkDoInnejOsoby}
        iconImage={sekcjaZBlogiem.ikonkaDoLinku}
        tekstDoLinku={sekcjaZBlogiem.tekstDoLinku}
        isCase={true}
      />
    </Wrapper>
  )
}

export default Adults

export { Head } from '../components/Head/Head'

export const query = graphql`
  query adultsQuery {
    wpPage(id: { eq: "cG9zdDozMjk=" }) {
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
      dorosli {
        sekcjaZBlogiem {
          blogOpis
          blogTytul
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
                  avatarIkonka {
                    sourceUrl
                  }
                }
              }
            }
          }
          ikonkaDoLinku {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        pierwszaSekcja {
          opis
          tytul
          zdjeciePoPrawo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjeciePoPrawoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        drugaSekcja {
          opis
          przycisk {
            target
            title
            url
          }
          tytul
          zdjeciePoLewo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjeciePoLewoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        efektWspolpracy {
          tytul
          opis
          elementListy {
            tekstListy
            ikonka {
              altText
              localFile {
                publicURL
              }
            }
          }
          zdjeciePoPrawo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjeciePoPrawoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        formaSpotkan {
          drugiPrzycisk {
            target
            title
            url
          }
          obrazPoLewo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          obrazPoLewoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          opis
          tytul
          pierwszyPrzycisk {
            target
            title
            url
          }
        }
      }
    }
  }
`
