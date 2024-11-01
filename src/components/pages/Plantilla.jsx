import { SideBar } from "../SideBar";
import { NavBar } from "../NavBar";

export const Plantilla = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <SideBar className="w-64 bg-gray-800 text-white" />
      <div className="flex flex-col flex-grow">
        <NavBar className="h-16 bg-blue-600 text-white" />
        <main className="flex-grow p-4 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};
