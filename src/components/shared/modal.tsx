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
                        <div className="overflow-auto absolute top-[50%] left-[50%] p-4 rounded-md translate-x-[-50%]  translate-y-[-50%] shadow bg-white">
                            {children}
                        </div>
                </Fade>
            </Modal>
        </div>
    )
}
export default ModalMUI;