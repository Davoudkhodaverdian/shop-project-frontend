
import type { NextPage } from 'next'


const Slider: NextPage = () => {

    return (

        <div className='flex items-center justify-center'>
            <div className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
            <div>
                <img src="/images/slide-one.webp" className='h-96' alt="Vercel Logo" />
            </div>
            <div className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>

        </div>

    );
}

export default Slider;
