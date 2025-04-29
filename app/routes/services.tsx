import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="bg-gray-900 text-gray-100 leading-relaxed min-h-screen">
      <Header />
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-gray-800 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700 hover:border-purple-500">
              <i className="fas fa-code text-4xl mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"></i>
              <h3 className="text-xl mb-4 text-gray-100">Web Development</h3>
              <p className="text-gray-400">Custom web applications built with modern frameworks and best practices.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700 hover:border-purple-500">
              <i className="fas fa-mobile-alt text-4xl mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"></i>
              <h3 className="text-xl mb-4 text-gray-100">Responsive Design</h3>
              <p className="text-gray-400">Beautiful, mobile-friendly websites that work seamlessly across all devices.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700 hover:border-purple-500">
              <i className="fas fa-database text-4xl mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"></i>
              <h3 className="text-xl mb-4 text-gray-100">Backend Development</h3>
              <p className="text-gray-400">Robust backend solutions with secure and scalable architecture.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700 hover:border-purple-500">
              <i className="fas fa-paint-brush text-4xl mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"></i>
              <h3 className="text-xl mb-4 text-gray-100">UI/UX Design</h3>
              <p className="text-gray-400">User-centered design that enhances user experience and engagement.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 