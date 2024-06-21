import React, { ReactNode } from 'react';
import Header from '../components/constants/Header/Header';
import './_MainLayout.scss';
import BorrowerNav from '../components/constants/BorrowerNav/BorrowerNav';

type MainLayoutProps = {
  value?: boolean; 
  children: ReactNode; 
};

const MainLayout = ({ value, children }: MainLayoutProps) => {
  return (
    <main>
      <Header />
      <section className='dashboard__layout-container'>
          <BorrowerNav />
          {children}
      </section>
    </main>
  );
};

export default MainLayout;