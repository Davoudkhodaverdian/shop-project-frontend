


import { setLanguage } from '../../app/store/languageSlice'
import { RootState } from '../../app/store'
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
export default function Theme() {

    const language = useAppSelector((state: RootState) => state.language);
    const dispatch = useAppDispatch()
    const { t,i18n } = useTranslation();

    const languageHandler = () => {
        let lan = language === "fa" ? "en" : "fa";
        dispatch(setLanguage(lan));
        i18n.changeLanguage(lan);
    }

    return (

        <div onClick={languageHandler} className="cursor-pointer flex justify-center items-center">
            <div onClick={languageHandler} className="cursor-pointer flex justify-center items-center">
                <div className='mx-2'>{t('change language')}</div>
                <div className=" mx-2 flex h-6 w-6 flex-none items-center justify-center rounded-sm bg-white shadow ring-1 ring-slate-900/10">
                    {language}
                </div>
            </div>
        </div>

    )
}