import React from 'react'
import UserCard from '../components/User/UserCard';
import UserList from '../components/User/UserList';
import Dashboard from '../components/Dashboard/Dashboard';

const UserPage = () => {
  return (
    <div>
      <Dashboard />
       <UserCard />
       <UserList />
    </div>
  )
}

export default UserPage
