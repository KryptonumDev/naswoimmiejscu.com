import React from 'react'
import { graphql } from 'gatsby'

import FirstSecionWomens from '../components/FirstSecionWomens/FirstSecionWomens'
import SecondSectionYouth from '../components/SecondSectionYouth/SecondSectionYouth'
import SecondSectionWomens from '../components/SecondSectionWomens/SecondSectionWomens'
import MeetsFormwomens from '../components/MeetsFormwomens/MeetsFormwomens'
import EffectWomens from '../components/EffectWomens/EffectWomens'
import HomeBlogSection from '../components/HomeBlogSection/HomeBlogSection'
import Wrapper from '../components/PageWrapper/PageWrapper'

const Gallup = ({
  data: {
    wpPage: {
      gallup_page: {
        pierwszaSekcjaGallup,
        drugaSekcjaGallup,
        jakMogeCiPomocGallup,
        efektWspolpracyGallup,
        formaSpotkanGallup,
        sekcjaZBlogiemGallup
      }
    }
  }
}) => {
  return (
    <Wrapper>
      <FirstSecionWomens
        title={pierwszaSekcjaGallup.tytul}
        desc={pierwszaSekcjaGallup.opis}
        image={pierwszaSekcjaGallup.obrazPoPrawo}
        imageMobile={pierwszaSekcjaGallup.obrazPoPrawoMobile}
      />
      <SecondSectionYouth data={drugaSekcjaGallup} />
      <SecondSectionWomens
        image={jakMogeCiPomocGallup.zdjeciePoLewo}
        imageMobile={jakMogeCiPomocGallup.zdjeciePoLewoMobile}
        title={jakMogeCiPomocGallup.tytul}
        desc={jakMogeCiPomocGallup.opis}
        btn={jakMogeCiPomocGallup.przycisk}
      />
      <EffectWomens
        image={efektWspolpracyGallup.zdjeciePoPrawo}
        imageMobile={efektWspolpracyGallup.zdjeciePoPrawoMobile}
        title={efektWspolpracyGallup.tytul}
        listElements={efektWspolpracyGallup.elementyListy}
        desc={efektWspolpracyGallup.opis}
      />
      <MeetsFormwomens
        firstBtn={formaSpotkanGallup.pierwszyPrzycisk}
        secondBtn={formaSpotkanGallup.drugiPrzycisk}
        title={formaSpotkanGallup.tytul}
        desc={formaSpotkanGallup.opis}
        image={formaSpotkanGallup.obrazPoLewo}
        imageMobile={formaSpotkanGallup.obrazPoLewoMobile}
      />
      <HomeBlogSection
        anotherPerson={sekcjaZBlogiemGallup.linkDoInnejOsoby}
        iconImage={sekcjaZBlogiemGallup.ikonkaDoLinku}
        tekstDoLinku={sekcjaZBlogiemGallup.tekstDoLinku}
        isCase={true}
      />
    </Wrapper>
  )
}

export default Gallup

export { Head } from '../components/Head/Head'

export const query = graphql`
  query gallupQuery {
    wpPage(id: { eq: "cG9zdDoxMzU1" }) {
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
      gallup_page {
        sekcjaZBlogiemGallup {
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
        drugaSekcjaGallup {
          tekstPoLewo
          tekstPoPrawo
        }
        efektWspolpracyGallup {
          elementyListy {
            ikonka {
              altText
              title
              localFile {
                publicURL
              }
            }
            tekstListy
          }
          opis
          tytul
          zdjeciePoPrawo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjeciePoPrawoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        formaSpotkanGallup {
          drugiPrzycisk {
            target
            title
            url
          }
          obrazPoLewo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          obrazPoLewoMobile {
            altText
            title
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
        jakMogeCiPomocGallup {
          opis
          przycisk {
            title
            target
            url
          }
          tytul
          zdjeciePoLewo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjeciePoLewoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        pierwszaSekcjaGallup {
          obrazPoPrawo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          obrazPoPrawoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          opis
          tytul
        }
      }
    }
  }
`
