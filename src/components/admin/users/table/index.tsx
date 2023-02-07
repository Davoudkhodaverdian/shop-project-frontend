import React from "react";
import Pagination from "./pagination";

const Table: React.FC = () => {

    interface People {
        name: string
        email: string,
        title: string
    }
    const people: People[] = [{ name: "davoud", email: "davoudkhodaverdian20@gmail.com", title: "programmer" }]
    return (
        <div>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                شماره محصول
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                عنوان
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {people.map((person: People) => (
                            <tr key={person.email}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {person.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <button className="text-indigo-600 hover:text-indigo-900 ml-4">ویرایش</button>
                                    <button className="text-indigo-600 hover:text-indigo-900 ml-4">حذف</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="p-4 mt-2 border-t border-gray-200">
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
export default Table;