import React, { useEffect } from "react";

import Card from "../Common/Card";
import { getImages, searchImage } from "../../api/api";

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

const Gallery: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [images, setImages] = React.useState<UnsplashImage[]>([]);

  const handleSearch = async () => {
    let searchRes: UnsplashImage[] = await searchImage(searchQuery);
    setImages(searchRes);
  };
  const getAllImages = async () => {
    const allImages = await getImages();
    setImages(allImages);
  };
  useEffect(() => {
    getAllImages();
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
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="gap-1 md:gap-3 columns-3 mt-10">
        {images?.map((image) => (
          <Card image={image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
