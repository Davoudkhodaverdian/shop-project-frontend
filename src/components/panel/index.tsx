import React from "react";
import UserInfo from "./userInfo";

const Panel: React.FC = () => {


    return (
        <div className="lg:max-w-[80%] mx-auto ">
            <div>Panel</div>
            <div>
                <UserInfo/>
            </div>
        </div>
    )
}

export default Panel;

