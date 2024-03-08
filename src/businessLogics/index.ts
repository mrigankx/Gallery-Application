import { getBgImage, getImages, searchImage } from "../api/api";
import { UnsplashImage } from "../interfaces/UnsplashImage";
export const fetchImage = async (setBgUrl: (url: string) => void) => {
  const url: string = await getBgImage();
  setBgUrl(url);
};
export const getAllImages = async (
  setImages: (allImages: UnsplashImage[]) => void
) => {
  const allImages: UnsplashImage[] = await getImages();
  setImages(allImages);
};

export const handleSearch = async (
  searchQuery: string,
  setImages: (searchRes: UnsplashImage[]) => void
) => {
  if (searchQuery !== "") {
    let searchRes: UnsplashImage[] = await searchImage(searchQuery);
    setImages(searchRes);
  } else {
    getAllImages(setImages);
  }
};
