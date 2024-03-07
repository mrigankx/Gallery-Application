import axios from "axios";

export const getImages = async () => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_API_KEY}&count=24`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
  return [];
};

export const getBgImage = async () => {
  let imgUrl: string = "";
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_API_KEY}`
    );
    imgUrl = response.data.urls.regular;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
  return imgUrl;
};

export const searchImage = async (searchQuery: string) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
  }
  return [];
};
