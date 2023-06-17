import BringToBiz from "./components/BringToBiz"
import Careers from "./components/Careers"
import FocusIndustries from "./components/FocusIndustries"
import Nav from "./components/HeroNav"
import OurPrinciples from "./components/OurPrinciples"
import Stats from "./components/Stats"
import TeamMessage from "./components/TeamMessage"
import Trends from "./components/Trends"
import WhoWeAre from "./components/WhoWeAre"

function App() {
  return (
    <>
      <Nav />
      <Stats />
      <WhoWeAre />
      <OurPrinciples />
      <BringToBiz />
      <Trends />
      <FocusIndustries />
      <Careers />
      <TeamMessage />
    </>
  )
}

export default App