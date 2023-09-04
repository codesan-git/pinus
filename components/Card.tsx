import { FC } from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import { Badge } from "@/components/ui/badge";



interface CardProps {

}

export const cardOptions = [
    { name: "Agung", price:50000, href: "/", job: "Full Stack Developer", skill: ["frontend", "backend"], image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
    { name: "Wolee", price:50000, href: "/", job: "Project Manager", skill: ["Jira", "Trello"], image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" },
    { name: "Peter", price:50000, href: "/", job: "Frontend Developer", skill: ["React", "NextJs"], image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
    { name: "Agnes", price:50000, href: "/", job: "UI/UX", skill: ["Figma"], image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
    { name: "Erza", price:50000, href: "/", job: "Full Stack Developer", skill: ["frontend", "backend"], image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" },
    { name: "Sabila", price:50000, href: "/", job: "Full Stack Developer", skill: ["ThreeJs", "backend", "NextJs"], image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
]

const Marquee: FC<CardProps> = ({ }) => {
    return (
        <section className="w-screen">
            <div className="relative flex overflow-x-hidden">
                <div className="py-4 animate-marquee whitespace-nowrap flex space-x-4">
                    {cardOptions.map((option) => (
                        <Card key={option.name} className="h-80 w-60 relative shadow-lg">
                            <Image
                                src={option.image}
                                alt="Card Image"
                                width={1500}
                                height={1500}
                                className="w-full h-full rounded-2xl contrast-50"
                            />
                            <CardContent className="absolute bottom-0 text-white font-semibold">
                                <div>
                                    <p>{option.name}</p>
                                    <p>{option.job}</p>
                                </div>
                                <div className="gap-x-4 gap-y-1 grid grid-cols-3">
                                    {option.skill.map((skills) => (
                                        <Badge key={skills} className="rounded-full border border-white lowercase w-fit">
                                            <span className="inline-block">{skills}</span>
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex space-x-4 ml-4">
                    {cardOptions.map((option) => (
                        <Card key={option.name} className="h-80 w-60 rounded-lg relative shadow-lg">
                            <Image
                                src={option.image}
                                alt="Card Image"
                                width={1500}
                                height={1500}
                                className="w-full h-full rounded-2xl contrast-50"
                            />
                            <CardContent className="absolute bottom-0 text-white font-semibold">
                                <div>
                                    <p>{option.name}</p>
                                    <p>{option.job}</p>
                                    <div className="gap-x-4 gap-y-1 grid grid-cols-3">
                                        {option.skill.map((skills) => (
                                            <Badge key={skills} className="rounded-full border border-white lowercase w-fit">
                                                <span className="inline-block">{skills}</span>
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Marquee