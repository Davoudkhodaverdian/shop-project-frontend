
import { withFormik, FormikProps, Form } from 'formik';
import Link from 'next/link';
import Register from '../../models/register';
import formData from './formData';
import TextItem from './textItem';
import * as yup from 'yup';
import callApi from '../../../app/helpers/callApi';
import Router from 'next/router'
import ValidationError from "../../../app/exceptions/validationError";

const InnerRegisterForm = (props: FormikProps<Register>) => {

    return (
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
                ثبت نام
            </button>
        </Form>
    )

}

const initialValuesFormik: Register = { email: "", name: "", password: "" };

const registerFormSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(3)
})

interface RegisterFormProps { }

const RegisterForm = withFormik<RegisterFormProps, Register>({

    mapPropsToValues: props => (initialValuesFormik),
    validationSchema: registerFormSchema,
    handleSubmit:
        async (values: Register, { setFieldError }) => {

            try {
                const res = await callApi().post('/auth/register', values);
                if (res.status === 201) {

                    //console.log(res);
                    Router.push('/auth/login');

                }
            } catch (error) {

                if (error instanceof ValidationError) {

                    console.log(error.messages);
                    Object.entries(error.messages).forEach(([key, value]) => { setFieldError(key, value as string); })

                }

            }


        }

})(InnerRegisterForm)


export default RegisterForm;