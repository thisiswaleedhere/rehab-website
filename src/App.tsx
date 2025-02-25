import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import CallToAction from "./pages/CallToAction";
import FooterSection from "./pages/FooterSection";
import Landing from "./pages/Landing";
import MultiScroll from "./pages/MultiScroll";
import Services from "./pages/Services";
import TechniqueScroll from "./pages/TechniqueScroll";
import WhyChooseUs from "./pages/WhyChooseUs";

function App() {

  return (
    <>
      <div id="top" className="herogradient"></div>
      <Header />
      <Landing />
      <AboutUs />
      <Services />
      <TechniqueScroll />
      <WhyChooseUs />
      <MultiScroll />
      <CallToAction />
      <FooterSection />
    </>
  )
}

export default App
