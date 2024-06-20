import React from 'react';
import { Lendsqr, Union } from '../../../assets/images';
import './logo.scss'

const logo = () => {
  return (
    <div className='logo'>
      <img src={Union} className='union' alt='Curly Shape' />
      <img src={Lendsqr} className='lendsqr' alt='Lendsqr Sign' />
    </div>
  );
};

export default logo;
