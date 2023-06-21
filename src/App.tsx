import { useEffect } from "react"
import BringToBiz from "./components/BringToBiz"
import Careers from "./components/Careers"
import FocusIndustries from "./components/FocusIndustries"
import Nav from "./components/HeroNav"
import OurPrinciples from "./components/OurPrinciples"
import Stats from "./components/Stats"
import TeamMessage from "./components/TeamMessage"
import Trends from "./components/Trends"
import WhoWeAre from "./components/WhoWeAre"
import { getAnalytics } from "firebase/analytics";
import { app } from "./libs/firebase"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Strategy from "./components/Strategy"

function App() {
  useEffect(() => {
    getAnalytics(app);
  }, [])
  return (
    <>
      <Nav />
      <Stats />
      <WhoWeAre />
      <OurPrinciples />
      <BringToBiz />
      <Strategy />
      <Trends />
      <FocusIndustries />
      <Careers />
      <TeamMessage />
      <Contact />
      <Footer />
    </>
  )
}

export default App
