import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-gray-900 text-gray-100 leading-relaxed min-h-screen">
      <Header />
      <section className="min-h-screen flex items-center bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400">Ready to start your project? Get in touch!</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-4xl hover:-translate-y-1 transition-transform">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-4xl hover:-translate-y-1 transition-transform">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-4xl hover:-translate-y-1 transition-transform">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:your.email@example.com" className="text-4xl hover:-translate-y-1 transition-transform">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 