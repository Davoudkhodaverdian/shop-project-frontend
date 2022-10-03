
import type { NextPage } from 'next'
import React from 'react';


const Search: NextPage = () => {

    const submitHandler: React.FormEventHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <form className="" onSubmit={submitHandler}>
            <div className='mx-1 flex'>
                
            <div className="relative">
                <input className="appearance-none rounded relative block px-[34px] py-2 my-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                    type="search" placeholder="جستجو ..." required
                />
                    <svg 
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400 absolute top-[15px] right-[7px]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                <button type="submit"
                    className="absolute left-[3px] bottom-[8.9px] px-4 py-1 shadow-2xl rounded bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 ">
                    جستجو
                </button>
            </div>

            </div>
        </form>
    );
}

export default Search;