

import { FormikBag, useFormik } from 'formik'
import type { NextPage } from 'next'
import React, { useState } from 'react'

const Register: NextPage = () => {

    let formData = [

        {
            descreption: "نام",
            name: "name",
            idHtml: "name",
            type: "text",
            id: 1
        },
        {
            descreption: "ایمیل",
            name: "email",
            idHtml: "email-address",
            type: "email",
            id: 2
        },
        {
            descreption: "رمز عبور",
            name: "password",
            idHtml: "password",
            type: "password",
            id: 3
        }
    ]

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            password: "",
        },
        onSubmit: (value) => {
            console.log(value);
        }
    })






    return (

        <div className="flex flex-col justify-center items-center h-screen">
            <div className="md:flex flex-row w-[calc(100%-16px)]  md:max-w-[1000px] rounded shadow-lg p-4 bg-white  mx-2">
                <div className='w-full'>
                    <div className='flex'>
                        <div className='flex  items-center'><img src="/images/logo.svg" width={50} alt="logo" /></div>
                        <div className='flex  items-center'><img src="/images/nextLogo.svg" width={50} alt="logo" /></div>
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-right">ثبت نام</h2>
                    <form onSubmit={formik.handleSubmit}>
                        {
                            formData.map(item => (
                                <div className="my-4" key={item.id}>
                                    <label htmlFor={item.idHtml} className="">{item.descreption}</label>
                                    <input id={item.idHtml} name={item.name} type={item.type} required placeholder={item.descreption}
                                        className="appearance-none rounded relative block w-full px-3 py-2 my-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                                        value={
                                            item.name === 'email' ? formik.values.email : item.name === 'name' ? formik.values.name : formik.values.password
                                        }
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            ))
                        }
                        <button className="px-3 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1"
                            type="submit" name="submit"
                        >ثبت نام</button>
                    </form>
                </div>
                <div className='max-w-[500px] md:flex flex-col justify-center items-center hidden'>
                    <img src='./images/undraw_business_shop_re_ruf4.svg' />
                </div>
            </div>
        </div>
    );
}

export default Register;