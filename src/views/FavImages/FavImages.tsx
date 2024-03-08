import React from "react";
import Card from "../Common/Card";

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
  height: number;
  width: number;
  slug: string;
}

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
