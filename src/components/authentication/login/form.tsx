import { NextPage } from "next";
import formData from './formData'
import { Formik, Form } from 'formik'
import { useCookies } from 'react-cookie';
import Login from "../../models/login";
import TextItem from "./textItem";
import Link from 'next/link';
import * as yup from 'yup';
import callApi from "../../../helpers/callApi";
import ValidationError from "../../../app/exceptions/validationError";

const FormComponent: NextPage = () => {

    const [cookies, setCookie] = useCookies(['shop-token']);

    let initialValuesFormik: Login = { email: "", password: "" };

    let registerFormSchema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(3)
    })

    return (
        <Formik
            initialValues={initialValuesFormik}
            validationSchema={registerFormSchema}
            onSubmit={
                async (values: Login, { setFieldError}) => {

                    try {
                        const res = await callApi().post('/auth/login', values);
            
            
                        if (res.status === 200) {
                            console.log(res)
                            setCookie('shop-token', res.data.token, { 'domain': 'localhost', 'path': '/' })
                        }
                    } catch (error) {
            
                        if (error instanceof ValidationError) {
                            
                            console.log(error.messages);
                            Object.entries(error.messages).forEach(([key,value])=>{setFieldError(key,value as string);})
                            
                        }
            
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
            </Form>
        </Formik>
    )
}

export default FormComponent;