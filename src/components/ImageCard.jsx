import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img
        src={image.cloudinaryUrl}
        alt={image.prompt}
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <p className="text-sm text-gray-600 truncate">Prompt: {image.prompt}</p>
      </div>
    </div>
  );
};

export default ImageCard;