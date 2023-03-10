import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ModalMUI from "../../shared/modal";
import Table from "./table";

const Users: React.FC = () => {

    // manage modal with state
    // const [open, setOpen] = React.useState<boolean>(false);
    // const handleModal = (open: boolean) => { setOpen(open); };

    // manage modal with router
    const router = useRouter();
    const handleModal = (open: boolean) => {
        router.push(`/admin/users${open ? '?create-user' : ''}`);
    };
    const open = router.asPath === "/admin/users?create-user" || router.asPath === "/admin/users/create";


    return (
        <div>
            <div className="my-3">Users</div>
            <div className="my-3">
                <Link href="/admin/users?create-user" as="/admin/users/create">
                    <a className="transition-all px-3 py-1 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  ">
                        add user
                    </a>
                </Link>
            </div>
            <div className="my-3">
                <Table />
            </div>
            <ModalMUI open={open} handleModal={handleModal} >
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div className="overflow-hidden  sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 lg:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="appearance-none rounded relative block w-full px-3 py-2 my-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500" placeholder="First name"
                                        />
                                    </div>

                                    <div className="col-span-6 lg:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="appearance-none rounded relative block w-full px-3 py-2 my-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500" placeholder="Last name"
                                        />
                                    </div>

                                    <div className="col-span-6 ">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            placeholder="Email address"
                                            className="appearance-none rounded relative block w-full px-3 py-2 my-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button onClick={() => handleModal(false)}
                                    type="button"
                                    className="mr-3 inline-flex justify-center rounded-md border border-transparent text-indigo-600 bg-white border-indigo-600 py-2 px-4 text-sm font-medium  shadow-sm hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    cancel
                                </button>
                                <button
                                    type="submit"
                                    className=" inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </ModalMUI>
        </div>
    )
}

export default Users;