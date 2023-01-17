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
    <>
      <CalendlyFirstSection data={calendly} />
      <FAQSection data={calendly.faqCalendly} btnWidth="495px" />
      <CalendlyLastSection data={calendly.ostatniaSekcjaStronyCalendly} />
    </>
  );
};

export default Calendly;

export const query = graphql`
  query calendlyQuery {
    wpPage(id: { eq: "cG9zdDoyODU=" }) {
      calendly {
        lista
        opisPodTytulem
        tytulStrony
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
`;
