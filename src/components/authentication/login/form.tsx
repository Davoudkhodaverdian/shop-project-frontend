import formData from './formData'
import { Formik, Form } from 'formik'
import Login from "../../models/login";
import TextItem from "./textItem";
import Link from 'next/link';
import * as yup from 'yup';
import callApi from "../../../app/helpers/callApi";
import ValidationError from "../../../app/exceptions/validationError";
import { useAppDispatch } from '../../../app/hooks'
import { setAuth } from "../../../app/store/auth";
import Router from "next/router";
import React, { useState } from "react";
import Loading from "../../shared/loading";
import { errorMessage, successMessage } from '../../../app/utilities/notifications';
import { storeLoginToken } from '../../../app/helpers/auth';
import useAuth from '../../../app/hooks/useAuth';


const FormComponent: React.FC = () => {

    const [loading, setLoading] = useState(false);
    let initialValuesFormik: Login = { email: "", password: "" };
    const { mutate } = useAuth();
    let loginFormSchema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(3)
    })
    const dispatch = useAppDispatch();
    return (
        <Formik
            initialValues={initialValuesFormik}
            validationSchema={loginFormSchema}
            onSubmit={
                async (values: Login, { setFieldError }) => {

                    try {

                        setLoading(true);
                        const res = await callApi().post('/auth/login', values);
                        setLoading(false);

                        if (res.status === 200) {

                            // dispatch(setAuth({
                            //     verifyToken: res.data.token,
                            //     user: {
                            //         firstName: res.data._doc.firstName,
                            //         lastName: res.data._doc.lastName,
                            //         email: res.data._doc.email
                            //     },
                            //     newLogin: true
                            // }));
                            await storeLoginToken(res.data.token, 30);
                            
                            await mutate(res.data);
                            // successMessage(<div className='font-vazirmatn'>ورود شما با موفقیت انجام شد</div>);
                            // await Router.push('/');
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
                <Link href="/">
                    <a>
                        <button type="submit" name="submit"
                            className="transition-all px-3 py-1 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300  mx-1">
                            بازگشت
                        </button>
                    </a>
                </Link>
                <button type="submit" name="submit"
                    className="transition-all px-3 py-1 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1">
                    ورود
                </button>
                {loading && <Loading text={"در حال ارسال اطلاعات ..."} />}
                <Link href="/auth/register"><a className='hover:text-blue-700 transition'><div className=' mt-4'>قبلا ثبت نام نکرده اید</div></a></Link>
            </Form>
        </Formik>
    )
}

export default FormComponent;