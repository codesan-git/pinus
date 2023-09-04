import { FC } from 'react'

interface BetterProps {
  
}

const Better: FC<BetterProps> = ({}) => {
  return (
    <section className='container items-center py-20 space-y-20'>
        <h1 className='text-5xl font-serif'>A better way to hire <br/>designers</h1>
        <div className='grid grid-cols-3'>
            <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>The #1 job board for design talent</h3>
                <p>Get your job listings in front of millions of top-rated <br/>designers looking for their next role with an <br/>average of 1.1K targeted clicks per month.</p>
            </div>
            <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>Seamless designer search filters</h3>
                <p>No more sifting through piles of resumes. Our <br/>advanced search & filtering options make it easy <br/>to find the right designer in just a few clicks.</p>
            </div>
            <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>Top-quality candidates</h3>
                <p>Your brand deserves only the best. Engage with <br/>leading designers and save your favorite <br/>candidates for future projects – all in one place.</p>
            </div>
        </div>
    </section>
  )
}

export default Better