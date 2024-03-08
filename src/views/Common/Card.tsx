import React from "react";

interface ImageCardProps {
  image: {
    id: string;
    urls: {
      regular: string;
    };
    alt_description: string;
    height: number;
    width: number;
    slug: string;
  };
}

const Card: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <img
      className={
        image.width > image.height
          ? "w-full aspect-video mb-2"
          : "w-full aspect-square mb-2"
      }
      src={image.urls.regular}
      alt={image.alt_description}
    />
  );
};

export default Card;
