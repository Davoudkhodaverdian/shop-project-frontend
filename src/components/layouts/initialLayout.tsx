'use client';
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/fundamental/store";
import logIndevelopment from "@/fundamental/logIndevelopment";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.css";

const InitialLayout = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        logIndevelopment();
    }, []);

    return (
        <Provider store={store}>
            <NextNProgress />
            {children}
            <ToastContainer />
        </Provider>
    );
};
export default InitialLayout;