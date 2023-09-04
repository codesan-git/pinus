import { FC } from 'react'
import { Button } from './ui/button'
import { cardOptions } from './Card'
import Image from 'next/image'

interface PerfectMatchProps {

}

const PerfectMatch: FC<PerfectMatchProps> = ({}) => {
    return (
        <section className='container grid grid-cols-2 items-center border-b-2 border-gray-500 py-20'>
            <div className='space-y-4'>
                <h1 className='text-5xl space-y-1 font-serif'>
                    <p>
                        Find your perfect <br />creative match
                    </p>
                </h1>
                <h3 className='text-xl'>
                    As the worlds largest and most far-reaching network of exceptional creative professionals, we are fully equipped to handle your most critical projects with ease.
                </h3>
                <div className='flex space-x-4'>
                    <Button className='rounded-full'>
                        Find a designer
                    </Button>
                    <Button variant={'ghost'} className='rounded-full'>
                        Learn about hiring
                    </Button>
                </div>
            </div>
            <div>
                <Image 
                    src={cardOptions[0].image}
                    alt='asd'
                    width={1500}
                    height={1500}
                    className='w-full h-1/2 rounded-full'
                />
            </div>
        </section>
    )
}

export default PerfectMatch