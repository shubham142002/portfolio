import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 },
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 82 },
        { name: "Python", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 78 },
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 75 },
      ]
    }
  ];

  const handleDragEnd = (event, info) => {
    if (!isMobile) return;

    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -swipeThreshold && currentIndex < skills.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Skills
        </motion.h2>

        {/* Mobile View with Swipe */}
        <div className="md:hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-lg max-w-sm mx-auto"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                {skills[currentIndex].category}
              </h3>
              <div className="space-y-4">
                {skills[currentIndex].technologies.map((tech, techIndex) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-1">
                      <span>{tech.name}</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-2 bg-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Pagination dots for mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {skills.map((_, index) => (
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
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                {skillCategory.category}
              </h3>
              <div className="space-y-4">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-1">
                      <span>{tech.name}</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-2 bg-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 