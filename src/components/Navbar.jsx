import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import textImg from '../assets/txt.png'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (sectionId) => {
        setIsOpen(false);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Navigation Items with icons
    const navItems = [
        {
            title: 'Home',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            onClick: () => handleNavigation('home'),
        },
        {
            title: 'Projects',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            onClick: () => handleNavigation('projects'),
        },
        {
            title: 'Skills',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            onClick: () => handleNavigation('skills'),
        },
        {
            title: 'Contact',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            onClick: () => handleNavigation('contact'),
        },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <button
                            onClick={() => handleNavigation('home')}
                            className='flex items-center'
                        >
                            <img src={textImg} alt='Logo' className='h-8 w-auto' />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex md:items-center md:space-x-8'>
                        {navItems.map((item) => (
                            <button
                                key={item.title}
                                onClick={item.onClick}
                                className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300'
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden flex items-center justify-center'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none'
                        >
                            <span className='sr-only'>Open main menu</span>
                            <div className='relative w-6 h-6 flex items-center justify-center'>
                                <span
                                    className={`absolute w-full h-0.5 bg-current transform transition-all duration-300
                                        ${isOpen ? "rotate-45 top-3" : "top-1"}`}
                                />
                                <span
                                    className={`absolute w-full h-0.5 bg-current top-3 transition-all duration-300
                                        ${isOpen ? "opacity-0" : "opacity-100"}`}
                                />
                                <span
                                    className={`absolute w-full h-0.5 bg-current transform transition-all duration-300
                                        ${isOpen ? "-rotate-45 top-3" : "top-5"}`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='md:hidden'
                    >
                        <div className='px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm '>
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.title}
                                    onClick={item.onClick}
                                    className='block w-full text-center px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white transition-all duration-200'
                                >
                                    <div className="flex items-center justify-center space-x-3">
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar; 