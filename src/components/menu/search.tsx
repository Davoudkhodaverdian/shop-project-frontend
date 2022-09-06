
import type { NextPage } from 'next'
import React from 'react';


const Search: NextPage = () => {

    const submitHandler : React.FormEventHandler = (event : React.FormEvent)=>{
        event.preventDefault();
    }

    return (
        <form  onSubmit={submitHandler}>
            <div className='mx-1 flex'>
            <input type="text" name="search" id="search" placeholder="جستجو ..."
                className="bg-white w-full rounded-r-sm border-gray-300 border border-l-0 shadow pr-3 pl-10 py-2 text-right focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </input>
            <button className='bg-slate-500 h-[42px] rounded-l-sm  px-1 focus:ring-1 focus:ring-slate-500 focus:border-slate-500' 
                type='submit'  >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            </div>
        </form>
    );
}

export default Search;