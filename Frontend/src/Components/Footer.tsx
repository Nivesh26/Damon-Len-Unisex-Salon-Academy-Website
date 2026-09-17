import { Link } from "react-router-dom";
import LogoWhite from "../assets/Logo-white.png";
import { FiClock, FiPhone, FiMail } from "react-icons/fi";
import {
    FaFacebookF,
    FaInstagram,
    FaThreads,
    FaTiktok,
    FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
    const socialLinks = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/dl_unisexsalon/",
            icon: FaInstagram,
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com/@dlunisexsalon1",
            icon: FaTiktok,
        },
        {
            name: "Threads",
            url: "https://www.threads.com/@dl_unisexsalon?xmt=AQG0HdsU5PE9g6LoSBbqI7maQuYgxpyKkWDXVGFOqqOKBn0",
            icon: FaThreads,
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=61577369185678",
            icon: FaFacebookF,
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/9779765148958",
            icon: FaWhatsapp,
        },
    ];

    const quickLinks = [
        { name: "Services", href: "#services" },
        { name: "Academy", href: "/academy" },
        { name: "About", href: "/about" },
        { name: "Lookbook", href: "/lookbook" },
        { name: "Contact", href: "/contact" },
    ];

    const disciplines = [
        "Signature Precision Haircut",
        "Beard Sculpting & Shave",
        "Hair Spa & Keratin Therapy",
        "Precision Color & Highlights",
        "Professional Academy Diploma",
    ];

    return (
        <footer className="bg-black text-neutral-300 font-sans-clean border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    {/* Brand & Socials (4 columns) */}
                    <div className="lg:col-span-4 space-y-5">
                        <Link to="/" className="inline-block">
                            <img
                                src={LogoWhite}
                                alt="Damon Len Unisex Salon & Academy"
                                className="h-11 sm:h-12 w-auto object-contain"
                            />
                        </Link>

                        <p className="text-sm text-neutral-300 font-normal leading-relaxed max-w-sm">
                            Precision Barbering, Bespoke Hair Artistry & Elite Professional Education.
                        </p>

                        {/* Minimal Monochrome Social Links */}
                        <div className="flex items-center gap-2.5 pt-1">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow Damon Len on ${social.name}`}
                                        className="w-9 h-9 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 flex items-center justify-center transition-colors"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation (2 columns) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-200">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm font-normal">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    {link.href.startsWith("/") ? (
                                        <Link
                                            to={link.href}
                                            className="text-neutral-400 hover:text-white transition-colors duration-150"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-neutral-400 hover:text-white transition-colors duration-150"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Disciplines (3 columns) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-200">
                            Disciplines
                        </h4>
                        <ul className="space-y-2.5 text-sm font-normal">
                            {disciplines.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#services"
                                        className="text-neutral-400 hover:text-white transition-colors duration-150"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Inquiries & Hours (3 columns) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-200">
                            Inquiries
                        </h4>
                        <div className="space-y-3 text-sm font-normal">
                            <p className="flex items-center gap-2.5 text-neutral-300">
                                <FiClock className="w-4 h-4 text-neutral-400 shrink-0" />
                                <span>Daily: 10:00 AM – 7:00 PM</span>
                            </p>
                            <p className="flex items-center gap-2.5">
                                <FiPhone className="w-4 h-4 text-neutral-400 shrink-0" />
                                <a
                                    href="tel:+9779765148958"
                                    className="text-neutral-300 hover:text-white transition-colors"
                                >
                                    +977 976-5148958
                                </a>
                            </p>
                            <p className="flex items-start gap-2.5 min-w-0">
                                <FiMail className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                                <a
                                    href="mailto:damonlenunisexsalonacademy@gmail.com"
                                    className="text-neutral-300 hover:text-white transition-colors break-all text-[13px]"
                                >
                                    damonlenunisexsalonacademy@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;