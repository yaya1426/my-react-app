import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-gray-800/95 text-gray-100 py-4 fixed w-full top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold text-blue-400">Your Name</div>
          <ul className="flex space-x-7">
            <li>
              <Link to="/" className="text-gray-100 hover:text-purple-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bio" className="text-gray-100 hover:text-purple-400 transition-colors">
                Bio
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-100 hover:text-purple-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-100 hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 