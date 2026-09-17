import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import LogoWhite from "../assets/Logo-white.png";
import {
    FiCalendar,
    FiPhone,
    FiClock,
    FiMapPin,
    FiMenu,
    FiX,
    FiChevronDown,
    FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const serviceCategories = [
        {
            title: "Barbering & Grooming",
            items: ["Signature Haircut", "Beard Sculpting & Trim", "Hot Towel Shave", "Express Clean-Up"],
        },
        {
            title: "Salon & Styling",
            items: ["Hair Spa & Deep Treatment", "Precision Color & Highlights", "Texture & Straightening", "Blowout & Finishing"],
        },
        {
            title: "Damon Len Academy",
            items: ["Master Barber Course", "Advanced Hairdressing", "Apprenticeship Program", "Weekend Workshop"],
            highlight: true,
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full transition-all duration-300">

            {/* Main Navigation Bar */}
            <nav
                className={`w-full transition-all duration-300 ${isScrolled
                    ? "bg-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-neutral-800/80 py-3"
                    : "bg-white/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.05)] border-b border-neutral-200/80 py-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group decoration-none select-none py-1"
                        aria-label="Damon Len Unisex Salon and Academy"
                    >
                        <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <img
                                src={isScrolled ? LogoWhite : Logo}
                                alt="Damon Len Unisex Salon & Academy"
                                className="h-10 sm:h-12 md:h-13 lg:h-14 w-auto object-contain transition-all duration-300"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className={`hidden lg:flex items-center gap-8 font-sans-clean text-xs uppercase tracking-[0.18em] font-medium transition-colors ${
                        isScrolled ? "text-neutral-300" : "text-neutral-700"
                    }`}>
                        {/* Services with Dropdown */}
                        <div
                            className="relative py-2"
                            onMouseEnter={() => setServicesDropdownOpen(true)}
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                            <button
                                className={`flex items-center gap-1.5 font-sans-clean text-xs uppercase tracking-[0.18em] font-medium transition-colors focus:outline-none cursor-pointer py-1 ${
                                    isScrolled
                                        ? "text-neutral-300 hover:text-white"
                                        : "text-neutral-700 hover:text-black"
                                }`}
                                aria-expanded={servicesDropdownOpen}
                            >
                                <span>Services</span>
                                <FiChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                        servicesDropdownOpen
                                            ? `rotate-180 ${isScrolled ? "text-white" : "text-black"}`
                                            : isScrolled ? "text-neutral-400" : "text-neutral-500"
                                    }`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {servicesDropdownOpen && (
                                <div className="absolute top-full -left-8 pt-3 w-[560px] animate-fadeIn">
                                    <div className={`rounded-2xl p-6 grid grid-cols-3 gap-6 transition-colors ${
                                        isScrolled
                                            ? "bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-neutral-800"
                                            : "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-neutral-100"
                                    }`}>
                                        {serviceCategories.map((cat, idx) => (
                                            <div key={idx} className="space-y-3">
                                                <div className={`text-[11px] font-semibold tracking-[0.14em] border-b pb-2 flex items-center justify-between ${
                                                    isScrolled
                                                        ? "text-neutral-100 border-neutral-800"
                                                        : "text-neutral-900 border-neutral-100"
                                                }`}>
                                                    <span>{cat.title}</span>
                                                    {cat.highlight && (
                                                        <span className={`text-[9px] px-1.5 py-0.5 rounded tracking-normal font-sans ${
                                                            isScrolled
                                                                ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                                                                : "bg-neutral-900 text-white"
                                                        }`}>
                                                            PRO
                                                        </span>
                                                    )}
                                                </div>
                                                <ul className={`space-y-2 text-[11px] normal-case tracking-normal font-light ${
                                                    isScrolled ? "text-neutral-400" : "text-neutral-600"
                                                }`}>
                                                    {cat.items.map((item, itemIdx) => (
                                                        <li key={itemIdx}>
                                                            <a
                                                                href="#services"
                                                                className={`block hover:translate-x-0.5 transition-all py-0.5 ${
                                                                    isScrolled
                                                                        ? "hover:text-white"
                                                                        : "hover:text-neutral-950"
                                                                }`}
                                                            >
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <div className={`col-span-3 pt-3 mt-1 border-t flex items-center justify-between text-[11px] normal-case tracking-normal ${
                                            isScrolled
                                                ? "border-neutral-800 text-neutral-400"
                                                : "border-neutral-100 text-neutral-500"
                                        }`}>
                                            <span>Need a custom consultation? Walk-ins are always welcomed.</span>
                                            <a
                                                href="#menu"
                                                className={`font-medium hover:underline flex items-center gap-1 uppercase tracking-wider text-[10px] ${
                                                    isScrolled ? "text-white" : "text-neutral-900"
                                                }`}
                                            >
                                                Full Price List <FiArrowRight className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/academy"
                            className={`relative py-1 group transition-colors ${
                                pathname === "/academy"
                                    ? isScrolled ? "text-white font-semibold" : "text-black font-semibold"
                                    : isScrolled ? "text-neutral-300 hover:text-white" : "text-neutral-700 hover:text-black"
                            }`}
                        >
                            <span>Academy</span>
                            <span className={`ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full lowercase tracking-normal border ${
                                isScrolled
                                    ? "bg-emerald-950/80 text-emerald-300 border-emerald-800/80"
                                    : "bg-emerald-100 text-emerald-800 border-emerald-200"
                            }`}>
                                enroll
                            </span>
                            <span
                                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                                    isScrolled ? "bg-white" : "bg-neutral-950"
                                } ${pathname === "/academy" ? "w-full" : "w-0 group-hover:w-full"}`}
                            />
                        </Link>

                        <Link
                            to="/about"
                            className={`relative py-1 group transition-colors ${
                                pathname === "/about"
                                    ? isScrolled ? "text-white font-semibold" : "text-black font-semibold"
                                    : isScrolled ? "text-neutral-300 hover:text-white" : "text-neutral-700 hover:text-black"
                            }`}
                        >
                            <span>About</span>
                            <span
                                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                                    isScrolled ? "bg-white" : "bg-neutral-950"
                                } ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}
                            />
                        </Link>

                        <Link
                            to="/lookbook"
                            className={`relative py-1 group transition-colors ${
                                pathname === "/lookbook"
                                    ? isScrolled ? "text-white font-semibold" : "text-black font-semibold"
                                    : isScrolled ? "text-neutral-300 hover:text-white" : "text-neutral-700 hover:text-black"
                            }`}
                        >
                            <span>Lookbook</span>
                            <span
                                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                                    isScrolled ? "bg-white" : "bg-neutral-950"
                                } ${pathname === "/lookbook" ? "w-full" : "w-0 group-hover:w-full"}`}
                            />
                        </Link>

                        <Link
                            to="/contact"
                            className={`relative py-1 group transition-colors ${
                                pathname === "/contact"
                                    ? isScrolled ? "text-white font-semibold" : "text-black font-semibold"
                                    : isScrolled ? "text-neutral-300 hover:text-white" : "text-neutral-700 hover:text-black"
                            }`}
                        >
                            <span>Contact</span>
                            <span
                                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                                    isScrolled ? "bg-white" : "bg-neutral-950"
                                } ${pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`}
                            />
                        </Link>
                    </div>

                    {/* Right Action: Book Appointment CTA */}
                    <div className="hidden sm:flex items-center gap-4">
                        <a
                            href="https://wa.me/9779765148958"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans-clean font-medium uppercase tracking-[0.18em] transition-all duration-300 active:scale-98 group ${
                                isScrolled
                                    ? "bg-white hover:bg-neutral-200 text-neutral-950 shadow-[0_0_20px_rgba(255,255,255,0.18)]"
                                    : "bg-neutral-950 hover:bg-neutral-800 text-white shadow-md"
                            }`}
                        >
                            <FiCalendar className={`w-3.5 h-3.5 group-hover:scale-110 transition-transform ${
                                isScrolled ? "text-neutral-950" : "text-neutral-300"
                            }`} />
                            <span>Book Appointment</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle Button */}
                    <div className="flex lg:hidden items-center gap-2">
                        <a
                            href="https://wa.me/9779765148958"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-3.5 py-2 rounded-full text-[11px] font-sans-clean uppercase tracking-wider font-semibold sm:hidden shadow-md ${
                                isScrolled
                                    ? "bg-white text-black"
                                    : "bg-neutral-950 text-white"
                            }`}
                        >
                            Book
                        </a>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2.5 rounded-xl transition-colors focus:outline-none ${
                                isScrolled
                                    ? "text-neutral-200 hover:bg-neutral-900"
                                    : "text-neutral-800 hover:bg-neutral-100"
                            }`}
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                {mobileMenuOpen && (
                    <div className={`lg:hidden w-full border-b shadow-2xl px-6 py-6 animate-fadeIn ${
                        isScrolled
                            ? "bg-neutral-950 border-neutral-800 text-white"
                            : "bg-white border-neutral-200 text-neutral-900"
                    }`}>
                        <div className={`flex items-center justify-center pb-4 mb-2 border-b ${
                            isScrolled ? "border-neutral-800" : "border-neutral-100"
                        }`}>
                            <img
                                src={isScrolled ? LogoWhite : Logo}
                                alt="Damon Len Unisex Salon & Academy"
                                className="h-11 w-auto object-contain"
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="#services"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-base font-sans-clean font-medium tracking-wider py-1 border-b flex items-center justify-between ${
                                    isScrolled
                                        ? "text-neutral-200 hover:text-white border-neutral-900"
                                        : "text-neutral-900 hover:text-neutral-500 border-neutral-100"
                                }`}
                            >
                                <span>SERVICES</span>
                                <span className="text-xs text-neutral-500 font-light">Hair • Beard • Spa</span>
                            </a>

                            <Link
                                to="/academy"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-base font-sans-clean font-medium tracking-wider py-1 border-b flex items-center justify-between transition-colors ${
                                    pathname === "/academy"
                                        ? isScrolled
                                            ? "text-white border-white font-semibold border-b-2"
                                            : "text-black border-neutral-950 font-semibold border-b-2"
                                        : isScrolled
                                            ? "text-neutral-300 hover:text-white border-neutral-900"
                                            : "text-neutral-900 hover:text-neutral-500 border-neutral-100"
                                }`}
                            >
                                <span>ACADEMY</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-sans tracking-normal ${
                                    isScrolled
                                        ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                                        : "bg-neutral-900 text-white"
                                }`}>
                                    NEW BATCH
                                </span>
                            </Link>

                            <Link
                                to="/about"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-base font-sans-clean font-medium tracking-wider py-1 border-b transition-colors ${
                                    pathname === "/about"
                                        ? isScrolled
                                            ? "text-white border-white font-semibold border-b-2"
                                            : "text-black border-neutral-950 font-semibold border-b-2"
                                        : isScrolled
                                            ? "text-neutral-300 hover:text-white border-neutral-900"
                                            : "text-neutral-900 hover:text-neutral-500 border-neutral-100"
                                }`}
                            >
                                ABOUT DAMON LEN
                            </Link>

                            <Link
                                to="/lookbook"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-base font-sans-clean font-medium tracking-wider py-1 border-b transition-colors ${
                                    pathname === "/lookbook"
                                        ? isScrolled
                                            ? "text-white border-white font-semibold border-b-2"
                                            : "text-black border-neutral-950 font-semibold border-b-2"
                                        : isScrolled
                                            ? "text-neutral-300 hover:text-white border-neutral-900"
                                            : "text-neutral-900 hover:text-neutral-500 border-neutral-100"
                                }`}
                            >
                                LOOKBOOK
                            </Link>

                            <Link
                                to="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-base font-sans-clean font-medium tracking-wider py-1 border-b transition-colors ${
                                    pathname === "/contact"
                                        ? isScrolled
                                            ? "text-white border-white font-semibold border-b-2"
                                            : "text-black border-neutral-950 font-semibold border-b-2"
                                        : isScrolled
                                            ? "text-neutral-300 hover:text-white border-neutral-900"
                                            : "text-neutral-900 hover:text-neutral-500 border-neutral-100"
                                }`}
                            >
                                CONTACT & LOCATION
                            </Link>

                            {/* Mobile CTA and info */}
                            <div className="pt-4 space-y-3">
                                <a
                                    href="https://wa.me/9779765148958"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`w-full py-3 rounded-full text-center text-xs font-sans-clean font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg transition-colors ${
                                        isScrolled
                                            ? "bg-white text-neutral-950 hover:bg-neutral-200"
                                            : "bg-neutral-950 text-white hover:bg-neutral-800"
                                    }`}
                                >
                                    <FaWhatsapp className="w-4 h-4 text-emerald-500" />
                                    <span>Book via WhatsApp</span>
                                </a>

                                {/* Direct Action Grid: Phone & Call */}
                                <div className="grid grid-cols-2 gap-2 pt-1">
                                    <a
                                        href="tel:+9779765148958"
                                        className={`py-2.5 px-3 rounded-xl text-xs font-sans-clean font-medium flex items-center justify-center gap-2 transition-colors border ${
                                            isScrolled
                                                ? "bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border-neutral-800"
                                                : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border-neutral-200"
                                        }`}
                                    >
                                        <FiPhone className={`w-3.5 h-3.5 ${isScrolled ? "text-neutral-400" : "text-neutral-600"}`} />
                                        <span>Call Salon</span>
                                    </a>
                                    <a
                                        href="https://maps.app.goo.gl/LzPt1Ptzmz9rECci7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`py-2.5 px-3 rounded-xl text-xs font-sans-clean font-medium flex items-center justify-center gap-2 transition-colors border ${
                                            isScrolled
                                                ? "bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border-neutral-800"
                                                : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border-neutral-200"
                                        }`}
                                    >
                                        <FiMapPin className="w-3.5 h-3.5 text-emerald-500" />
                                        <span>Directions</span>
                                    </a>
                                </div>

                                <div className="pt-2 text-center text-xs text-neutral-500 font-sans-clean space-y-1">
                                    <p className={`flex items-center justify-center gap-1.5 font-medium ${
                                        isScrolled ? "text-neutral-400" : "text-neutral-700"
                                    }`}>
                                        <FiClock className="w-3.5 h-3.5 text-neutral-500" />
                                        <span>Open Daily: 10:00 AM – 7:00 PM</span>
                                    </p>
                                    <a
                                        href="mailto:damonlenunisexsalonacademy@gmail.com"
                                        className={`block text-[11px] truncate px-2 ${
                                            isScrolled
                                                ? "text-neutral-500 hover:text-neutral-300"
                                                : "text-neutral-500 hover:text-neutral-800"
                                        }`}
                                    >
                                        damonlenunisexsalonacademy@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;