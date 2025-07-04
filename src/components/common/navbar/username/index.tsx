import { useAppSelector } from "@/fundamental/hooks";
import { RootState } from "@/fundamental/store";

const Username: React.FC = () => {
    //get date
    const options = { month: 'long' };
    let today = new Date().toLocaleDateString('fa-IR', options as any);
    const isAuthentacted = !!useAppSelector((state) => state.auth.user);
    const user = useAppSelector((state: RootState) => state.auth.user);
    return (
        <div className='p-2 bg-purple-800 shadow-inner text-white'>
            <div>{today} {new Date().toLocaleDateString('fa-IR')}</div>
            <div>
                {isAuthentacted && (user?.firstName ? `${user?.firstName} ${user?.lastName} عزیز خوش آمدید` : '')}
            </div>
        </div>
    )
}

export default Username;