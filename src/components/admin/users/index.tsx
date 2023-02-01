import React from "react";
import ModalMUI from "../../shared/modal";

const Users: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const handleModal = (open: boolean) => { setOpen(open); };
    return (
        <div>
            <div className="my-3">Users</div>
            <div>
                <button onClick={() => handleModal(true)}
                    className="transition-all px-3 py-1 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1">
                    add user
                </button>
            </div>
            <ModalMUI open={open} handleModal={handleModal} >
                <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams. It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                    </div>
                </figure>
            </ModalMUI>
        </div>
    )
}

export default Users;