import React from "react";
import { graphql } from "gatsby";

import FAQSection from "../components/FAQSection/FAQSection";
import CalendlyFirstSection from "../components/CalendlyFirstSection/CalendlyFirstSection";
import CalendlyLastSection from "../components/CalendlyLastSection/CalendlyLastSection";

const Calendly = ({
  data: {
    wpPage: { calendly },
  },
}) => {
  return (
    <main>
      <CalendlyFirstSection data={calendly} />
      <FAQSection
        data={calendly.faqCalendly}
        btnWidth="495px"
        smallMgBottom
        isNormalFont
      />
      <CalendlyLastSection data={calendly.ostatniaSekcjaStronyCalendly} />
    </main>
  );
};

export default Calendly;

export { Head } from "../components/Head/Head";

export const query = graphql`
  query calendlyQuery {
    wpPage(id: { eq: "cG9zdDoyODU=" }) {
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
      calendly {
        lista
        opisPodTytulem
        tytulStrony
        przycisk {
          target
          title
          url
        }
        faqCalendly {
          tytul
          przycisk {
            target
            title
            url
          }
          element {
            odpowiedz
            pytanie
          }
        }
        ostatniaSekcjaStronyCalendly {
          opis
          przycisk {
            target
            title
            url
          }
          tytulStrony
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
    }
  }
`;
