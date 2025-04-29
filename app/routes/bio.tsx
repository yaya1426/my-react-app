import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Bio() {
  return (
    <div className="bg-gray-900 text-gray-100 leading-relaxed min-h-screen">
      <Header />
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Your Name"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-400 mb-4">
                I am a dedicated freelance developer with [X] years of experience in web development. My journey in
                technology began [your story].
              </p>
              <p className="text-gray-400 mb-4">
                I specialize in creating modern, responsive web applications using cutting-edge technologies. My approach
                combines technical expertise with a keen eye for design and user experience.
              </p>
              <p className="text-gray-400">
                When I'm not coding, I enjoy [your hobbies/interests]. I believe in continuous learning and staying
                updated with the latest industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 