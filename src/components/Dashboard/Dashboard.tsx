import React from 'react';
import './_Dashboard.scss';
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
} from '../../assets/images';
import Table from '../Table/Table';

const DashboardResults = () => {
  return (
    <section className='dashboard__results'>
      <h1 className='title'>Users</h1>
      <div className='user__cards'>
        <div className='user__card'>
          <div className='icon1'>
            <div className='icon__image'>
              <img src={Icon1} alt='An Icon' />
            </div>
          </div>
          <div className='text1'>
            <p>USERS</p>
          </div>
          <div className='value'>
            <p>2,453</p>
          </div>
        </div>
        <div className='user__card'>
          <div className='icon2'>
            <div className='icon__image'>
              <img src={Icon2} alt='An Icon' />
            </div>
          </div>
          <div className='text2'>
            <p>ACTIVE USERS</p>
          </div>
          <div className='value'>
            <p>2,453</p>
          </div>
        </div>
        <div className='user__card'>
          <div className='icon3'>
            <div className='icon__image'>
              <img src={Icon3} alt='An Icon' />
            </div>
          </div>
          <div className='text3'>
            <p>USERS WITH LOANS</p>
          </div>
          <div className='value'>
            <p>12,453</p>
          </div>
        </div>
        <div className='user__card'>
          <div className='icon4'>
            <div className='icon__image'>
              <img src={Icon4} alt='An Icon' />
            </div>
          </div>
          <div className='text4'>
            <p>USERS WITH SAVINGS</p>
          </div>
          <div className='value'>
            <p>102,453</p>
          </div>
        </div>
      </div>
      <div className='result__table'>
          <Table />
      </div>
    </section>
  );
};

const Dashboard = () => {
  return (
    <section>
      <DashboardResults />
    </section>
  );
};

export default Dashboard;
