import React, { Dispatch,SetStateAction } from 'react';

type Props = {
    setShow: Dispatch<SetStateAction<boolean>>
}

const Button: React.FC<Props> = ({ setShow }) => {

    const MenuHandler = () => {
        setShow((prevState: boolean) => !prevState)
    }

    return (
        <div className='flex flex-col justify-center'>
        <button className='rounded-md shadow hover:scale-110 md:hidden text-violet-500 transition hover:text-violet-800 h-6 w-6' onClick={MenuHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        </div>
    );
}

export default Button;
