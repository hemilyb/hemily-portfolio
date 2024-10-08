import { FiCoffee } from "react-icons/fi";
import Contact from "./grid/Contact";

export default function Footer() {
  return (
    <footer className="relative text-white pb-10 px-14 mt-12">
      <div className="flex flex-wrap sm:justify-between justify-center  items-center">
      <p className="flex md:text-base text-sm font-light gap-2">
        <FiCoffee className="size-5" />
        Transformando café em código.
      </p>

      <Contact />
      </div>
    </footer>
  )
}