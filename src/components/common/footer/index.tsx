import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className={'flex flex-1 justify-center items-center px-0 py-8 border-t-[#eaeaea] border-t border-solid dark:border-[#222]'}><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></footer>
    )
}
export default Footer;