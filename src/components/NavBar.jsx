import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="bg-stone-100 border-gray-300 border-b-2 text-black shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Mi app</h1>

          <div className="space-x-8 text-lg">
            <Link
              to="/"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Sobre Mi
            </Link>
            <Link
              to="/contact"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Contactame
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
