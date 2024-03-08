import React, { useState } from "react";
import starImage from "../../assets/star.png";
import starFilledImage from "../../assets/star-filled.png";

import { UnsplashImage } from "../../interfaces/UnsplashImage";

interface ImageCardProps {
  image: UnsplashImage;
  toggleStarred: (imageId: string, image: UnsplashImage) => void;
}
const Card: React.FC<ImageCardProps> = ({ image, toggleStarred }) => {
  const [star, setStar] = useState(false);
  return (
    <div className="relative">
      <img
        className={
          image.width > image.height
            ? "w-full aspect-video mb-2"
            : "w-full aspect-square mb-2"
        }
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <button
        className="absolute top-0 p-2  flex items-center justify-center"
        onClick={() => {
          toggleStarred(image.id, image);
          setStar(!star);
        }}
      >
        <img
          src={star ? starFilledImage : starImage}
          alt="star"
          className="h-5 w-5 md:h-10 md:w-10"
        />
      </button>
    </div>
  );
};

export default Card;
