'use client';
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store,persistor } from "../../fundamental/store";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InitialLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NextNProgress />
                    {children}
                    <ToastContainer />
                </PersistGate>
            </Provider>
        </>
    );
};
export default InitialLayout;