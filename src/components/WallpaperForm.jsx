import { useState, useEffect } from "react";
import axios from "axios";
const WallpaperForm = () => {
  const [image, setImage] = useState(null);
  const [allImages, setAllImages] = useState(null);

  // useEffect(() => {
  //   handleFileFetch();
  // }, [handleUpload]);

  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleFileFetch = async () => {
    try {
      const result = await axios.get(
        "https://images-mongo-db.vercel.app/get-image"
      );
      console.log(result);
      setAllImages(result.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) {
      console.log("No image selected");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    try {
      const result = await axios.post(
        "https://images-mongo-db.vercel.app/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Upload result:", result);
      // handleFileFetch();
      alert(
        "Image uploaded successfully, please click on 'ok' to see the update"
      );
      window.location.reload();
    } catch (err) {
      console.log("Error occurred in uploading image:", err);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center mx-auto mt-5 font-semibold">
        Share and Care!
      </h1>
      <p className="text-2xl text-center mx-auto mt-5">
        Share your favorite superheroe wallpapers so others can get benefit of
        it.
      </p>
      <form
        onSubmit={handleUpload}
        className="w-[30%] mx-auto bg-[#c3c3c3] border-4 border-[#00a2e8] py-5 flex flex-col gap-5 rounded-xl mt-5"
      >
        <input type="file" accept="image/*" onChange={handleFileUpload} className="mx-auto bg-white"/>
        <button
          type="submit"
          className="w-[50%] font-semibold block mx-auto hover:text-white bg-[#00a2e8] hover:bg-[#1d3557] px-2 py-1 rounded-lg border-2 border-black hover:border-2 hover:border-[#00a2e8]"
        >
          Upload Wallpaper
        </button>
      </form>
    </div>
  );
};

export default WallpaperForm;
