import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import AcademyHero from "../Components/AcademyHero";
import AcademySchedule from "../Components/AcademySchedule";
import AcademyCourses from "../Components/AcademyCourses";
import AcademyTeam from "../Components/AcademyTeam";
import AcademyCta from "../Components/AcademyCta";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";

const Academy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans-clean selection:bg-neutral-900 selection:text-white">
      <Topbar />
      <Header />

      <main className="flex-1 w-full">
        {/* Header, Timings, & Courses (White Section) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20 pb-16 sm:pb-24 w-full">
          <AcademyHero />
          <AcademySchedule />
          <AcademyCourses />
        </div>

        {/* Teachers, Mentors & Team (Full-Width Black Section) */}
        <AcademyTeam />

        {/* Admissions & Studio Tour CTA (White Section) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 w-full">
          <AcademyCta />
        </div>
      </main>

      <Footer />
      <Copyright />
    </div>
  );
};

export default Academy;