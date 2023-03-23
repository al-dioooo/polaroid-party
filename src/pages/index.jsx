import { AnimatePresence, motion } from "framer-motion"

import AppLayout from "@/layouts/app-layout"
import Link from "next/link"
import { CameraHeart, CloudDownload, Confetti, StyledArrowUp } from "@/components/icons/outline"
import { Heart } from "@/components/icons/solid"
import { useEffect, useRef, useState } from "react"
import { getBoundingBox } from "@/helpers/clip-path"
import { saveAs } from "file-saver"

const colors = [
    {
        code: "pearl",
        name: "Pearl",
        background: "bg-stone-100",
        src: "/img/pearl.jpg",
        shadow: "bg-yellow-900"
    },
    {
        code: "charcoal",
        name: "Charcoal",
        background: "bg-stone-700",
        src: "/img/cc.jpg",
        shadow: "bg-stone-900"
    },
    {
        code: "lemonade",
        name: "Lemonade",
        background: "bg-red-100",
        src: "/img/lemonade.jpg",
        shadow: "bg-red-900"
    },
    {
        code: "sky",
        name: "Sky",
        background: "bg-blue-100",
        src: "/img/sky.jpg",
        shadow: "bg-sky-900"
    },
    {
        code: "periwinkle",
        name: "Periwinkle",
        background: "bg-violet-100",
        src: "/img/periwinkle.jpg",
        shadow: "bg-violet-900"
    }
]

export default function Index() {
    const polaroid = useRef(null)
    const blob = useRef(null)
    const heroImage = useRef(null)

    const [color, setColor] = useState("pearl")
    const [shadow, setShadow] = useState("bg-yellow-900")
    const [backgroundWidth, setBackgroundWidth] = useState(0)
    const [backgroundHeight, setBackgroundHeight] = useState(0)

    const [imageBackground, setImageBackground] = useState('/img/pearl.jpg')

    useEffect(() => {
        getBoundingBox(blob)
        getBoundingBox(polaroid)
        setBackgroundWidth(heroImage.current.offsetWidth)
        setBackgroundHeight(heroImage.current.offsetHeight)
    }, [])

    useEffect(() => {
        const colorData = colors.find((row) => row.code === color)

        setImageBackground(colorData.src)
        setShadow(colorData.shadow)
    }, [color])

    const downloadCard = () => {
        saveAs(
            "/birthday-card.pdf",
            "birthday-card.pdf"
        )
    }

    return (
        <AppLayout title="It's Your Fifteenth Birthday" overrideTitle={false}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative flex flex-col-reverse justify-end h-screen p-0 overflow-hidden md:flex-row">
                <div className="absolute bottom-0 z-50 flex items-center justify-start p-4 text-xs pointer-events-none md:justify-end inset-x-2 md:inset-x-0">Created with <motion.span animate={{ rotate: 360 }} transition={{ type: "spring", repeat: Infinity, repeatType: "loop", duration: 1, repeatDelay: 2 }} className="flex items-center justify-center p-1 mx-1 text-white bg-red-500 rounded-full"><Heart className="w-2 h-2" /></motion.span> by Al</div>
                <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-center pt-4 text-xs pointer-events-none">
                    <div className="flex items-center px-4 py-2 space-x-2">
                        <span className="flex items-center">Happy Birthday <span className="ml-1"><Confetti stroke={1.1} className="w-4 h-4" /></span></span>
                        <span><hr className="w-8 border-stone-400 border-[1px] rounded-full" /></span>
                        <span>Farras Amelia Hasna</span>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-50 items-center justify-center hidden overflow-hidden text-xs pointer-events-none md:flex">
                    <div className="flex items-center justify-center w-48 h-48 translate-y-24 rounded-full pointer-events-auto bg-gradient-to-b from-transparent to-stone-300">
                        {/* <StyledArrowUp className="w-8 h-8 -translate-y-8" stroke={.5} /> */}
                    </div>
                </div>
                <div className="absolute top-0 left-0 z-50 pointer-events-none">
                    <svg width={0} height={0}>
                        <defs>
                            <clipPath id="polaroidFrame" clipPathUnits="objectBoundingBox">
                                <path ref={polaroid} fill-rule="evenodd" clip-rule="evenodd" d="M21.6 0C9.67065 0 0 9.67065 0 21.6V338.4C0 350.329 9.67065 360 21.6 360H266.4C278.329 360 288 350.329 288 338.4V21.6C288 9.67065 278.329 0 266.4 0H21.6ZM28.8 14.4C20.8471 14.4 14.4 20.8471 14.4 28.8V259.2C14.4 267.153 20.8471 273.6 28.8 273.6H259.2C267.153 273.6 273.6 267.153 273.6 259.2V28.8C273.6 20.8471 267.153 14.4 259.2 14.4H28.8Z" fill="currentColor" />
                            </clipPath>
                        </defs>
                    </svg>
                    <motion.div initial={{ rotate: -16 }} animate={{ rotate: -12 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 2 }} className="w-36 md:w-64 xl:w-72 ring ring-stone-200 ring-opacity-25 ring-inset rounded-md md:rounded-[22px] aspect-[4/5] bg-stone-300 bg-opacity-25 backdrop-blur-sm" style={{ clipPath: "url(#polaroidFrame)" }}></motion.div>
                </div>
                <div className="absolute inset-x-0 inset-y-0 z-50 flex items-center justify-center pointer-events-none">
                    <motion.div initial={{ rotate: -130 }} animate={{ rotate: -145 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 5 }} className="w-24 md:w-40 xl:w-44 ring ring-stone-200 ring-opacity-25 ring-inset rounded-md md:rounded-[22px] aspect-[4/5] bg-stone-300 bg-opacity-25 backdrop-blur-sm" style={{ clipPath: "url(#polaroidFrame)" }}></motion.div>
                </div>
                <motion.div initial={{ translateX: '20%', scale: .5, rotate: '-20deg', opacity: 0 }} animate={{ translateX: 0, scale: 1, rotate: '-10deg', opacity: 1 }} transition={{ type: "spring" }} className="absolute w-24 bottom-0 md:bottom-8 right-0 md:right-8 md:w-56 xl:w-64 ring ring-stone-200 ring-opacity-25 ring-inset rounded-md md:rounded-[22px] aspect-[4/5] bg-stone-300 bg-opacity-25 backdrop-blur-sm" style={{ clipPath: "url(#polaroidFrame)" }}></motion.div>

                <div className="relative flex flex-col items-center justify-end h-full px-6 pb-6 md:justify-start md:px-12 md:pb-0 md:pt-32 md:w-1/2">
                    <div className="relative flex flex-col w-full xl:py-8">
                        <div className="absolute top-2 md:top-10 xl:top-20 right-28 md:right-52 xl:right-64">
                            <div className="relative">
                                <p className="px-3 py-1 font-semibold tracking-widest uppercase rounded-full text-xxs xl:text-xs bg-stone-100">Fifteenth</p>
                                <svg className="absolute -top-5 -right-5 text-stone-400" width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.96602 7.99777C2.30848 10.6215 1.72353 13.252 1.13696 15.8916M24.1359 1.79187C18.2414 7.05031 12.7079 12.7803 7.29796 18.5276M25.0998 20.7724C24.0305 20.8696 22.8412 21.3515 21.8082 21.5912C18.4208 22.3772 15.1046 23.2693 11.7687 24.2533" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-[4.5rem] md:text-[8rem] xl:text-[10rem] font-branch text-stone-700">it&apos;s your</h1>
                        <h3 className="-mt-16 md:-mt-20 xl:-mt-24 text-right text-stone-500 text-[4rem] md:text-[6rem] xl:text-9xl font-script">birthday!</h3>
                    </div>
                    <div className="w-full md:mt-0 xl:mt-8">
                        <div className="flex items-center justify-between md:space-x-4 md:justify-start">
                            {colors.map((row) => (
                                <button onClick={() => setColor(row.code)} key={row.code} className={`${row.background} ${color === row.code ? "ring-1 ring-stone-500 ring-offset-4" : "ring-0 ring-offset-0"} hover:active:scale-95 transition duration-500 ease-in-out relative w-10 h-10 rounded-full`}>
                                    <AnimatePresence>
                                        {color === row.code && (
                                            <motion.div transition={{ type: "tween", ease: "easeInOut" }} initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }} className="absolute text-xs -inset-x-8 -bottom-8 text-stone-600">{row.name}</motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center w-full mt-16 mb-16 space-x-8 md:mb-0">
                        <Link href="/playground" className="flex items-center py-2 pl-6 pr-2 space-x-4 text-white transition duration-500 rounded-full hover:active:scale-90 group md:text-sm xl:text-base bg-stone-600">
                            <span>Playground</span>
                            <span className="flex items-center justify-center p-2 transition duration-500 border rounded-full group-hover:scale-110 border-stone-400">
                                <CameraHeart className="w-4 h-4" stroke={1.5} />
                            </span>
                        </Link>
                        <button onClick={downloadCard} className="flex items-center space-x-4 transition duration-500 hover:active:scale-90 group md:text-sm xl:text-base">
                            <span>Birthday Card</span>
                            <span className="flex items-center justify-center p-2 transition duration-500 border rounded-full group-hover:scale-110">
                                <CloudDownload className="w-4 h-4" stroke={1.5} />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="relative flex w-full px-6 pt-12 mb-24 md:mb-0 md:h-screen md:px-12 md:w-1/2 bg-gradient-to-b from-stone-50 via-stone-50 to-transparent" style={{ minHeight: backgroundHeight }}>
                    <div className="absolute inset-y-0 left-0 flex w-full md:items-center md:p-24">
                        <svg width={0} height={0}>
                            <defs>
                                <clipPath id="blob" clipPathUnits="objectBoundingBox">
                                    <path ref={blob} d="M64.529 22.8432C67.2292 34.6767 57.9406 47.0606 46.3299 55.4266C34.7732 63.8477 20.8943 68.1958 11.4977 62.2515C2.15508 56.2522 -2.70523 39.9055 1.56104 25.9254C5.82731 11.8903 19.1662 0.221966 33.1531 0.00180762C47.1939 -0.163311 61.8289 11.0097 64.529 22.8432Z" fill="currentColor" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="relative z-20 flex w-full px-8 h-max md:px-0 top-16 md:inset-0">
                            <div className="absolute inset-x-8 md:inset-0 scale-[1.02] z-20 bg-gradient-to-b from-stone-300 via-transparent to-transparent" style={{ clipPath: "url(#blob)", width: backgroundWidth, height: backgroundHeight }}></div>
                            <div ref={heroImage} className="z-20 flex w-full aspect-square h-max" style={{ clipPath: "url(#blob)" }}>
                                <motion.img initial={{ scale: 1.05, y: 0 }} animate={{ scale: 1.05, y: -5 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3 }} className="object-cover w-full h-full filter" src={imageBackground} alt="" />
                            </div>
                            <motion.div initial={{ opacity: 1 }} animate={{ opacity: .5 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1, duration: 3 }} className={`${shadow} absolute z-10 w-48 h-48 rounded-full blur-xl bg-opacity-30 -top-4 right-12`}></motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AppLayout>
    )
}