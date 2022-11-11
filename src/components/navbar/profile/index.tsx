import MaterialUIMenu from './dropdownMenu/materialUIMenu';
import { useTranslation } from 'react-i18next';
import React from 'react';

const Profile: React.FC<any> = () => {

    const { t } = useTranslation();
    return (
        <MaterialUIMenu>
            <div>
                <img className='h-[30px] rounded-full mx-2' src="/images/avatars/Profile-Icon-unknown.jpg" alt="" />
                {/* <img className='h-[30px] rounded-full mx-2' src="/images/avatars/davoudkhodaverdian-avatar.jpg" alt="" /> */}
            </div>
            <div><span>{t('profile')}</span></div>
        </MaterialUIMenu>
    );
}

export default Profile;
