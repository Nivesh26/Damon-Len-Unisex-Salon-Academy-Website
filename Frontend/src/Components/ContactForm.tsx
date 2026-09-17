import { useState } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const serviceAboutOptions = [
  "General Inquiry",
  "Signature Haircut & Styling",
  "Precision Hair Color & Highlights",
  "Hair Spa & Keratin Therapy",
  "Beard Sculpting & Grooming",
  "Damon Len Academy Courses",
  "Bridal & Event Styling",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    about: "General Inquiry",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const subject = `[Damon Len Inquiry - ${formData.about}] Message from ${formData.name.trim()}`;
    const body = `Name: ${formData.name.trim()}
Email: ${formData.email.trim()}${formData.phone ? `\nPhone: ${formData.phone.trim()}` : ""}
Service / About: ${formData.about}

Message:
${formData.message.trim()}
`;

    const mailtoUrl = `mailto:damonlenunisexsalonacademy@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSent(true);
  };

  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-900 font-bold mb-6">
        Send a Message
      </h3>

      <div className="bg-neutral-50 border border-neutral-300 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
        {sent ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mx-auto">
              <FiCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-neutral-950">Message Ready</h4>
            <p className="text-sm text-neutral-800 max-w-sm mx-auto font-normal">
              Your email app has been opened with your inquiry addressed to{" "}
              <span className="font-semibold text-neutral-950">
                damonlenunisexsalonacademy@gmail.com
              </span>
              .
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  about: "General Inquiry",
                  message: "",
                });
              }}
              className="text-xs uppercase tracking-wider text-neutral-950 underline underline-offset-4 pt-2 hover:text-neutral-600 cursor-pointer font-semibold"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2"
                >
                  Name <span className="text-rose-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-400 bg-white text-sm text-neutral-950 placeholder:text-neutral-500 font-medium focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2"
                >
                  Email <span className="text-rose-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="yourname@domain.com"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-400 bg-white text-sm text-neutral-950 placeholder:text-neutral-500 font-medium focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>
            </div>

            {/* Phone & Service/About */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2"
                >
                  Phone / WhatsApp <span className="text-neutral-600 font-normal">(Optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+977 98XXXXXXXX"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-400 bg-white text-sm text-neutral-950 placeholder:text-neutral-500 font-medium focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2"
                >
                  Service / About <span className="text-rose-600">*</span>
                </label>
                <select
                  id="about"
                  required
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-400 bg-white text-sm text-neutral-950 font-medium focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all cursor-pointer"
                >
                  {serviceAboutOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2"
              >
                Message <span className="text-rose-600">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about the service you desire, academy admission query, or preferred stylist..."
                className="w-full px-4 py-3 rounded-lg border border-neutral-400 bg-white text-sm text-neutral-950 placeholder:text-neutral-500 font-medium focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-y"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-black text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm active:scale-[0.99]"
              >
                <span>Send Message</span>
                <FiArrowUpRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-neutral-700 font-medium">
                Sends to <strong className="text-neutral-950">damonlenunisexsalonacademy@gmail.com</strong>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
