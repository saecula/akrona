"use client";
import { useEffect, useRef } from 'react';

const ParallaxComponent = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (parallaxRef.current) {
        const spans = parallaxRef.current.querySelectorAll('span[data-value]');
        
        spans.forEach((span) => {
          const position = parseFloat(span.getAttribute('data-value') || '0');
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y = (window.innerHeight - event.pageY * position) / 90;
          console.log(`Transforming span with data-value ${position}: translateX(${x}px) translateY(${y}px)`);
          (span as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove listener when component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={parallaxRef} className="parallax-wrap py-16 md:py-24">
      <span data-value="1" />
      <span data-value="2" />
      <span data-value="3" />
      <span data-value="4" />
      <span data-value="5" />
      <Intro />
    </div>
  );
};

const Intro = () => {
  return (
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
  );
}

export default ParallaxComponent;