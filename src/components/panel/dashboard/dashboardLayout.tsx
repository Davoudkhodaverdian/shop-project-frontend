
import Dashbord from "./index";
import { memo, ReactNode } from "react";


interface Props {
    children: ReactNode
}

const DashboardLayout : React.FC<Props> = ({ children })=> {

    return (<Dashbord>{children}</Dashbord>);
}

export default memo(DashboardLayout);
