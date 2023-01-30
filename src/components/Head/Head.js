import React from "react";

export function Head({ data, pageContext }) {
  const seo = data.wpPage?.seo ??
   data.wpCaseStudy?.seo ??
   data.wpPost?.seo;
   
  const canonical = "https://naswoimmiejscu.com" + pageContext.url;

  if (seo.opengraphUrl === "/404") {
    return <title>{seo.title}</title>;
  }

  return (
    <>
      <meta charSet="utf-8" />
      <meta property="og:site_name" content={seo.opengraphSiteName} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://naswoimmiejscu.com/#organization",
              name: "naswoimmiejscu.com",
              url: "https://naswoimmiejscu.com",
              //   sameAs: [
              //     "link facebook",
              //     "link instagram",
              //   ],
              logo: {
                "@type": "ImageObject",
                "@id": "https://naswoimmiejscu.com/#logo",
                inLanguage: "pl-PL",
                // url: "url do logo",
                width: 262,
                height: 120,
                caption: "naswoimmiejscu.com",
              },
              image: { "@id": "https://naswoimmiejscu.com/#logo" },
            },
            {
              "@type": "WebSite",
              "@id": "https://naswoimmiejscu.com/#website",
              url: "https://naswoimmiejscu.com",
              name: "naswoimmiejscu.com",
              description: "NaSwoimMiejscu",
              publisher: {
                "@id": "https://naswoimmiejscu.com/#organization",
              },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: "https://naswoimmiejscu.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              ],
              inLanguage: "pl-PL",
            },
            {
              "@type": "WebPage",
              "@id": "https://naswoimmiejscu.com/#webpage",
              url: "https://naswoimmiejscu.com/",
              name: "NaSwoimMiejscu",
              isPartOf: {
                "@id": "https://naswoimmiejscu.com/#website",
              },
              about: {
                "@id": "https://naswoimmiejscu.com/#organization",
              },
              //   datePublished: "data publikacji",
              //   dateModified: "data modyfikacji",
              inLanguage: "pl-PL",
              potentialAction: [
                {
                  "@type": "ReadAction",
                  target: ["https://naswoimmiejscu.com"],
                },
              ],
            },
          ],
        })}
      </script>

      {canonical ? (
        <>
          <link rel="canonical" href={canonical} />
          <meta property="og:url" content={canonical} />
        </>
      ) : null}

      {seo?.title ? (
        <>
          <title>{seo.title}</title>
          <meta property="twitter:title" content={seo.title} />
          <meta property="og:title" content={seo.title} />
        </>
      ) : null}

      {seo?.metaDesc ? (
        <>
          <meta name="description" content={seo.metaDesc} />
          <meta property="twitter:description" content={seo.metaDesc} />
          <meta property="og:description" content={seo.metaDesc} />
        </>
      ) : null}

      {seo.opengraphImage?.localFile?.publicURL ? (
        <>
          <meta
            property="og:image"
            content={
              "https://naswoimmiejscu.com" +
              seo.opengraphImage.localFile.publicURL
            }
          />
          <meta
            property="twitter:image"
            content={
              "https://naswoimmiejscu.com" +
              seo.opengraphImage.localFile.publicURL
            }
          />
        </>
      ) : null}
    </>
  );
}
