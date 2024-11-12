import { motion } from 'framer-motion';

const Skills = () => {
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
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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