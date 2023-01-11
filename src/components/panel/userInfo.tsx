import { useAppSelector } from "../../app/hooks";
import useAuth from "../../app/hooks/useAuth";
import { RootState } from "../../app/store";


const UserInfo: React.FC = () => {

    const { user } = useAuth();
    //const user = useAppSelector((state: RootState) => state.auth.user); 
    return (
        <>
            <div>User Info</div>
            {`${user.firstName} ${user.lastName}`}
        </>
    )
}

export default UserInfo;