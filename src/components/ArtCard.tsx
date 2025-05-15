import Image from "next/image";
import { Artwork } from "../types";

interface ArtCardProps {
  artwork: Artwork;
}

export default function ArtCard({ artwork }: ArtCardProps) {
  return (
    <div className="art-card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-64">
        {/* For a real implementation, replace with real images */}
        <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
          <p className="text-indigo-400 text-lg">[Image: {artwork.title}]</p>
        </div>
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
        <p className="text-gray-600 mb-4">{artwork.description}</p>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{artwork.dimensions}</span>
          <span>{artwork.material}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${artwork.price}</span>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              artwork.available
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {artwork.available ? "Available" : "Sold"}
          </span>
        </div>
      </div>
    </div>
  );
}
