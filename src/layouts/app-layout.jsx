import { AnimatePresence } from "framer-motion"
import Head from "next/head"

export default function AppLayout({ title, overrideTitle, ...props }) {
    const appName = process.env.APP_NAME

    return (
        <div id="main-app-layout">
            <Head>
                <title>{overrideTitle ? title : title + ' — ' + appName}</title>
            </Head>
            <AnimatePresence mode="wait">
                <div>
                    {props.children}
                </div>
            </AnimatePresence>
        </div>
    )
}