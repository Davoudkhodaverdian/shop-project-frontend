

import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../app/store/languageSlice'
import { RootState } from '../../app/store'
import { useTranslation } from 'react-i18next';

export default function Theme() {

    const language = useSelector((state: RootState) => state.language);
    const dispatch = useDispatch();
    const { i18n } = useTranslation();

    const languageHandler = () => {
        let lan = language === "fa" ? "en" : "fa";
        dispatch(setLanguage(lan));
        i18n.changeLanguage(lan);
    }

    return (

        <div onClick={languageHandler} className="cursor-pointer flex justify-center items-center">
            <div className='mx-2'>تغییر زبان</div>
            <div className=" mx-2 flex h-6 w-6 flex-none items-center justify-center rounded-sm bg-white shadow ring-1 ring-slate-900/10">
                {language}
            </div>
        </div>

    )
}