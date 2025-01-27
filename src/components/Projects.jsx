import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import fastclick from '../assets/fastclick.png';
import shivom from '../assets/shivom.png';
import tweet from '../assets/tweet.png';

const projects = [
  {
    title: "Tweet Message",
    description: "Developed a beginner Django-based web app enabling user account creation and tweet management with create, edit, and delete features.",
    image: tweet,
    tech: ["Python", "Django", "Node.js", "Bootstrap"],
    // link: ""
  },
  {
    title: "FastClick Entertainment",
    description: "A photography website for Fastclick Entertainment, designed to display stunning photos and provide a great user experience.",
    image: fastclick,
    tech: ["React", "TailwindCSS", "Node.js", "Cloudinary", "EmailJS"],
    link: "https://photography-fast-click.vercel.app/"
  },
  {
    title: "ShivOm Creation",
    description: "An e-commerce mobile application developed for Shivom Creation using Flutter, Dart, and Firebase, featuring seamless user experience and efficient functionality.",
    image: shivom,
    tech: ["Flutter", "Dart", "Firebase"],
    // link: ""
  },
  // Add more projects as needed
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragEnd = (event, info) => {
    if (!isMobile) return;

    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -swipeThreshold && currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        
        {/* Mobile View with Swipe */}
        <div className="md:hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl overflow-hidden max-w-sm mx-auto"
            >
              <div className="p-4">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-40 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{projects[currentIndex].title}</h3>
                <p className="text-gray-400 mb-4">{projects[currentIndex].description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[currentIndex].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Pagination dots for mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 