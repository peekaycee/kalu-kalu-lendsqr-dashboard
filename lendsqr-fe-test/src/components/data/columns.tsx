import { Column } from 'react-table';

type Data = {
  ORGANIZATION: string;
  USERNAME: string;
  EMAIL: string;
  PHONE_NUMBER: string;
  DATE_JOINED: string; 
  STATUS: string;
};

export const COLUMNS: Column<Data>[] = [
  {
    Header: 'ORGANIZATION',
    accessor: 'ORGANIZATION',
  },
  {
    Header: 'USERNAME',
    accessor: 'USERNAME',
  },
  {
    Header: 'EMAIL',
    accessor: 'EMAIL',
  },
  {
    Header: 'PHONE NUMBER',
    accessor: 'PHONE_NUMBER',
  },
  {
    Header: 'DATE JOINED',
    accessor: 'DATE_JOINED',
  },
  {
    Header: 'STATUS',
    accessor: 'STATUS',
  },
];