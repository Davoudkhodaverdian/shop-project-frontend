import { NextPage } from "next";
import formData from './formData'
import { Formik, Form } from 'formik'
// import LoginErrors from "../../models/loginErrors";
import Login from "../../models/login";
import TextItem from "./textItem";
import Link from 'next/link';
import * as yup from 'yup';
const FormComponent: NextPage = () => {

    let initialValuesFormik: Login = { email: "", password: "" };
    const submitHandler = (values: Login) => {
        console.log('onSubmit: ', values);
    }
    let registerFormSchema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(3)
    })

    return (
        <Formik
            initialValues={initialValuesFormik}
            validationSchema={registerFormSchema}
            // validate={validateHandler}
            onSubmit={submitHandler}
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