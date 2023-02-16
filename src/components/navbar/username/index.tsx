import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";

interface Props {
    isAuthentacted: boolean
}
const Username: React.FC<Props> = ({ isAuthentacted }) => {
    //get date
    const options = { month: 'long' };
    let today = new Date().toLocaleDateString('fa-IR', options as any);
    
    const currentPerson = useAppSelector((state: RootState) => state.auth.user);
    return (
        <div className='p-2 bg-purple-800 shadow-inner text-white'>
            <div>{today} {new Date().toLocaleDateString('fa-IR')}</div>
            <div>
                {isAuthentacted && (currentPerson?.firstName ? `${currentPerson?.firstName} ${currentPerson?.lastName} عزیز خوش آمدید` : '')}
            </div>
        </div>
    )
}

export default Username;