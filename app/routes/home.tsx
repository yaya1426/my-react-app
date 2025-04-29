import type { Route } from "./+types/home";
import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 leading-relaxed min-h-screen">
      <Header />
      <section id="home" className="min-h-screen flex items-center bg-gray-900 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-transparent opacity-10"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hi, I'm Yahya ElAraby
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              A passionate freelance developer specializing in creating modern, responsive web applications and solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
