import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../app/helpers/i18n'
import { store, persistor } from './../app/store';
import { Provider } from 'react-redux';
import { setLocale } from 'yup';
import { useTranslation } from 'react-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from "nextjs-progressbar";
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { t, i18n } = useTranslation();
  setLocale({
    mixed: {
      required: ({ path }) => t('validation.required', { field: t(`validation.fields.${path}`) }),
    },
    string: {
      min: ({ path, min }) => t('validation.min', { field: t(`validation.fields.${path}`), min: t(`validation.fields.${min}`) }),
      email: t('validation.email'),
    },
  });

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextNProgress />
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
