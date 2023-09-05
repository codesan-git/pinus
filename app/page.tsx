import Better from "@/components/Better";
import Marquee from "@/components/Card";
import Connecting from "@/components/Connecting";
import EmailForm from "@/components/EmailForm";
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
      <Better />
      <EmailForm />
    </main>
  )
}
