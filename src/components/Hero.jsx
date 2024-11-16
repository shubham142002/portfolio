import { motion, useAnimationControls } from 'framer-motion';
import { useState, useEffect } from 'react';
import profileImg from '../assets/s14.jpg';  // Adjust the path based on your folder structure

const Hero = () => {
    const [text, setText] = useState("");
    const name = "Shubham Patel";
    const controls = useAnimationControls();

    const profileImage = "https://images.unsplash.com/photo-1727160930825-97245483a509?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const techIcons = {
        react: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#61DAFB]" fill="currentColor">
                <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                <path d="M12 21.35c-.73 0-1.43-.08-2.12-.23-1.77-3.07-3.23-6.21-4.34-9.41C4.43 8.5 3.5 5.27 3.5 2L12 2l8.5 0c0 3.27-.93 6.5-2.04 9.71-1.11 3.2-2.57 6.34-4.34 9.41-.69.15-1.39.23-2.12.23Z" />
            </svg>
        ),
        node: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#68A063]" fill="currentColor">
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
            </svg>
        ),
        javascript: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#F7DF1E]" fill="currentColor">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
            </svg>
        ),
    };

    // Typing animation effect
    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= name.length) {
                setText(name.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                controls.start({
                    opacity: [1, 0],
                    transition: {
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                });
            }
        }, 150);

        return () => clearInterval(interval);
    }, []);

    // Add hover animation variant
    const imageVariants = {
        hover: {
            scale: 1.05,
            rotate: [0, -5, 5, 0],
            transition: {
                rotate: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                }
            }
        }
    };

    // Add wave animation variants
    const waveVariants = {
        animate: (i) => ({
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            transition: {
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: [0.4, 0, 0.2, 1]
            }
        })
    };

    return (
        <section className="min-h-screen pt-16 flex items-center justify-center px-4 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left space-y-6 order-2 lg:order-1"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl lg:text-6xl xl:text-7xl font-bold"
                        >
                            Hi, I'm{" "}
                            <span className="text-blue-500 inline-flex">
                                {text}
                                <motion.span
                                    animate={controls}
                                    className="ml-1 inline-block w-[2px] h-[1em] bg-blue-500"
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-gray-300 max-w-2xl"
                        >
                            A Full Stack Web Developer passionate about creating interactive applications
                            and experiences on the web.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#contact"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="#projects"
                                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
                            >
                                View Projects
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex gap-6 pt-4"
                        >
                            <a href="https://github.com/shubham142002" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/shubham1402" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative max-w-[400px] mx-auto">
                            {/* Animated waves */}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={waveVariants}
                                    initial={{ scale: 1, opacity: 0.3 }}
                                    animate="animate"
                                    className="absolute inset-0"
                                >
                                    <div className={`
                                        absolute inset-0 rounded-full 
                                        border-2 border-blue-500/30 
                                        dark:border-blue-400/30
                                        scale-[${1 + (i * 0.15)}]
                                    `} />
                                </motion.div>
                            ))}

                            {/* Rotating waves */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute inset-0"
                            >
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/20 scale-110" />
                            </motion.div>

                            {/* Pulsing waves */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0"
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-md" />
                            </motion.div>

                            {/* Profile container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                className="relative rounded-full overflow-hidden border-4 border-white/10 aspect-square shadow-xl backdrop-blur-sm"
                            >
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                                {/* Profile image */}
                                <motion.img
                                    src={profileImg}
                                    alt="Shubham Patel"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Shine effect */}
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '200%' }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                        ease: "linear",
                                        repeatDelay: 0.5
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                                />
                            </motion.div>

                            {/* Tech stack badges with enhanced animations */}
                            <motion.div
                                animate={{
                                    y: [-10, 10],
                                    rotate: [0, 5, 0],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                    className="transform-gpu"
                                >
                                    {techIcons.react}
                                </motion.div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10], rotate: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20"
                            >
                                <div className="transform hover:scale-110 transition-transform">
                                    {techIcons.node}
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [-5, 15], rotate: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                                className="absolute top-1/2 -right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20"
                            >
                                <div className="transform hover:scale-110 transition-transform">
                                    {techIcons.javascript}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;