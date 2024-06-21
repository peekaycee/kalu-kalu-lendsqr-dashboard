import React, { useState } from 'react';
import './_Header.scss';
import Logo from '../logo/logo';
import Input from '../../common/Input';
import {
  Vector,
  Notification,
  ProfileImage,
  DropDownButton,
} from '../../../assets/images';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section>
      <header>
        <nav className='logo'>
          <Logo />
        </nav>
        <nav className='search'>
          <Input
            className='search__input'
            type='text'
            value={searchTerm}
            handleChange={handleSearchChange}
            placeholder='Search for anything'
          />
          <span>
            <img src={Vector} className='search__button' alt='Search Button' />
          </span>
        </nav>
        <nav className='navs'>
          <span className='docs__nav'>
            <p>Docs</p>
          </span>
          <span className='notify__nav'>
            <img src={Notification} alt='Notification Bell' />
          </span>
          <span className='profile__nav'>
            <img src={ProfileImage} alt='avatar' />
          </span>
          <span className='name__nav'>
            <p>Adedeji</p>
          </span>
          <span className='dropdown__nav'>
            <img src={DropDownButton} alt='Dropdown Button' />
          </span>
        </nav>
      </header>
    </section>
  );
};

export default Header;