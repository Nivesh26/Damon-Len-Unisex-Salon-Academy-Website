import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans-clean">
            <Topbar />
            <Header />
            <main className="flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 lg:py-28 w-full">
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold block">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-editorial font-normal text-neutral-950 tracking-tight">
                        Contact & Location
                    </h1>
                    <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed pt-2">
                        We welcome appointments and walk-ins daily from 10:00 AM to 7:00 PM. Reach out for appointments, academy admissions, or general inquiries.
                    </p>
                </div>
            </main>
            <Footer />
            <Copyright />
        </div>
    );
};

export default Contact;