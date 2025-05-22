import React from 'react';
import DropdownMenu from './dropdownMenu';


const Profile: React.FC<any> = () => {

  
    return (
        <DropdownMenu>
            <div>
                <img className='h-[30px] rounded-full mx-2' src="/images/avatars/Profile-Icon-unknown.jpg" alt="" />
                {/* <img className='h-[30px] rounded-full mx-2' src="/images/avatars/davoudkhodaverdian-avatar.jpg" alt=""/> */}
            </div>
            <div><span>پروفایل</span></div>
        </DropdownMenu>
    )
}

export default Profile;
