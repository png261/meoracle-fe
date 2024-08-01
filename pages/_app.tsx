import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Provider from "./providers";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `% s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function App({ Component, pageProps }: AppProps) {
    const pathname = usePathname();
    const isKeyboardOpen = useDetectKeyboardOpen();

    return (
        <Provider>
            <Head>
                <link
                    rel="preload"
                    href="/rhyme-icons.ttf"
                    as="font"
                    crossOrigin=""
                    type="font/ttf"
                />
            </Head>

            <Component {...pageProps} />

            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Provider>
    );
}
