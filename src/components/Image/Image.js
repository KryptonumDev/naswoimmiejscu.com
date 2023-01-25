import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

const Image = ({ imageDesktop, imageMobile, objectFit }) => {
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
      image={images}
      alt={imageDesktop?.altText}
      title={imageDesktop?.title}
      objectFit={objectFit}
    />
  ) : null;
};

export default Image;
