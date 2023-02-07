import { Fade, Modal } from "@mui/material";
import React, { ReactElement } from "react";


interface Props {
    children: ReactElement
    open: boolean,
    handleModal: ((open: boolean) => void)
}

const ModalMUI: React.FC<Props> = ({ open, handleModal, children }) => {

    const handleClose = () => handleModal(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <div className="absolute    top-[50%] left-[50%]   translate-x-[-50%]  translate-y-[-50%] w-full md:w-3/4 lg:w-1/2">
                        <div className="bg-white mx-3 md:mx-0 p-4 rounded-md shadow">
                            {children}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
export default ModalMUI;