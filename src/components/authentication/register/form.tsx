
import { Form, Formik } from 'formik';
import Link from 'next/link';
import Register from '../../models/register';
import formData from './formData';
import TextItem from './textItem';
import * as yup from 'yup';
import callApi from '../../../app/helpers/callApi';
import Router from 'next/router'
import ValidationError from "../../../app/exceptions/validationError";
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../app/hooks'
import { setAuth } from "../../../app/store/auth";
import { setCurrentPerson } from "../../../app/store/currentPersonSlice";
import { useState } from 'react';
import Loading from '../../loading';

// import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

const RegisterForm = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    // const handleVerify = () => {

    // }

    const initialValuesFormik: Register = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

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
                        setLoading(true)
                        // console.log(values);

                        if (values.confirmPassword !== values.password) return setFieldError("confirmPassword", "تائید رمز عبور با رمز عبور یکی نیست");
                        const { firstName, lastName, email, password } = values;
                        const res: any = await callApi().post('/auth/register', { firstName, lastName, email, password });
                        //console.log(res);
                        setLoading(false)
                        if (res.status === 200) {

                            //console.log(res);
                            toast.success(<div className='font-vazirmatn'>ثبت نام شما با موفقیت انجام شد</div>, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });

                            //console.log(res.data)
                            dispatch(setAuth(res.data.token));
                            dispatch(setCurrentPerson({ firstName: res.data._doc.firstName, lastName: res.data._doc.lastName, email: res.data._doc.email }));
                            Router.push('/');
                        }
                    } catch (error: any) {
                        setLoading(false)
                        if (error instanceof ValidationError) {
                            // console.log(error);
                            (error.messages as []).map((error: any) => { setFieldError(error.parameter, error.message); });
                        }

                        let messageError = error.message ? error.message : "";
                        toast.error(<div className='font-vazirmatn'>عملیات متوقف گردید، {messageError}</div>, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
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
                            className="px-3 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300  mx-1">
                            بازگشت
                        </button>
                    </a>
                </Link>
                <button type="submit" name="submit"
                    className="px-3 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1">
                    ثبت نام
                </button>
                {loading && <Loading text={"در حال ارسال اطلاعات ..."} />}
            </Form>
        </Formik >
    )

}






export default RegisterForm;