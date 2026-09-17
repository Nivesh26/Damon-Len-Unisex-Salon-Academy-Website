const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-neutral-900 bg-neutral-950 py-6 px-4 sm:px-8 text-xs text-neutral-400 font-normal font-sans-clean">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {currentYear} Damon Len Unisex Salon & Academy. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="text-neutral-700">•</span>
          <a href="#terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <span className="text-neutral-700">•</span>
          <a href="#academy" className="hover:text-white transition-colors">
            Academy Enrollment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
