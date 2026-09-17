import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/ContactForm";
import ContactMap from "../Components/ContactMap";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans-clean selection:bg-neutral-900 selection:text-white">
      <Topbar />
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 w-full">
        {/* Minimal Header - Centered & Bold */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-neutral-950 tracking-tight">
            Contact Damon Len
          </h1>
          <p className="text-base sm:text-lg text-neutral-800 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
            Appointments, academy inquiries, and walk-ins are welcomed daily from 10:00 AM to 7:00 PM at Pulchowk, Lalitpur.
          </p>
        </div>

        {/* 2-Column Minimal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ContactInfo />
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </main>

      {/* Minimal Location Map */}
      <ContactMap />

      <Footer />
      <Copyright />
    </div>
  );
};

export default Contact;