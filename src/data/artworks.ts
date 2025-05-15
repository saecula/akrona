import { Artwork } from "../types";

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Bubbly Blob",
    description:
      "A squishy, tactile sculpture with an organic form that responds to touch.",
    imageUrl: "/images/large_cats.png", // You'll need to add your own images
    dimensions: "15 x 10 x 8 cm",
    material: "TPU Filament",
    price: 120,
    available: true,
  },
  {
    id: "2",
    title: "Squish Wave",
    description:
      "An undulating form that creates a satisfying squish when pressed.",
    imageUrl: "/images/squish-wave.jpg",
    dimensions: "20 x 15 x 5 cm",
    material: "Flexible Resin",
    price: 150,
    available: true,
  },
  {
    id: "3",
    title: "Tactile Terrain",
    description:
      "A landscape of varying textures and densities, creating an interactive tactile experience.",
    imageUrl: "/images/large_cats.png",
    dimensions: "25 x 25 x 10 cm",
    material: "Mixed Flexible Filaments",
    price: 200,
    available: false,
  },
  {
    id: "4",
    title: "Pressure Points",
    description:
      "A series of interconnected pressure points that create a chain reaction when squeezed.",
    imageUrl: "/images/pressure-points.jpg",
    dimensions: "30 x 10 x 10 cm",
    material: "TPU and PLA",
    price: 180,
    available: true,
  },
  {
    id: "5",
    title: "Memory Foam",
    description:
      "A form that remembers its shape after being squeezed, slowly returning to its original state.",
    imageUrl: "/images/memory-foam.jpg",
    dimensions: "12 x 12 x 12 cm",
    material: "Specialty Flexible Resin",
    price: 140,
    available: true,
  },
  {
    id: "6",
    title: "Squishy Geometry",
    description:
      "Geometric shapes that defy expectations by being completely squeezable.",
    imageUrl: "/images/squishy-geometry.jpg",
    dimensions: "15 x 15 x 15 cm",
    material: "TPU Filament",
    price: 160,
    available: true,
  },
];
