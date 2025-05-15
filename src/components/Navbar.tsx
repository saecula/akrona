import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Squishy Art
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link
            href="#gallery"
            className="hover:text-indigo-600 transition-colors"
          >
            Gallery
          </Link>
          {/* For future implementation */}
          <Link
            href="#contact"
            className="hover:text-indigo-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
