import { artworks } from "../data/artworks";
import ArtCard from "./ArtCard";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Artworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map(artwork => (
            <ArtCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </section>
  );
}
