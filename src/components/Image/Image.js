import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

const Image = ({ imageDesktop, imageMobile }) => {
  const images = withArtDirection(getImage(imageDesktop.localFile), [
    {
      media: "(max-width: 360px)",
      image: getImage(
        imageMobile ? imageMobile.localFile : imageDesktop.localFile
      ),
    },
  ]);

  return imageDesktop ? (
    <GatsbyImage
      image={images}
      alt={imageDesktop?.altText}
      title={imageDesktop?.title}
    />
  ) : null;
};

export default Image;
