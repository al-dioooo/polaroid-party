import { AnimatePresence, motion } from "framer-motion"

import AppLayout from "@/layouts/app-layout"
import Link from "next/link"
import { CameraHeart, CloudDownload, Confetti, StyledArrowUp } from "@/components/icons/outline"
import { Heart } from "@/components/icons/solid"
import { useEffect, useRef, useState } from "react"
import { getBoundingBox } from "@/helpers/clip-path"

const colors = [
    {
        code: "pearl",
        name: "Pearl",
        background: "bg-stone-100"
    },
    {
        code: "charcoal",
        name: "Charcoal",
        background: "bg-stone-700"
    },
    {
        code: "lemonade",
        name: "Lemonade",
        background: "bg-red-100"
    },
    {
        code: "sky",
        name: "Sky",
        background: "bg-blue-100"
    },
    {
        code: "periwinkle",
        name: "Periwinkle",
        background: "bg-violet-100"
    }
]

export default function Index() {
    const polaroid = useRef(null)
    const blob = useRef(null)

    const [color, setColor] = useState("pearl")

    useEffect(() => {
        getBoundingBox(blob)
        getBoundingBox(polaroid)
    }, [])

    return (
        <AppLayout title="It's Your Fifteenth Birthday" overrideTitle={false}>
            <div className="relative flex h-screen">
                <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-center pt-4 text-xs pointer-events-none">
                    <div className="flex items-center px-4 py-2 space-x-2">
                        <span className="flex items-center">Happy Birthday <span className="ml-1"><Confetti stroke={1.1} className="w-4 h-4" /></span></span>
                        <span><hr className="w-8 border-stone-400 border-[1px] rounded-full" /></span>
                        <span>Farras Amelia Hasna</span>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-50 flex items-center justify-center overflow-hidden text-xs pointer-events-none">
                    <motion.div initial={{ scale: 1, y: 96 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} transition={{ type: "spring" }} className="flex items-center justify-center w-48 h-48 rounded-full pointer-events-auto bg-gradient-to-b from-transparent to-stone-300">
                        <StyledArrowUp className="w-8 h-8 -translate-y-8" stroke={.5} />
                    </motion.div>
                </div>
                <div className="absolute top-0 left-0 z-50 pointer-events-none">
                    <svg width={0} height={0}>
                        <defs>
                            <clipPath id="polaroidFrame" clipPathUnits="objectBoundingBox">
                                <path ref={polaroid} fill-rule="evenodd" clip-rule="evenodd" d="M21.6 0C9.67065 0 0 9.67065 0 21.6V338.4C0 350.329 9.67065 360 21.6 360H266.4C278.329 360 288 350.329 288 338.4V21.6C288 9.67065 278.329 0 266.4 0H21.6ZM28.8 14.4C20.8471 14.4 14.4 20.8471 14.4 28.8V259.2C14.4 267.153 20.8471 273.6 28.8 273.6H259.2C267.153 273.6 273.6 267.153 273.6 259.2V28.8C273.6 20.8471 267.153 14.4 259.2 14.4H28.8Z" fill="currentColor" />
                            </clipPath>
                        </defs>
                    </svg>
                    <motion.div initial={{ rotate: -16 }} animate={{ rotate: -12 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 2 }} className="md:w-64 xl:w-72 ring ring-stone-200 ring-opacity-25 ring-inset rounded-[22px] aspect-[4/5] bg-stone-300 bg-opacity-25 backdrop-blur-sm" style={{ clipPath: "url(#polaroidFrame)" }}></motion.div>
                </div>
                <div className="absolute inset-x-0 inset-y-0 z-50 flex items-center justify-center pointer-events-none">
                    <motion.div initial={{ rotate: -130 }} animate={{ rotate: -145 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 5 }} className="md:w-40 xl:w-44 ring ring-stone-200 ring-opacity-25 ring-inset rounded-[22px] aspect-[4/5] bg-stone-300 bg-opacity-25 backdrop-blur-sm" style={{ clipPath: "url(#polaroidFrame)" }}></motion.div>
                </div>
                <motion.div initial={{ translateX: '20%', scale: .5, rotate: '-20deg', opacity: 0 }} animate={{ translateX: 0, scale: 1, rotate: '-10deg', opacity: 1 }} transition={{ type: "spring" }} className="absolute bottom-8 right-8 z-10 md:w-56 xl:w-64 ring ring-stone-200 ring-opacity-25 ring-inset rounded-[22px] aspect-[4/5] bg-gradient-to-b from-stone-300/25 via-stone-300/25 to-transparent backdrop-blur-sm" style={{ clipPath: "url(#polaroidFrame)" }}></motion.div>
                <div className="relative flex flex-col items-center w-1/2 px-12 pt-32">
                    <div className="relative flex flex-col w-full xl:py-8">
                        <div className="absolute md:top-10 xl:top-20 md:right-52 xl:right-64">
                            <div className="relative">
                                <p className="px-3 py-1 font-semibold tracking-widest uppercase rounded-full md:text-xxs xl:text-xs bg-stone-100">Fifteenth</p>
                                <svg className="absolute -top-5 -right-5 text-stone-400" width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.96602 7.99777C2.30848 10.6215 1.72353 13.252 1.13696 15.8916M24.1359 1.79187C18.2414 7.05031 12.7079 12.7803 7.29796 18.5276M25.0998 20.7724C24.0305 20.8696 22.8412 21.3515 21.8082 21.5912C18.4208 22.3772 15.1046 23.2693 11.7687 24.2533" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="md:text-[8rem] xl:text-[10rem] font-branch text-stone-700">it's your</h1>
                        <h3 className="md:-mt-20 xl:-mt-24 text-right text-stone-500 md:text-[6rem] xl:text-9xl font-script">birthday!</h3>
                    </div>
                    <div className="w-full md:mt-0 xl:mt-8">
                        <div className="flex items-center space-x-4">
                            {colors.map((row) => (
                                <button onClick={() => setColor(row.code)} key={row.code} className={`${row.background} ${color === row.code ? "ring-1 ring-stone-500 ring-offset-4" : "ring-0 ring-offset-0"} hover:scale-110 hover:active:scale-95 transition duration-500 ease-in-out relative w-10 h-10 rounded-full`}>
                                    <AnimatePresence>
                                        {color === row.code && (
                                            <motion.div transition={{ type: "tween", ease: "easeInOut" }} initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }} className="absolute text-xs -inset-x-8 -bottom-8 text-stone-600">{row.name}</motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center w-full mt-16 space-x-8">
                        <Link href="/playground" className="flex items-center py-2 pl-6 pr-2 space-x-4 text-white rounded-full md:text-sm xl:text-base bg-stone-600">
                            <span>Playground</span>
                            <span className="flex items-center justify-center p-2 border rounded-full border-stone-400">
                                <CameraHeart className="w-4 h-4" stroke={1.5} />
                            </span>
                        </Link>
                        <Link href="" className="flex items-center space-x-4 md:text-sm xl:text-base">
                            <span>Birthday Card</span>
                            <span className="flex items-center justify-center p-2 border rounded-full">
                                <CloudDownload className="w-4 h-4" stroke={1.5} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="relative w-1/2 overflow-hidden bg-gradient-to-b from-stone-50 via-stone-50 to-white">
                    <div className="absolute inset-y-0 left-0 flex items-center w-full p-24">
                        <svg width={0} height={0}>
                            <defs>
                                <clipPath id="blob" clipPathUnits="objectBoundingBox">
                                    <path ref={blob} d="M64.529 22.8432C67.2292 34.6767 57.9406 47.0606 46.3299 55.4266C34.7732 63.8477 20.8943 68.1958 11.4977 62.2515C2.15508 56.2522 -2.70523 39.9055 1.56104 25.9254C5.82731 11.8903 19.1662 0.221966 33.1531 0.00180762C47.1939 -0.163311 61.8289 11.0097 64.529 22.8432Z" fill="currentColor" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="relative z-20 flex w-full h-full">
                            <div className="absolute inset-0 scale-[1.02] z-20 bg-gradient-to-b from-stone-300 via-transparent to-transparent" style={{ clipPath: "url(#blob)" }}></div>
                            <div className="z-20 flex w-full h-full" style={{ clipPath: "url(#blob)" }}>
                                <motion.img initial={{ scale: 1.05, y: 0 }} animate={{ scale: 1.05, y: -5 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3 }} className="object-cover w-full h-full filter" src="/img/baby.png" alt="" />
                            </div>
                            <motion.div initial={{ opacity: 1 }} animate={{ opacity: .5 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1, duration: 3 }} className="absolute z-10 w-48 h-48 bg-yellow-900 rounded-full blur-xl bg-opacity-30 -top-4 right-12"></motion.div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 z-50 flex items-center justify-end p-4 text-xs pointer-events-none">Created with <motion.span animate={{ rotate: 360 }} transition={{ type: "spring", repeat: Infinity, repeatType: "loop", duration: 1, repeatDelay: 2 }} className="flex items-center justify-center p-1 mx-1 text-white bg-red-500 rounded-full"><Heart className="w-2 h-2" /></motion.span> by Al</div>
                </div>
            </div>
        </AppLayout>
    )
}