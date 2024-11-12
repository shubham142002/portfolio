import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import textImg from '../assets/txt.png'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Navigation Items
    const navItems = [
        { title: 'Home', href: '#home' },
        { title: 'Projects', href: '#projects' },
        { title: 'Skills', href: '#skills' },
        { title: 'Contact', href: '#contact' },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle smooth scrolling
    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop - 80, // Adjust this value based on your navbar height
                behavior: 'smooth'
            });
            setIsOpen(false); // Close mobile menu if open
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                    >
                        <a
                            href="#home"
                            onClick={(e) => handleClick(e, '#home')}
                            className="text-2xl font-bold text-blue-500"
                        >
                            <img
                                src={textImg}
                                alt="txt"
                                className="h-8 w-auto" // Adjust size as needed
                            />
                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.title}
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    {item.title}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="relative w-6 h-6">
                                <span
                                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                                        }`}
                                />
                                <span
                                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'
                                        }`}
                                />
                                <span
                                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-gray-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.title}
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                                >
                                    {item.title}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar; 