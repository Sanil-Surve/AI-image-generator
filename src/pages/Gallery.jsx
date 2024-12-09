import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);

  // Fetch images from the backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/images");
        setImages(response.data);
        setFilteredImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error.message);
      }
    };

    fetchImages();
  }, []);

  // Filter images based on the search term
  useEffect(() => {
    const filtered = images.filter((image) =>
      image.prompt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [searchTerm, images]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">AI Image Gallery</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <ImageCard key={image._id} image={image} />
        ))}
      </div>
      {filteredImages.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No images found.</p>
      )}
    </div>
  );
};

export default Gallery;