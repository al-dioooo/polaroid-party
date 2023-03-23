import { getBoundingBox } from "@/helpers/clip-path"
import AppLayout from "@/layouts/app-layout"
import { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, useVelocity } from "framer-motion"
import { randomize } from "@/helpers/math"

const polaroids = [
    {
        id: 1,
        src: "/img/playground/1.jpg"
    },
    {
        id: 2,
        src: "/img/playground/2.jpg"
    },
    {
        id: 3,
        src: "/img/playground/3.jpg"
    },
    {
        id: 4,
        src: "/img/playground/4.jpg"
    },
    {
        id: 5,
        src: "/img/playground/5.jpg"
    },
    {
        id: 6,
        src: "/img/playground/6.jpg"
    },
    {
        id: 7,
        src: "/img/playground/7.jpg"
    },
    {
        id: 8,
        src: "/img/playground/8.jpg"
    },
    {
        id: 9,
        src: "/img/playground/9.jpg"
    },
    {
        id: 10,
        src: "/img/playground/10.jpg"
    },
    {
        id: 11,
        src: "/img/playground/11.jpg"
    },
    {
        id: 12,
        src: "/img/playground/12.jpg"
    },
    {
        id: 13,
        src: "/img/playground/13.jpg"
    },
    {
        id: 14,
        src: "/img/playground/14.jpg"
    },
    {
        id: 15,
        src: "/img/playground/15.jpg"
    },
    {
        id: 16,
        src: "/img/playground/16.jpg"
    },
    {
        id: 17,
        src: "/img/playground/17.jpg"
    },
    {
        id: 18,
        src: "/img/playground/18.jpg"
    },
    {
        id: 19,
        src: "/img/playground/19.jpg"
    },
    {
        id: 20,
        src: "/img/playground/20.jpg"
    }
]

export default function Playground() {
    const dragConstraints = useRef(null)

    return (
        <AppLayout title="Playground" overrideTitle={false}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative flex min-h-screen bg-xoxo">
                <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-center pt-4 text-xs pointer-events-none">
                    <div className="flex items-center px-4 py-2 space-x-2">
                        <span className="flex items-center">Playground</span>
                        <span><hr className="w-8 border-stone-400 border-[1px] rounded-full" /></span>
                        <span>Polaroid Party</span>
                    </div>
                </div>
                <div ref={dragConstraints} className="relative grid w-full grid-cols-2 gap-2 mx-8 my-16 md:mx-16 md:grid-cols-4 md:gap-8 lg:grid-cols-6">
                    {randomize(polaroids).map((row) => (
                        <motion.div whileTap={{ scale: .95}} drag dragConstraints={dragConstraints} key={row.id} className="self-start justify-self-center p-2 w-32 md:w-40 xl:w-44 ring ring-stone-200 ring-opacity-25 ring-inset rounded-2xl aspect-[4/5] bg-stone-300 bg-opacity-25 backdrop-blur-sm cursor-grab hover:active:cursor-grabbing">
                            <img src={row.src} className="object-cover w-full bg-white rounded-lg pointer-events-none aspect-square" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </AppLayout>
    )
}