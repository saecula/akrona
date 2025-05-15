export default function Intro() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-600">
          Welcome to My Squishy Art Gallery
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Explore a unique collection of 3D-printed art pieces that combine
          visual beauty with tactile satisfaction. Each piece is designed to be
          touched, squeezed, and experienced.
        </p>
        <div className="bg-indigo-100 p-6 rounded-lg">
          <p className="text-gray-800 italic">
            "I create art that engages not just your eyes, but your hands. In a
            digital world, I believe in the power of physical interaction. Each
            piece invites you to touch, squeeze, and feel the materials
            transform under your fingers."
          </p>
        </div>
        <a
          href="#gallery"
          className="inline-block mt-10 px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          View Gallery
        </a>
      </div>
    </section>
  );
}
