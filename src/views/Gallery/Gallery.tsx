import React, { useEffect } from "react";

import Card from "../Common/Card";

import { UnsplashImage } from "../../interfaces/UnsplashImage";
import { getAllImages, handleSearch } from "../../businessLogics";

interface GalleryProps {
  toggleStarred: (imageId: string, image: UnsplashImage) => void;
}

const Gallery: React.FC<GalleryProps> = ({ toggleStarred }) => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [images, setImages] = React.useState<UnsplashImage[]>([]);

  useEffect(() => {
    getAllImages(setImages);
  }, []);

  return (
    <div className="w-full bg-white h-full mt-10 rounded-md p-2 md:p-5 ">
      <div className="w-full flex">
        <input
          className="w-full md:w-1/3 bg-gray-200 p-2"
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-400 p-2 text-white ml-2"
          onClick={() => handleSearch(searchQuery, setImages)}
        >
          Search
        </button>
      </div>

      <div className="gap-1 md:gap-3 columns-3 mt-10">
        {images?.map((image) => (
          <Card image={image} key={image.id} toggleStarred={toggleStarred} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
