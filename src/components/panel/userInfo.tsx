import { useAppDispatch, useAppSelector } from "../../fundamental/hooks";
import useAuth from "../../fundamental/hooks/useAuth";
import { RootState } from "../../fundamental/store";
import { clearNewLogin } from "../../fundamental/store/auth";
import { successMessage } from "../../fundamental/utilities/notifications";

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
            <div>{`${user?.firstName} ${user?.lastName}`}</div>
        </div>
    )
}

export default UserInfo;