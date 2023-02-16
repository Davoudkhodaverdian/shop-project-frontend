
import { Form, Formik } from 'formik';
import Link from 'next/link';
import Register from '../../models/register';
import formData from './formData';
import TextItem from './textItem';
import * as yup from 'yup';
import callApi from '../../../app/helpers/callApi';
import Router from 'next/router'
import ValidationError from "../../../app/exceptions/validationError";
import { useAppDispatch } from '../../../app/hooks'
import { setAuth } from "../../../app/store/auth";
import { useState } from 'react';
import Loading from '../../shared/loading';
import { useTranslation } from 'react-i18next';
import { errorMessage, successMessage } from '../../../app/utilities/notifications';
import { storeLoginToken } from '../../../app/helpers/auth';
// import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

const RegisterForm = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const initialValuesFormik: Register = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };
    const { t } = useTranslation();
    let registerFormSchema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required().min(3),
        confirmPassword: yup.string().required().min(3)
    })

    return (
        <Formik
            initialValues={initialValuesFormik}
            validationSchema={registerFormSchema}
            onSubmit={
                async (values: Register, { setFieldError }) => {
                    try {
                        // console.log(values);

                        if (values.confirmPassword !== values.password)
                            return setFieldError("confirmPassword", t('validation.fields.confirmPasswordError'));

                        setLoading(true)
                        const { firstName, lastName, email, password } = values;
                        const res: any = await callApi().post('/auth/register', { firstName, lastName, email, password });
                        //console.log(res);
                        setLoading(false)
                        if (res.status === 200) {

                            // await dispatch(setAuth({
                            //     verifyToken: res.data.token,
                            //     user: {
                            //         firstName: res.data._doc.firstName,
                            //         lastName: res.data._doc.lastName,
                            //         email: res.data._doc.email
                            //     },
                            // }));
                            await storeLoginToken(res.data.token, 30);
                            successMessage(<div className='font-vazirmatn'>ثبت نام شما با موفقیت انجام شد</div>);  
                            await Router.push('/');
                            return <></> 
                        }
                    } catch (error: any) {
                        setLoading(false)
                        if (error instanceof ValidationError) {
                            // console.log(error);
                            (error.messages as []).map((error: any) => { setFieldError(error.parameter, error.message); });
                        }

                        let messageError = error.message ? error.message : "";
                        errorMessage(<div className='font-vazirmatn'>عملیات متوقف گردید، {messageError}</div>)
                    }

                }
            }

        >
            <Form>
                {formData.map(item => (<TextItem key={item.id} item={item} />))}
                {/* <GoogleReCaptcha onVerify={handleVerify} /> */}
                <Link href="/">
                    <a>
                        <button type="submit" name="submit"
                            className="transition-all px-3 py-1 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300  mx-1">
                            بازگشت
                        </button>
                    </a>
                </Link>
                <button type="submit" name="submit"
                    className=" transition-all px-3  py-1 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1">
                    ثبت نام
                </button>
                {loading && <Loading text={"در حال ارسال اطلاعات ..."} />}
                <Link href="/auth/login"><a className='hover:text-blue-700 transition'><div className=' mt-4'>قبلا ثبت نام کرده اید</div></a></Link>
            </Form>
        </Formik >
    )

}






export default RegisterForm;