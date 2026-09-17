import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import LookbookGallery from "../Components/LookbookGallery";
import LookbookCta from "../Components/LookbookCta";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";

const Lookbook = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans-clean selection:bg-neutral-900 selection:text-white">
      <Topbar />
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 w-full">
        {/* Minimal Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-neutral-950 tracking-tight">
            The Lookbook
          </h1>
          <p className="text-base sm:text-lg text-neutral-800 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
            A visual archive of signature precision cuts, bespoke color transformations, and salon artistry crafted daily at Pulchowk, Lalitpur.
          </p>
        </div>

        {/* Gallery Component */}
        <LookbookGallery />

        {/* Call to Action */}
        <LookbookCta />
      </main>

      <Footer />
      <Copyright />
    </div>
  );
};

export default Lookbook;