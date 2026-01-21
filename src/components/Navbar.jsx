import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const navLinks = [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'certifications', label: 'Certifications', href: '#certifications' },
        { id: 'experience', label: 'Experience', href: '#experience' },
        { id: 'contact', label: 'Contact Me', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (id) => {
        setActiveLink(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
        ${isScrolled
                    ? 'w-[90%] md:w-[85%] lg:w-[75%]'
                    : 'w-[95%] md:w-[90%] lg:w-[80%]'
                }`}
        >
            {/* Main Navbar Container */}
            <div
                className={`relative rounded-2xl transition-all duration-500 ease-out
          ${isScrolled
                        ? 'bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 border border-white/20'
                        : 'bg-white/5 backdrop-blur-md border border-white/10'
                    }`}
            >
                <div className="px-4 md:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14 md:h-16">

                        {/* Logo */}
                        <a
                            href="#home"
                            onClick={() => handleLinkClick('home')}
                            className="relative group flex items-center gap-2"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 overflow-hidden">
                                <img
                                    src="/logo.png"
                                    alt="KG"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="hidden sm:block text-white font-semibold text-lg tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                                Keshav Gupta
                            </span>
                        </a>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.id)}
                                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group
                    ${activeLink === link.id
                                            ? 'text-white'
                                            : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {/* Active Background Indicator */}
                                    {activeLink === link.id && (
                                        <span className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-xl border border-purple-400/30" />
                                    )}

                                    {/* Hover Effect */}
                                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-xl transition-all duration-300" />

                                    {/* Link Text */}
                                    <span className="relative z-10">{link.label}</span>

                                    {/* Underline Animation */}
                                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full transition-all duration-300
                    ${activeLink === link.id ? 'w-1/2' : 'w-0 group-hover:w-1/3'}`}
                                    />
                                </a>
                            ))}
                        </div>

                        {/* CTA Button (Desktop) */}
                        <div className="hidden md:block">
                            <a
                                href="#contact"
                                onClick={() => handleLinkClick('contact')}
                                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10">Let's Talk</span>
                                <svg
                                    className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-0.5' : ''}`} />
                                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-0.5' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-out
            ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="px-4 pb-4 pt-2 border-t border-white/10">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.id)}
                                    className={`relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                    ${activeLink === link.id
                                            ? 'text-white bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-purple-400/30'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                        }`}
                                    style={{
                                        transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                                        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                        opacity: isMobileMenuOpen ? 1 : 0,
                                    }}
                                >
                                    <span className="flex items-center gap-3">
                                        {/* Icon indicators */}
                                        <span className={`w-2 h-2 rounded-full transition-all duration-300
                      ${activeLink === link.id
                                                ? 'bg-gradient-to-r from-violet-400 to-fuchsia-400'
                                                : 'bg-gray-500'}`}
                                        />
                                        {link.label}
                                    </span>
                                </a>
                            ))}

                            {/* Mobile CTA */}
                            <a
                                href="#contact"
                                onClick={() => handleLinkClick('contact')}
                                className="mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold text-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
                                style={{
                                    transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : '0ms',
                                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(10px)',
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                }}
                            >
                                Let's Talk →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Glow Effect */}
            <div
                className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full rounded-full transition-all duration-700
          ${isScrolled
                        ? 'bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 blur-2xl'
                        : 'bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-fuchsia-600/10 blur-xl'}`}
            />
        </nav>
    );
};

export default Navbar;
