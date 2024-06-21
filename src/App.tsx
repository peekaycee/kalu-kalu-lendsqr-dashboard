import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import UserDetailsPage from './pages/UserDetailsPage';
import './App.css';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={
          <MainLayout value={true}>
            <DashboardPage />
          </MainLayout>
        } />
        <Route path='/users' element={
          <MainLayout value={false}>
            <UserPage />
          </MainLayout>
        } />
        <Route path='/users/:id' element={
          <MainLayout value={false}>
            <UserDetailsPage />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;