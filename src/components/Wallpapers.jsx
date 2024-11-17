import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wallpapers = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/get-image') // Replace with your backend URL
      .then((response) => {
        setImages(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the images!", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image) => (
        // <div key={image._id} className="border rounded overflow-hidden shadow-lg">
          <img className="w-full h-auto" src={`http://localhost:3003/uploads/${image.image}`} alt={image.name} />
        // </div>
      ))}
    </div>
  );
};

export default Wallpapers;
