import Better from "@/components/Better";
import Marquee from "@/components/Card";
import Chart from "@/components/Chart";
import Connecting from "@/components/Connecting";
import Dragon from "@/components/DragonEvolved";
import EmailForm from "@/components/EmailForm";
import HomeContainer from "@/components/HomeContainer";
import Intro from "@/components/Intro";
import Ninja from "@/components/Ninja";
import PerfectMatch from "@/components/PerfectMatch";
import Three from "@/components/Three";

export default function Home() {
  return (
    <main>
      <HomeContainer />
      <Three />
      <Marquee />
      <Ninja />
      <Dragon />
      <Intro />
      <Connecting />
      <PerfectMatch />
      <Better />
      <Chart />
      <EmailForm />
    </main>
  )
}
