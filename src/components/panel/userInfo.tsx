import { useAppDispatch, useAppSelector } from "../../app/hooks";
import useAuth from "../../app/hooks/useAuth";
import { RootState } from "../../app/store";
import { clearNewLogin } from "../../app/store/auth";
import { successMessage } from "../../app/utilities/notifications";


const UserInfo: React.FC = () => {
    
    // useAuth way
    const { user } = useAuth();

    // redux way
    // const user = useAppSelector((state: RootState) => state.auth.user);
    // const newLogin = useAppSelector((state: RootState) => state.auth.newLogin);
    // const dispatch = useAppDispatch()
    // if (newLogin) {
    //     dispatch(clearNewLogin())
    //     successMessage(<div className='font-vazirmatn'>ورود شما با موفقیت انجام شد</div>);
    // }

    return (
        <div className="lg:max-w-[80%] mx-auto ">
            <div>User Info</div>
            {`${user?.firstName} ${user?.lastName}`}
        </div>
    )
}

export default UserInfo;