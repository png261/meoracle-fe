import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({
subsets: ["latin"],
    display: "swap",
});

function AppLayout({ children }: any) {
    return (
        <div>
            <Head>
                <title>Rhyme</title>
            </Head>

            <div className={`bg-[#121212] relative ${inter.className}`}>
                <div className="flex flex-row h-screen w-screen max-w-full relative">
                    <div className="h-screen scroll overflow-x-hidden overflow-y-scroll">
                        <div
                            className="relative w-[calc(100vw_-_14rem)] 
                    mini-laptop:w-[calc(100vw_-_55px)] tablet:w-screen mobile:w-screen"
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppLayout;
