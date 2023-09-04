import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main>
      <section className="container text-center py-20 space-y-4">
        <Badge variant="destructive" className="text-md">
          Over 3 million ready-to-work creatives in our community!
        </Badge>
        <h1 className="text-5xl break-words font-mono">
          <p>Hire the world’s top</p>
          <span>creative talent.</span>
        </h1>
        <h3 className="text-lg">
          Connect with a community of millions of top-rated designers & agencies around the world.
        </h3>
        <Button className="rounded-full">
          <p className="px-2">Start Hiring Day</p>
        </Button>
      </section>
      <section>
        <div className="relative flex overflow-x-hidden">
          <div className="py-4 animate-marquee whitespace-nowrap">
            <span className="text-4xl mx-4">Marquee Item 1</span>
            <span className="text-4xl mx-4">Marquee Item 2</span>
            <span className="text-4xl mx-4">Marquee Item 3</span>
            <span className="text-4xl mx-4">Marquee Item 4</span>
            <span className="text-4xl mx-4">Marquee Item 5</span>
          </div>
          <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
            <span className="mx-4 text-4xl">Marquee Item 1</span>
            <span className="mx-4 text-4xl">Marquee Item 2</span>
            <span className="mx-4 text-4xl">Marquee Item 3</span>
            <span className="mx-4 text-4xl">Marquee Item 4</span>
            <span className="mx-4 text-4xl">Marquee Item 5</span>
          </div>
        </div>
      </section>
    </main>
  )
}
