import React from 'react';

import { ProfileLayout } from '../layout/layoutIndex';
import { TopNavbar, AsideBar } from '../components/common/commonIndex';

const ProfilePage = () => {
  return (
    <>
      <ProfileLayout topNavbar={<TopNavbar />} asideBar={<AsideBar />} />
    </>
  );
};

export default ProfilePage;
