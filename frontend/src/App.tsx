import { useState } from 'react';

//? react-router-dom //
import { Routes, Route } from 'react-router-dom';

//? pages //

import { RegisterPage, PasswordPage, LoginPage, ProfilePage, LandingPage, HomePage, ErrorPage } from './page/pageIndex';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/password-reset' element={<PasswordPage />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
