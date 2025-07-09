import { AlignRight } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="">
      {/*medium screen above*/}
      <div className="shadow bg-white">
        <div className="hidden md:flex justify-around items-center  p-10  max-w-7xl m-auto">
          <div className="logo flex items-center justify-center">
            <div className="w-8 h-8  rounded-full  border-2 bg-[#6574a0] p-1">
              <img
                src="/images/fidelis.png"
                alt="fidexcode"
                className="w-full"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              fidexcode
            </div>
          </div>

          <nav className="flex gap-4 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Skills
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Blogs
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/*small screen */}
      <div className="md:hidden flex  justify-between items-center p-10 max-w-7xl m-auto shadow">
        <div className="logo flex items-center justify-center">
          <div className="w-8 h-8  rounded-full  border-2 bg-[#ABC0FF] p-1">
            <img src="/images/fidelis.png" alt="fidexcode" className="w-full" />
          </div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            fidexcode
          </div>
        </div>

        <div>
          <AlignRight onClick={handleOpen} />
        </div>
      </div>
      <nav
        className={
          open
            ? "text-sm font-medium text-gray-700 dark:text-gray-300 p-10  min-h-screen fixed top-0 left-0 right-0 w-full bg-slate-300 transition-all duration-300 "
            : "hidden opacity-0 transition-all duration-300 "
        }
      >
        <div className="mb-4 grid justify-center">
          <X onClick={handleClose} />
        </div>
        <ul className="grid gap-4 text-center">
          <li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="">
              About
            </a>
          </li>
          <li>
            <a href="#" className="">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
