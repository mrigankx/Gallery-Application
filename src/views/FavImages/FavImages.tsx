import React from "react";
import Card from "../Common/Card";

import { UnsplashImage } from "../../interfaces/UnsplashImage";

interface FavProps {
  starredImages: UnsplashImage[];
  toggleStarred: (imageId: string, image: UnsplashImage) => void;
}

const FavImages: React.FC<FavProps> = ({ starredImages, toggleStarred }) => {
  return (
    <div className="w-full bg-white h-full mt-10 rounded-md p-2 md:p-5 ">
      <div className="gap-1 md:gap-3 columns-3 mt-10">
        {starredImages?.map((image) => (
          <Card image={image} key={image.id} toggleStarred={toggleStarred} />
        ))}
      </div>
    </div>
  );
};

export default FavImages;
