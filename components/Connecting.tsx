import { FC } from 'react'
import { Badge } from '@/components/ui/badge';

interface ConnectingProps {

}

const Connecting: FC<ConnectingProps> = ({ }) => {
    return (
        <section className="container text-center py-20 space-y-4">
            <Badge className="text-md bg-[#ffda79] font-mono">
                Trusted by top brands & businesses
            </Badge>
            <h1 className="text-6xl font-serif">
                <p>Connecting brands and</p>
                <p>business builders with the</p>
                <p>world’s top designers</p>
            </h1>
            <h3 className="text-xl">
                <p>The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated <br/> portfolios to find your perfect creative match.</p>
            </h3>
        </section>
    )
}

export default Connecting