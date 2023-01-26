import React, { useState, useEffect,useRef } from 'react'

const BackToTop: React.FC = () => {

    const [isShow, setIsShow] = useState(false)
    const RefButton : any= useRef(null);

    useEffect(() => {
       window.pageYOffset > 100 ? setIsShow(true) : setIsShow(false)
        window.addEventListener('scroll', () => {
            console.log("scroll",window.pageYOffset)
            window.pageYOffset > 100 ? setIsShow(true) : setIsShow(false)
        })
    }, []);

    const scrollTopHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div onClick={scrollTopHandler} ref={RefButton}
            className={`${isShow ? 'opacity-100 z-10' : 'opacity-0 z-[-1]'} transition-all fixed bottom-4 right-4 md:bottom-10 md:right-12 p-3 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-500/40 shadow-md text-gray-400 dark:text-gray-300`}>
            <img className="h-5 w-5" src="/images/svg/top.svg" alt="scroll-top"/>
        </div>
    )
}

export default BackToTop