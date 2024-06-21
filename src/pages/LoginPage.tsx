import React from 'react';
import '../App.css';
import LoginForm from '../components/Login/LoginForm';
import { LoginPageImage } from '../assets/images';
import Logo from '../components/constants/logo/logo';

const LoginPage = () => {
  return (
    <div>
      <section className='login__page-container'>
        <div className='login__page-image'>
          <Logo />
          <div className='login__image'>
            <img src={LoginPageImage} className='barner' alt='' />
          </div>
        </div>
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
