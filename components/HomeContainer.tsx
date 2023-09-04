"use client"
import { FC } from 'react'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HomeContainerProps {

}

const HomeContainer: FC<HomeContainerProps> = ({ }) => {
  return (
    <section className="container text-center py-20 space-y-4">
      <Badge variant="destructive" className="text-md">
        Over 3 million ready-to-work creatives in our community!
      </Badge>
      <motion.h1
        className="text-5xl break-words font-mono"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p>Hire the world’s top</p>
        <span>creative talent.</span>
      </motion.h1>
      <motion.div
        className='space-y-4'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <h3 className="text-lg">
          Connect with a community of millions of top-rated designers & agencies around the world.
        </h3>
        <Button className="rounded-full">
          <p className="px-2">Start Hiring Day</p>
        </Button>
      </motion.div>
    </section>
  )
}

export default HomeContainer