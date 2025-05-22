import { ErrorMessage, Field } from 'formik'
import React from 'react';

interface Props {
    item: { descreption: string, name: string, idHtml: string, type: string, id: number }
}

const TextItem: React.FC<Props> = ({ item }) => {

    return (
        <div className="my-4">
            <label htmlFor={item.idHtml} className="">{item.descreption}</label>
            <Field name={item.name} type={item.type} placeholder={item.descreption} dir={'auto'}
                className="rtl:placeholder:text-right ltr:placeholder:text-left appearance-none rounded relative block w-full px-3 py-2 my-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
            />
            {/* <span className="text-red-500"><ErrorMessage name={item.name} /></span> */}
        </div>
    );
}

export default TextItem;