import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiAlertCircle } from "react-icons/fi";
import { z } from "zod";

const serviceAboutOptions = [
  "General Inquiry",
  "Signature Haircut & Styling",
  "Precision Hair Color & Highlights",
  "Hair Spa & Keratin Therapy",
  "Beard Sculpting & Grooming",
  "Damon Len Academy Courses",
  "Bridal & Event Styling",
];

// Zod Schema for Contact Form Validation
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(60, "Name cannot exceed 60 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/.test(val),
      "Please enter a valid phone number."
    ),
  about: z
    .string()
    .min(1, "Please select what your message is regarding."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(1500, "Message cannot exceed 1500 characters."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    about: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change if field had an error
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Run Zod Validation
    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: FormErrors = {};
      validationResult.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Validation passed
    setErrors({});
    const validData = validationResult.data;

    const subject = `[Damon Len Inquiry - ${validData.about}] Message from ${validData.name}`;
    const body = `Name: ${validData.name}
Email: ${validData.email}${validData.phone ? `\nPhone: ${validData.phone}` : ""}
Service / About: ${validData.about}

Message:
${validData.message}
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
                setErrors({});
              }}
              className="text-xs uppercase tracking-wider text-neutral-950 underline underline-offset-4 pt-2 hover:text-neutral-600 cursor-pointer font-semibold"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-neutral-950 placeholder:text-neutral-500 font-medium focus:outline-none transition-all ${
                    errors.name
                      ? "border-rose-500 ring-1 ring-rose-500/20"
                      : "border-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                  }`}
                />
                {errors.name && (
                  <p className="flex items-center gap-1.5 text-xs text-rose-600 mt-1.5 font-medium">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
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
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="yourname@domain.com"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-neutral-950 placeholder:text-neutral-500 font-medium focus:outline-none transition-all ${
                    errors.email
                      ? "border-rose-500 ring-1 ring-rose-500/20"
                      : "border-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                  }`}
                />
                {errors.email && (
                  <p className="flex items-center gap-1.5 text-xs text-rose-600 mt-1.5 font-medium">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
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
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+977 98XXXXXXXX"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-neutral-950 placeholder:text-neutral-500 font-medium focus:outline-none transition-all ${
                    errors.phone
                      ? "border-rose-500 ring-1 ring-rose-500/20"
                      : "border-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                  }`}
                />
                {errors.phone && (
                  <p className="flex items-center gap-1.5 text-xs text-rose-600 mt-1.5 font-medium">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
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
                  value={formData.about}
                  onChange={(e) => handleChange("about", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-neutral-950 font-medium focus:outline-none transition-all cursor-pointer ${
                    errors.about
                      ? "border-rose-500 ring-1 ring-rose-500/20"
                      : "border-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                  }`}
                >
                  {serviceAboutOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.about && (
                  <p className="flex items-center gap-1.5 text-xs text-rose-600 mt-1.5 font-medium">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.about}</span>
                  </p>
                )}
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
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about the service you desire, academy admission query, or preferred stylist..."
                className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-neutral-950 placeholder:text-neutral-500 font-medium focus:outline-none transition-all resize-y ${
                  errors.message
                    ? "border-rose-500 ring-1 ring-rose-500/20"
                    : "border-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                }`}
              />
              {errors.message && (
                <p className="flex items-center gap-1.5 text-xs text-rose-600 mt-1.5 font-medium">
                  <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
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
