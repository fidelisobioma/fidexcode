import { AlignRight } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
      <div className="shadow bg-white fixed z-10 left-0 right-0 top-0">
        <div className="hidden md:flex justify-between items-center  p-10  max-w-7xl m-auto">
          <div className="logo flex items-center justify-center">
            <div className="w-8 h-8  rounded-full  border-2 bg-[#6574a0] p-1">
              <img
                src="/images/fidelis.png"
                alt="fidexcode"
                className="w-full"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-gray-900 ">
              fidexcode
            </div>
          </div>

          <nav className="flex gap-4 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
            <a
              href="#home"
              className="text-base font-normal leading-relaxed text-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base font-normal leading-relaxed text-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-base font-normal leading-relaxed text-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="text-base font-normal leading-relaxed text-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="text-base font-normal leading-relaxed text-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/*small screen */}
      <div className="md:hidden flex  justify-between items-center p-10 max-w-7xl m-auto shadow bg-white fixed left-0 right-0 top-0 z-10">
        <div className="logo flex items-center justify-center">
          <div className="w-8 h-8  rounded-full   bg-[#6574a0] p-1">
            <img src="/images/fidelis.png" alt="fidexcode" className="w-full" />
          </div>
          <div className="text-xl font-bold text-gray-900">fidexcode</div>
        </div>

        <div>
          <AlignRight onClick={handleOpen} />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="text-sm font-medium text-gray-700 dark:text-gray-300 p-10 min-h-screen fixed top-0 left-0 right-0 w-full bg-white z-50"
          >
            <div className="mb-10 grid justify-center">
              <X onClick={handleClose} className="size-10" />
            </div>
            <ul className="grid gap-10 text-center" onClick={handleClose}>
              <li>
                <a
                  href="#home"
                  className="text-base font-normal leading-relaxed text-gray-800 focus:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-base font-normal leading-relaxed text-gray-800 focus:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-base font-normal leading-relaxed text-gray-800 focus:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-base font-normal leading-relaxed text-gray-800 focus:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-base font-normal leading-relaxed text-gray-800 focus:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Navbar;
