import Marquee from "@/components/Card";
import Connecting from "@/components/Connecting";
import HomeContainer from "@/components/HomeContainer";
import Intro from "@/components/Intro";
import PerfectMatch from "@/components/PerfectMatch";

export default function Home() {
  return (
    <main>
      <HomeContainer />
      <Marquee />
      <Intro />
      <Connecting />
      <PerfectMatch />
    </main>
  )
}
