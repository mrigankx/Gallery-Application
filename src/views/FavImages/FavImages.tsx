import React from "react";
import Card from "../Common/Card";

const FavImages: React.FC = () => {
  const [starredImages, setStarredImages] = React.useState<string[]>([]);

  React.useEffect(() => {
    const fetchStarredImages = async () => {
      const images = [""];
      setStarredImages(images);
    };
    fetchStarredImages();
  }, []);

  return (
    <div className="starred-images-page">
      <h1>Starred Images</h1>
      <div className="grid grid-cols-3 gap-4">
        {starredImages.map((image) => (
          // <Card />
          <h1>image</h1>
        ))}
      </div>
    </div>
  );
};

export default FavImages;
