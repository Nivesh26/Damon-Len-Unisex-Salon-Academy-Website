import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="space-y-10 lg:pr-8">
      <div>
        <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-900 font-bold mb-6">
          Studio Details
        </h3>

        <div className="space-y-6 text-sm text-neutral-900 font-normal">

          {/* Hours */}
          <div className="flex items-start gap-4">
            <FiClock className="w-5 h-5 text-neutral-950 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-neutral-950">Operating Hours</p>
              <p className="text-neutral-800 font-normal mt-0.5">Daily: 10:00 AM – 7:00 PM</p>
              <p className="text-xs text-neutral-700 font-medium mt-0.5">Walk-ins welcome daily</p>
            </div>
          </div>

          {/* Phone & WhatsApp */}
          <div className="flex items-start gap-4">
            <FiPhone className="w-5 h-5 text-neutral-950 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-neutral-950">Direct Inquiries</p>
              <div className="flex flex-wrap items-center gap-3 mt-0.5">
                <a
                  href="tel:+9779765148958"
                  className="text-neutral-800 font-medium hover:text-black transition-colors"
                >
                  +977 976-5148958
                </a>
                <span className="text-neutral-300">·</span>
                <a
                  href="https://wa.me/9779765148958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 transition-colors font-semibold"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <FiMail className="w-5 h-5 text-neutral-950 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-neutral-950">Email</p>
              <a
                href="mailto:damonlenunisexsalonacademy@gmail.com"
                className="text-neutral-800 font-medium hover:text-black transition-colors break-all block mt-0.5"
              >
                damonlenunisexsalonacademy@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-6 border-t border-neutral-300">
        <h4 className="text-xs uppercase tracking-[0.25em] text-neutral-900 font-bold mb-3">
          Follow Us
        </h4>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/dl_unisexsalon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-neutral-400 text-neutral-900 hover:text-white hover:bg-black hover:border-black flex items-center justify-center transition-all"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.tiktok.com/@dlunisexsalon1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-9 h-9 rounded-full border border-neutral-400 text-neutral-900 hover:text-white hover:bg-black hover:border-black flex items-center justify-center transition-all"
          >
            <FaTiktok className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61577369185678"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full border border-neutral-400 text-neutral-900 hover:text-white hover:bg-black hover:border-black flex items-center justify-center transition-all"
          >
            <FaFacebookF className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
