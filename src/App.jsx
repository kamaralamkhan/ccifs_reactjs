import React from "react";
import Headers from "./components/headers";
import TopBar from "./components/topBar";
import HeaderMobile from "./components/header_mobile";
import NavBar from "./components/navBar";
import NavBarMobile from "./components/navBarMobile";
import Marquee from "./components/Marquee";
import Home from "./components/home"; // Import the Home component
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TeamMember2 from "./components/team";
import AdvisoryBoard from "./components/advisoryBoard";
import CourseDetails from "./components/courses/crimeScene";
import Fingerprint from "./components/courses/fingerprint";
import ForensicScience from "./components/courses/forensicScience";
import DocumentExamination  from "./components/courses/documentExamination";
import ForensicBiology from "./components/courses/forensicBiology"
import CrimeSceneInvestigation from "./components/courses/crimeSceneInvestigation.jsx"
import CampusAmbassador from "./components/campusambassador.jsx";
import ContactForm from "./components/ContactForm.jsx";
import DownloadApp from "./components/DownloadApp.jsx";
import MOU from "./components/mou.jsx";


// Import the core member detail components
import TabishSarosh from "./components/coremember/TabishSarosh"; // Adjust the path as necessary
import MsKirtiGupta from "./components/coremember/MsKirtiGupta"; // Adjust the path as necessary
import AkanshaYadav from "./components/coremember/AkanshaYadav"; // Adjust the path as necessary
import LaxmipriyaDash from "./components/coremember/laxmipriyaDash.jsx"; // Adjust the path as necessary
import ChanderjeetYadav from "./components/coremember/chanderjeetYadav.jsx";
import HarshitHanda from "./components/coremember/HarshitHanda.jsx";
import AnushkaMishra from "./components/coremember/anushkaMishra.jsx";
// import AliaBhatt from "./components/coremember/AliaBhatt"; // Adjust the path as necessary

// createBrowserRouter
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/download", // New route for the download page
      element: <DownloadApp />,
    },
    {
      path: "/mou", // New route for the download page
      element: <MOU />,
    },
    {
      path: "/team",
      element: <TeamMember2 />,
    },
    {
      path: "/advisoryBoard",
      element: <AdvisoryBoard />,
    },
    {
      path: "/team/tabish-sarosh",
      element: <TabishSarosh />,
    },
    {
      path: "/team/ms-kirti-gupta",
      element: <MsKirtiGupta />,
    },
    {
      path: "/team/akansha-yadav",
      element: <AkanshaYadav />,
    },
    {
      path: "/team/laxmipriya-dash",
      element: <LaxmipriyaDash />,
    },
    {
      path: "/team/ChanderjeetYadav",
      element: <ChanderjeetYadav />,
    },
    {
      path: "/team/HarshitHanda",
      element: <HarshitHanda />,
    },
    {
      path: "/team/AnushkaMishra",
      element: <AnushkaMishra />,
    },
    // {
    //   path: "/coremember/alia-bhatt",
    //   element: <AliaBhatt />,
    // },
    {
      path:"courses/crime-scene-investigation",
      element: <CourseDetails />,

    },
    {
      path:"courses/fingerprint-examination-and-analysis",
      element: <Fingerprint />,

    },
    {
      path:"courses/forensic-science",
      element: <ForensicScience/>,

    },
    {
      path:"courses/document-examination",
      element: <DocumentExamination/>,

    },
    {
      path:"courses/forensic-biology",
      element: <ForensicBiology/>,

    },
    {
      path:"courses/Crime-Scene-Investigation",
      element: <CrimeSceneInvestigation />,

    },
    {
      path:"courses/campus-ambassador",
      element: <CampusAmbassador />,

    },
    {
      path:"contact-us",
      element: <ContactForm />,

    },

  ]);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-700">
      <TopBar />

      <div className="block md:hidden">
        <NavBarMobile />
      </div>

      <div className="hidden md:block">
        <Headers />
      </div>

      <div className="hidden md:block">
        <NavBar />
      </div>

      <div className="block md:hidden">
        <HeaderMobile />
      </div>

      <Marquee />

      {/* Main content area */}
      <main className="flex-grow">
        <RouterProvider router={router} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
