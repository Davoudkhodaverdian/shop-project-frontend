import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../components/helpers/i18n'
import { store } from './../store';
import { Provider } from 'react-redux';
import { setLocale } from 'yup';
import { useTranslation } from 'react-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  const { t, i18n } = useTranslation();
  setLocale({
    mixed: {
      required: ({ path }) => t('validation.required', {field: t(`validation.fields.${path}`)}),
    },
    string: {
      min: ({ path, min }) => t('validation.min',{field: t(`validation.fields.${path}`), min:t(`validation.fields.${min}`)}),
      email: t('validation.email'),
    },
  });


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp
