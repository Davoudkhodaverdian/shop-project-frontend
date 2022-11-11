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
import { setCurrentPerson } from "../../../app/store/currentPersonSlice";
import Router from "next/router";
import React, { useState } from "react";
import Loading from "../../loading";
import { errorMessage, successMessage } from '../../../app/utilities/notifications';


const FormComponent: React.FC = () => {

    const [loading, setLoading] = useState(false);
    let initialValuesFormik: Login = { email: "", password: "" };

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
                        setLoading(true)
                        const res = await callApi().post('/auth/login', values);

                        if (res.status === 200) {

                            successMessage(<div className='font-vazirmatn'>ورود شما با موفقیت انجام شد</div>);
                            setLoading(false)
                            //console.log(res.data)
                            dispatch(setAuth(res.data.token));
                            dispatch(setCurrentPerson({firstName: res.data._doc.firstName,lastName: res.data._doc.lastName, email: res.data._doc.email}));
                            Router.push('/');
                            
                        }
                    } catch (error : any) {
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
                            className="px-3 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300  mx-1">
                            بازگشت
                        </button>
                    </a>
                </Link>
                <button type="submit" name="submit"
                    className="px-3 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1">
                    ورود
                </button>
                {loading && <Loading text={"در حال ارسال اطلاعات ..."} />}
            </Form>
        </Formik>
    )
}

export default FormComponent;