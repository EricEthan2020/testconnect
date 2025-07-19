import { useState } from "react";

const Header = () => {
  const links = ['Home', 'About', 'Work', 'Contact'];
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 p-2 bg-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <a href="." className="flex items-center space-x-3">
          <img className="w-8" src="https://connectstudio.info/_next/image?url=%2FVector.png&w=48&q=75" alt="logo" />
          <span className="font-bold leading-tight text-black whitespace-pre-line">
            Connect{'\n'}Studio
          </span>
        </a>

        <nav className="hidden duration-300 transition-all md:flex space-x-10">
          {links.map(l => (
            <a key={l} href={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
               className="text-gray-600 hover:scale-110 hover:text-black font-medium">
              {l}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
        >
          <svg
            className={`w-6 h-6 transform transition-transform ${open ? 'rotate-90' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'opacity-100 max-h-screen -translate-y-0 duration-700 ' : 'opacity-0 translate-y-10 duration-700 max-h-0'}`}>
        <div className="px-4 pb-4 space-y-2">
          {links.map(l => (
            <a
              key={l}
              href={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
              className="block px-3 py-2  text-gray-700 hover:rounded-lg hover:bg-sky-100 hover:scale-110 duration-300 hover:font-bold transition"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;