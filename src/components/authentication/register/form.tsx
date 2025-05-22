
import { Form, Formik } from 'formik';
import Link from 'next/link';
import formData from './form-data.json';
import TextItem from './textItem';
import * as yup from 'yup';
import callApi from '../../../fundamental/helpers/callApi';
import { useState } from 'react';
import { errorMessage, successMessage } from '../../../fundamental/utilities/notifications';
import Register from '@/fundamental/models/register';
import Loading from '@/components/common/loading';
import fieldData from './field-data.json';
import getValidationErrorFields from '@/fundamental/getValidationErrorFields';
import { storeLoginToken } from '@/fundamental/helpers/auth';
import useAuth from '@/fundamental/hooks/useAuth';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {

    const [loading, setLoading] = useState(false);
    const { mutate } = useAuth();
    const router = useRouter();
    const initialValuesFormik: Register = { firstName: "", lastName: "", email: "", password: "" };
    let registerFormSchema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required().min(3)
    })

    return (
        <Formik
            initialValues={initialValuesFormik}
            validationSchema={registerFormSchema}
            onSubmit={
                async (values: Register, { setFieldError }) => {
                    try {
                        // console.log(values);

                        setLoading(true)
                        const { firstName, lastName, email, password } = values;
                        const res: any = await callApi().post('/auth/register', { firstName, lastName, email, password });
                        console.log(res);
                        setLoading(false)
                        const data = res?.data.response?.data;
                        if (res.status === 200 && data) {

                            // store information with redux
                            // await dispatch(setAuth({
                            //     verifyToken: res.data.token,
                            //     user: {
                            //         firstName: res.data._doc.firstName,
                            //         lastName: res.data._doc.lastName,
                            //         email: res.data._doc.email
                            //     },
                            // }));

                            // store information in cookie
                            await storeLoginToken(data?.token, 30);
                            await mutate(data);
                            successMessage(<div className='font-vazirmatn'>ثبت نام شما با موفقیت انجام شد</div>);
                            router.push('/');
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
                {/* <GoogleReCaptcha onVerify={handleVerify} /> */}
                <Link href="/">
                    <button type="submit" name="submit"
                        className="transition-all px-3 py-1 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300  mx-1">
                        بازگشت
                    </button>
                </Link>
                <button type="submit" name="submit"
                    className=" transition-all px-3  py-1 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1">
                    ثبت نام
                </button>
                {loading && <Loading text={"در حال ارسال اطلاعات ..."} />}
                <Link href="/auth/login" className='hover:text-blue-700 transition'><div className=' mt-4'>قبلا ثبت نام کرده اید</div></Link>
            </Form>
        </Formik >
    )

}






export default RegisterForm;