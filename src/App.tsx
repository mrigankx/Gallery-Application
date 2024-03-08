import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Gallery from "./views/Gallery/Gallery";
import FavImages from "./views/FavImages/FavImages";
import { getBgImage } from "./api/api";

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

function App() {
  const [bgUrl, setBgUrl] = useState<string>("");
  const [starredImages, setStarredImages] = useState<UnsplashImage[]>([]);
  const toggleStarred = (imageId: string, image: UnsplashImage) => {
    const isPresent = starredImages.some((item) => item.id === imageId);
    if (isPresent) {
      setStarredImages(starredImages.filter((item) => item.id !== imageId));
    } else {
      setStarredImages([...starredImages, image]);
    }
  };
  const fetchImage = async () => {
    const url = await getBgImage();
    setBgUrl(url);
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <Router>
      <div
        style={{ backgroundImage: `url(${bgUrl})` }}
        className="w-full h-full p-3 md:p-10 bg-cover"
      >
        <div className="bg-white p-2 w-auto rounded-lg flex justify-between">
          <Link to="/">
            <h1 className="text-indigo-600 font-bold text-2xl sm:text-4xl text-center">
              Image Gallery
            </h1>
          </Link>
          <Link
            className="bg-red-800 p-2 text-white hover:bg-red-500"
            to="/favourites"
          >
            Favourites
          </Link>
        </div>

        <Routes>
          <Route
            index
            path="/"
            element={<Gallery toggleStarred={toggleStarred} />}
          />
          <Route
            path="/favourites"
            element={
              <FavImages
                starredImages={starredImages}
                toggleStarred={toggleStarred}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
