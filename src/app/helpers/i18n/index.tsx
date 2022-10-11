import i18n from "i18next";
import { initReactI18next } from "react-i18next";


let resources = {
  en: {
    translation: {
      "validation": {
        "fields": {
          'firstName': "firstName",
          'lastName': "lastName",
          'email': "email",
          'password': "password",
          'confirmPassword': "confirm password",
          '3': '3'
        },
        "required": "{{ field }} is required",
        "email": "email is not valid",
        "min": "{{ field }} must be at least {{ min }} characters",
      },
      "register": "register",
      "login": "login",
      "profile": "profile",
      "exit": "exit",
      "main page": "main page",
    }
  },
  fa: {
    translation: {
      "validation": {
        "fields": {
          'firstName': "نام",
          'lastName': "نام خانوادگی",
          'email': "ایمیل",
          'password': "رمز عبور",
          'confirmPassword': "تائید رمز عبور",
          '3': 'سه'
        },
        "required": "{{ field }} وارد نشده",
        "email": "ایمیل وارد شده معتبر نیست",
        "min": "{{ field }} باید حداقل {{ min }} کاراکتر باشد",
      },
      "register": "ثبت نام",
      "login": "ورود",
      "profile": "پروفایل",
      "exit": "خروج",
      "main page": "صفحه اصلی",
    }
  },
}


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: "fa", // if you're using a language detector, do not define the lng option
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;