const ContactMap = () => {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="flex items-baseline justify-between mb-6">
          <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-900 font-bold">
            Location Map — Pulchowk, Lalitpur
          </h3>
          <a
            href="https://maps.app.goo.gl/5RFsPaPPghAVXY566"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-950 font-semibold underline underline-offset-4 hover:text-neutral-600 transition-colors"
          >
            Open in Google Maps →
          </a>
        </div>

        <div className="w-full h-[320px] sm:h-[420px] rounded-xl overflow-hidden border border-neutral-300 bg-neutral-100 shadow-xs">
          <iframe
            title="DamonLen Unisex Salon And Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0245084931256!2d85.31328117625186!3d27.676390776200236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19004264896f%3A0x7234e9ef9ac6a6b1!2sDamonLen%20Unisex%20Salon%20And%20Academy!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
