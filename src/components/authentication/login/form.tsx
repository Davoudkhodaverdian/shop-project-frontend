import formData from './form-data.json'
import { Formik, Form } from 'formik'
import TextItem from "./textItem";
import Link from 'next/link';
import * as yup from 'yup';
import callApi from "../../../fundamental/helpers/callApi";
import React, { useState } from "react";
import { errorMessage, successMessage } from '../../../fundamental/utilities/notifications';
import { storeLoginToken } from '../../../fundamental/helpers/auth';
import useAuth from '../../../fundamental/hooks/useAuth';
import Login from '@/fundamental/models/login';
import Loading from '@/components/common/loading';
import getValidationErrorFields from '@/fundamental/getValidationErrorFields';
import fieldData from './field-data.json'
import { useRouter } from 'next/navigation';

const FormComponent: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    let initialValuesFormik: Login = { email: "", password: "" };
    const { mutate } = useAuth();
    let loginFormSchema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(3)
    })

    return (
        <Formik
            initialValues={initialValuesFormik}
            validationSchema={loginFormSchema}
            onSubmit={
                async (values: Login, { setFieldError }) => {

                    try {

                        setLoading(true);
                        const res = await callApi().post('/auth/login', values);
                        console.log(res)
                        setLoading(false);
                        const data = res?.data.response?.data;
                        if (res.status === 200 && data) {

                            // store information with redux
                            // dispatch(setAuth({
                            //     verifyToken: res.data.token,
                            //     user: {
                            //         firstName: res.data._doc.firstName,
                            //         lastName: res.data._doc.lastName,
                            //         email: res.data._doc.email
                            //     },
                            //     newLogin: true
                            // }));

                            // store information in cookie
                            await storeLoginToken(data?.token, 30);
                            await mutate(data);
                            router.push('/');
                            successMessage(<div className='font-vazirmatn'>ورود شما با موفقیت انجام شد</div>);
                        }

                    } catch (error: any) {
                        setLoading(false)
                        console.log({ error });
                        if (error?.errors) {
                            const errors = getValidationErrorFields(error?.errors, fieldData);
                            errors.map(({ name, value }) => { setFieldError(name, value); });
                        } else if (error?.error) {
                            errorMessage(<div className='font-vazirmatn'>{error?.error?.message}</div>)
                        } else {
                            errorMessage(<div className='font-vazirmatn'>متاسفانه خطایی رخ داده است</div>);
                        }
                    }

                }
            }
        >
            <Form>
                {formData.map(item => (<TextItem key={item.id} item={item} />))}
                <Link href="/">
                    <button type="submit" name="submit"
                        className="transition-all px-3 py-1 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300  mx-1">
                        بازگشت
                    </button>
                </Link>
                <button type="submit" name="submit"
                    className="transition-all px-3 py-1 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1">
                    ورود
                </button>
                {loading && <Loading text={"در حال ارسال اطلاعات ..."} />}
                <Link href="/auth/register" className='hover:text-blue-700 transition'><div className=' mt-4'>قبلا ثبت نام نکرده اید</div></Link>
            </Form>
        </Formik>
    )
}

export default FormComponent;