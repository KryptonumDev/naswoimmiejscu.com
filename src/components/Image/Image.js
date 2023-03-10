import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

const Image = ({ className = '', imageDesktop, imageMobile, objectFit, loading = "lazy"}) => {
  const images = imageDesktop?.localFile
    ? withArtDirection(getImage(imageDesktop?.localFile), [
      {
        media: "(max-width: 360px)",
        image: getImage(
          imageMobile ? imageMobile?.localFile : imageDesktop?.localFile
        ),
      },
    ])
    : null;

  return imageDesktop ? (
    <GatsbyImage
      className={className}
      image={images}
      alt={imageDesktop?.altText}
      title={imageDesktop?.title}
      objectFit={objectFit}
      loading={loading}
    />
  ) : null;
};

export default Image;
