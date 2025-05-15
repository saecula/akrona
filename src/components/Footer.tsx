export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-indigo-600">Squishy Art</h3>
            <p className="text-gray-600 mt-2">
              Innovative 3D-printed squishy art for your tactile pleasure
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              © {new Date().getFullYear()} Squishy Art. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
