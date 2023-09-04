import Image from 'next/image'
import { FC } from 'react'
import { Button } from './ui/button'

interface IntroProps {

}

const introOptions = [
    { image: "https://img.logoipsum.com/288.svg" },
    { image: "https://img.logoipsum.com/290.svg" },
    { image: "https://img.logoipsum.com/285.svg" },
    { image: "https://img.logoipsum.com/289.svg" },
    { image: "https://img.logoipsum.com/260.svg" },
    { image: "https://img.logoipsum.com/264.svg" },
    { image: "https://img.logoipsum.com/291.svg" },
]

const Intro: FC<IntroProps> = ({ }) => {
    return (
        <section className="container py-20 space-y-20">
            <div className="uppercase flex justify-between space-x-4">
                <p className='font-semibold'>Trusted By</p>
                {introOptions.map((option) => (
                    <div key={option.image}>
                        <Image
                            src={option.image}
                            alt='intro picture'
                            width={1500}
                            height={1500}
                            className='h-6 w-24'
                        />
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-2 items-center border-b-2 border-gray-500 py-20'>
                <div>
                    <h1 className='text-7xl space-y-1'>
                        <p>
                            When only <br/>the best <br/>talent will do
                        </p>
                    </h1>
                </div>
                <div className='space-y-4'>
                    <p className='text-xl'>From Ford to Airbnb to Capital One, see why over 60,000 leading brands and business builders use Dribbble to attract, engage, and hire their best design talent.</p>
                    <Button className='rounded-full'>
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Intro