import { NextPage } from "next";
import formData from './formData'
import { useFormik } from 'formik'
import RegisterErrors from "../../models/registerErrors";
import Register from "../../models/register";
const Form: NextPage = () => {

    let initialValuesFormik: Register = { email: "", name: "", password: "" }
    const formik = useFormik({
        initialValues: initialValuesFormik,
        validate: (values) => {

            let errors: RegisterErrors = {};
            if (values.name === '') errors.name = "نام کاربری نباید خالی باشد";
            if (values.email === '') errors.email = "ایمیل نباید خالی باشد";
            else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email))
                errors.email = "ایمیل وارد شده معتبر نیست";
            if (values.password === '') errors.password = "رمز عبور نباید خالی باشد";
            console.log('validate: ', values);
            console.log('errors validate: ', errors);
            return errors;
        },
        onSubmit: (values) => {
            console.log('onSubmit: ', values);
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            {
                formData.map(item => (
                    <div className="my-4" key={item.id}>
                        <label htmlFor={item.idHtml} className="">{item.descreption}</label>
                        <input id={item.idHtml} name={item.name} type={item.type} required placeholder={item.descreption}
                            className="appearance-none rounded relative block w-full px-3 py-2 my-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                            value={
                                item.name === 'email' ? formik.values.email : item.name === 'name'
                                    ? formik.values.name : formik.values.password
                            }
                            onChange={formik.handleChange}
                        />
                        {
                            item.name === 'email' ? (formik.errors.email && <span className="text-red-500">{formik.errors.email}</span>) :
                                item.name === 'name' ? (formik.errors.name && <span className="text-red-500">{formik.errors.name}</span>) :
                                    (formik.errors.password && <span className="text-red-500">{formik.errors.password}</span>)
                        }
                    </div>
                ))
            }
            <button className="px-3 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1"
                type="submit" name="submit"
            >ثبت نام</button>
        </form>
    )
}

export default Form;