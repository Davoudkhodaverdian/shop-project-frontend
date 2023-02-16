import { useTranslation } from 'react-i18next';
import React from 'react';
import DropdownMenu from './dropdownMenu';


const Profile: React.FC<any> = () => {

    const { t } = useTranslation();
    return (
        <DropdownMenu>
            <div>
                <img className='h-[30px] rounded-full mx-2' src="/images/avatars/Profile-Icon-unknown.jpg" alt="" />
                {/* <img className='h-[30px] rounded-full mx-2' src="/images/avatars/davoudkhodaverdian-avatar.jpg" alt=""/> */}
            </div>
            <div><span>{t('profile')}</span></div>
        </DropdownMenu>
    )
}

export default Profile;
