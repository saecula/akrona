import Intro from "../components/Intro";
import Gallery from "../components/Gallery";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Intro />
      <Gallery />
    </div>
  );
}
