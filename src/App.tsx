import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./views/Gallery/Gallery";
import FavImages from "./views/FavImages/FavImages";
import { getBgImage } from "./api/api";
function App() {
  const [bgUrl, setBgUrl] = useState<string>("");
  const fetchImage = async () => {
    const url = await getBgImage();
    setBgUrl(url);
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${bgUrl})` }}
      className="w-[100vw] h-auto p-10"
    >
      <h1 className="bg-white p-2 w-auto text-indigo-600 font-bold text-2xl sm:text-4xl text-center rounded-lg">
        Image Gallery
      </h1>

      <Router>
        <Routes>
          <Route index path="/" element={<Gallery />} />
          <Route path="/favourites" element={<FavImages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
