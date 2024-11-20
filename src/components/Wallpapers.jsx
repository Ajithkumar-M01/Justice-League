import React, { useEffect, useState } from "react";
import axios from "axios";

const Wallpapers = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://images-mongo-db.vercel.app/get-image") // Replace with your backend URL
      .then((response) => {
        setImages(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the images!", error);
      });
  }, []);

  const handleDownload = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <div>
      <h1>Superhero Wallpapers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-[90%] ml-auto mr-auto">
        {images.map((image) => (
          <div
            key={image._id}
            className="border rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-auto"
              src={`https://images-mongo-db.vercel.app/uploads/${image.image}`}
              alt={image.name}
            />
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded block mx-auto"
              onClick={() =>
                handleDownload(
                  `https://images-mongo-db.vercel.app/uploads/${image.image}`,
                  `${image.name}.jpeg`
                )
              }
            >
              Download Image
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallpapers;
