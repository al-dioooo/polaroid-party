import { getBoundingBox } from "@/helpers/clip-path"
import AppLayout from "@/layouts/app-layout"
import { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, useVelocity } from "framer-motion"

const polaroids = [
    {
        id: 1,
        src: "https://placehold.co/400"
    },
    {
        id: 2,
        src: "https://placehold.co/400"
    },
    {
        id: 3,
        src: "https://placehold.co/400"
    },
    {
        id: 4,
        src: "https://placehold.co/400"
    },
    {
        id: 5,
        src: "https://placehold.co/400"
    },
    {
        id: 6,
        src: "https://placehold.co/400"
    },
    {
        id: 7,
        src: "https://placehold.co/400"
    },
    {
        id: 8,
        src: "https://placehold.co/400"
    },
]

export default function Playground() {
    const dragConstraints = useRef(null)

    return (
        <AppLayout title="Playground" overrideTitle={false}>
            <div className="relative flex h-screen bg-xoxo">
                <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-center pt-4 text-xs pointer-events-none">
                    <div className="flex items-center px-4 py-2 space-x-2">
                        <span className="flex items-center">Playground</span>
                        <span><hr className="w-8 border-stone-400 border-[1px] rounded-full" /></span>
                        <span>Polaroid Party</span>
                    </div>
                </div>
                <div ref={dragConstraints} className="relative grid w-full grid-cols-2 gap-2 mx-8 my-16 md:mx-16 md:grid-cols-4 md:gap-8 lg:grid-cols-6 h-min">
                    {polaroids.map((row) => (
                        <motion.div whileTap={{ scale: .95}} drag dragConstraints={dragConstraints} key={row.id} className="self-start justify-self-center p-2 w-32 md:w-40 xl:w-44 ring ring-stone-200 ring-opacity-25 ring-inset rounded-2xl aspect-[4/5] bg-stone-300 bg-opacity-25 backdrop-blur-sm cursor-grab hover:active:cursor-grabbing">
                            <img src={row.src} className="w-full bg-white rounded-lg pointer-events-none aspect-square" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}