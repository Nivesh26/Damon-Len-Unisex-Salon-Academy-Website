import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Duelidentity from "../Components/Duelidentity";
import ClientReview from "../Components/ClientReview";
import LookbookHighlights from "../Components/LookbookHighlights";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
            <Topbar />
            <Header />
            <main className="flex-1 w-full">
                <Hero />
                <Services />
                {/* <Duelidentity /> */}
                <ClientReview />
                <LookbookHighlights />
            </main>
            <Footer />
            <Copyright />
        </div>
    );
};

export default Home;