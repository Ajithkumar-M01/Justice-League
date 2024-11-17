import { useState, useEffect } from "react";
import axios from "axios";
const WallpaperForm = () => {
  const [image, setImage] = useState(null);
  const [allImages, setAllImages] = useState(null);

  useEffect(() => {
    handleFileFetch();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    const result = await axios.post("http://localhost:3003/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleFileFetch = async () => {
    try {
      const result = await axios.get("http://localhost:3003/get-image");
      console.log(result);
      setAllImages(result.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*" onChange={handleFileUpload} />
              <button type="submit">upload</button>
      </form>
    </div>
  );
};

export default WallpaperForm;
