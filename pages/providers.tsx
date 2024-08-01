"use client";

import React from "react";

import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProviderProps } from "next-themes/dist/types";
import { store, persistor } from "@/stores/store";
import { PersistGate } from 'redux-persist/integration/react'

import { useRouter } from "next/navigation";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

function Provider({ children, themeProps }: ProvidersProps) {
    const router = useRouter();

    return (
        <AppCacheProvider>
            <ThemeProvider theme={theme}>
                    <SessionProvider>
                        <ReduxProvider store={store}>
                            <PersistGate loading={null} persistor={persistor}>
                                {children}
                            </PersistGate>
                        </ReduxProvider >
                    </SessionProvider>
            </ThemeProvider>
        </AppCacheProvider>
    );
}

export default Provider;

