import React, { FC } from 'react';
import TopNavbar from '../components/common/TopNavbar';
import AsideBar from '../components/common/AsideBar';

interface ProfileLayoutProps {
  topNavbar: React.ReactNode;
  asideBar: React.ReactNode;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({ topNavbar, asideBar }: ProfileLayoutProps) => {
  return (
    <main className='bg-gray-200 flex flex-row     '>
      <div className=' md:w-fit w-0 '>
        <div>{topNavbar}</div>
        <div>{asideBar}</div>
      </div>
    </main>
  );
};

export default ProfileLayout;
