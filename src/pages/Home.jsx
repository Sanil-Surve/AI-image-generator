import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [cloudinaryUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/generate", {
        prompt,
      });
      setImageUrl(response.data.cloudinaryUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-600 mb-8">
        AI Image Generator
      </h1>

      {/* Input and Button Section */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>

      {/* Generated Image Section */}
      {cloudinaryUrl && (
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Generated Image:</h2>
          <img
            src={cloudinaryUrl}
            alt="Generated"
            className="w-full max-w-lg rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default Home;