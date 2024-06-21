import React from 'react';
import './BorrowerNav.scss';
import {
  arrowDown,
  auditFeesIcon,
  DashboardIcon,
  DecisionIcon,
  FeesIcon,
  GuarantorsIcon,
  KarmaIcon,
  LoanProductIcon,
  LoanRequestIcon,
  LoansIcon,
  PreferencesIcon,
  PricingIcon,
  ReportIcon,
  SavingProductIcon,
  SavingsIcon,
  ServiceAccountIcon,
  ServicesIcon,
  SettlementIcon,
  SwitchIcon,
  TransactionIcon,
  UsersIcon,
  WhitelistIcon,
} from '../../../assets/images';

const BorrowerNav = () => {
  return (
    <section className='borrower__container'>
      <div className='switch__content'>
        <div className='switch'>
          <nav>
            <img src={SwitchIcon} alt='Switch Icon' />
          </nav>
          <p>Switch Organization</p>
          <nav>
            <img src={arrowDown} alt='Dropdown Icon' className='dd' />
          </nav>
        </div>
        <nav className='dashboard'>
          <nav>
            <img src={DashboardIcon} alt='Dashboard Icon' />
          </nav>
          <p>Dashboard</p>
        </nav>
      </div>

      <div className='borrower__details'>
        <p className='heading'>CUSTOMERS</p>
        <nav className='active'>
          <img src={UsersIcon} alt='Users Icon' />
          <p>Users</p>
        </nav>
        <nav>
          <img src={GuarantorsIcon} alt='Guarantors Icon' />
          <p>Guarantors</p>
        </nav>
        <nav>
          <img src={LoansIcon} alt='Loans Icon' />
          <p>Loans</p>
        </nav>
        <nav>
          <img src={DecisionIcon} alt='Decision Model Icon' />
          <p>Decision Models</p>
        </nav>
        <nav>
          <img src={SavingsIcon} alt='Savings Icon' />
          <p>Savings</p>
        </nav>
        <nav>
          <img src={LoanRequestIcon} alt='Loan Requests Icon' />
          <p>Loan Requests</p>
        </nav>
        <nav>
          <img src={WhitelistIcon} alt='Whitelist Icon' />
          <p>WhiteList</p>
        </nav>
        <nav>
          <img src={KarmaIcon} alt='Karma Icon' />
          <p>Karma</p>
        </nav>
      </div>

      <div className='borrower__details'>
        <p className='heading'>BUSINESSES</p>
        <nav>
          <img src={SwitchIcon} alt='Organization Icon' />
          <p>Organization</p>
        </nav>
        <nav>
          <img src={LoanProductIcon} alt='Loan Products Icon' />
          <p>Loan Products</p>
        </nav>
        <nav>
          <img src={SavingProductIcon} alt='Savings Products Icon' />
          <p>Savings Products</p>
        </nav>
        <nav>
          <img src={FeesIcon} alt='Fees and Charges Icon' />
          <p className='increase'>Fees and Charges</p>
        </nav>
        <nav>
          <img src={TransactionIcon} alt='Transactions Icon' />
          <p>Transactions</p>
        </nav>
        <nav>
          <img src={ServicesIcon} alt='Services Icon' />
          <p>Services</p>
        </nav>
        <nav>
          <img src={ServiceAccountIcon} alt='Service Account Icon' />
          <p>Service Account</p>
        </nav>
        <nav>
          <img src={SettlementIcon} alt='Settlements Icon' />
          <p>Settlements</p>
        </nav>
        <nav>
          <img src={ReportIcon} alt='Reports Icon' />
          <p>Reports</p>
        </nav>
      </div>

      <div className='borrower__details'>
        <p className='heading'>SETTINGS</p>
        <nav>
          <img src={PreferencesIcon} alt='Preferences Icon' />
          <p>Preferences</p>
        </nav>
        <nav>
          <img src={PricingIcon} alt='Fees and Pricing Icon' />
          <p>Fees and Pricing</p>
        </nav>
        <nav>
          <img src={auditFeesIcon} alt='Audit Log Icon' />
          <p>Audit Log</p>
        </nav>
      </div>
    </section>
  );
};

export default BorrowerNav;
