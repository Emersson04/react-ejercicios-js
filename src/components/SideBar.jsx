import { Link } from "react-router-dom";
import { useState } from "react";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => setIsOpen(!isOpen);

  const [isSubmenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => setIsSubMenuOpen(!isSubmenuOpen);
  return (
    <>
      <div
        className={`bg-green-600 text-white ${
          isOpen ? "w-60" : "w-16"
        } h-screen transition-all duration-200 ease-in-out flex flex-col items-center`}
      >
        <button className="p-4" onClick={toggleSideBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>

        <ul className=" space-y-4 w-full text-center">
          <li className="p-3 rounded transition-colors">
            <Link to={"/chart"} className="text-white block">
              {isOpen ? "Ir a pagina" : "#"}
            </Link>
          </li>
          <li className="p-3">
            <button
              onClick={toggleSubMenu}
              className="w-full text-l flex p-3 justify-between items-center  rounded transition-colors"
            >
              {isOpen ? (
                <>
                  <span>Graficos</span>
                  <span>{isSubmenuOpen ? "<" : ">"}</span>
                </>
              ) : (
                ">"
              )}
            </button>

            {isSubmenuOpen && (
              <ul className="mt-2 space-y-2 pl-4">
                <li className="hover:bg-green-700 hover:rounded-2xl rounded' p-3 transition-colors">
                  <Link to={"/linear"} className="border-none text-white ">
                    Graficos de lineas
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/barra"} className="border-none text-white ">
                    Graficos de barras
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};
