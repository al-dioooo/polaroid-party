import '@/styles/globals.css'
import nProgress from 'nprogress'
import { useEffect } from 'react'

export default function App({ Component, pageProps, router }) {
    useEffect(() => {
        const handleRouteStart = () => nProgress.start()
        const handleRouteDone = () => nProgress.done()

        router.events.on("routeChangeStart", handleRouteStart)
        router.events.on("routeChangeComplete", handleRouteDone)
        router.events.on("routeChangeError", handleRouteDone)

        return () => {
            router.events.off("routeChangeStart", handleRouteStart)
            router.events.off("routeChangeComplete", handleRouteDone)
            router.events.off("routeChangeError", handleRouteDone)
        }
    }, [])

    return <Component {...pageProps} />
}