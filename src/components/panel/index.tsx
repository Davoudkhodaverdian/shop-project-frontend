import React from "react";
import Dashbord from "./dashboard";
import UserInfo from "./userInfo";

const Panel: React.FC = () => {


    return (
        <div>
            <div>
                <Dashbord>
                    <UserInfo />
                </Dashbord>
            </div>
        </div>
    )
}

export default Panel;

