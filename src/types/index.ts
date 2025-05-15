export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dimensions: string;
  material: string;
  price?: number; // Optional for future selling feature
  available?: boolean; // Optional for future selling feature
}
