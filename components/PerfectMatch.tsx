import { FC } from 'react'
import { Button } from './ui/button'
import { cardOptions } from './Card'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { StarFilledIcon } from '@radix-ui/react-icons'

interface PerfectMatchProps {

}

const PerfectMatch: FC<PerfectMatchProps> = ({ }) => {
    return (
        <section className='container grid grid-cols-2 items-center py-20'>
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
            <div className='relative rounded-full'>
                <Image
                    src={cardOptions[0].image}
                    alt='asd'
                    width={300}
                    height={300}
                    className='w-[574px] h-[635px] rounded-full object-cover'
                />
                <div className='absolute right-0 bottom-0'>
                    <Card className='bg-white rounded-3xl'>
                        <CardHeader>
                            <div className='flex space-x-4'>
                                <Image
                                    src={cardOptions[0].image}
                                    alt='card'
                                    width={300}
                                    height={300}
                                    className='w-14 h-14 rounded-full object-cover'
                                />
                                <div className='font-semibold my-auto'>
                                    <p>{cardOptions[0].name}</p>
                                    <p className='bg-blue-100 px-2 text-sm'>{cardOptions[0].job}</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className='font-semibold'>Skills</h3>
                            {cardOptions[0].skill.map((option) => (
                                <Badge key={option} className="rounded-full border border-gray-400 lowercase w-fit mr-2">
                                    <span>{option}</span>
                                </Badge>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <div className='flex'>
                                <div>Rp {cardOptions[0].price}/hr</div>
                                <div className='flex items-center ml-auto'>
                                    <StarFilledIcon />
                                    <StarFilledIcon />
                                    <StarFilledIcon />
                                    <StarFilledIcon />
                                    <StarFilledIcon />
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default PerfectMatch