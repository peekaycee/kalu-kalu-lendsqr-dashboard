import React, { useMemo, useState, useEffect } from 'react';
import {
  useTable,
  usePagination,
  useSortBy,
  Column,
  TableInstance,
  TableState,
  UsePaginationInstanceProps,
  UsePaginationState,
  Row,
} from 'react-table';
import { COLUMNS } from '../data/columns';
import MOCK_DATA from '../data/MOCK_DATA.json';
import './_Table.scss';
import Next from '../../assets/images/next.png';
import Previous from '../../assets/images/previous.png';
import FilterButton from '../../assets/images/filter-results-button.png';
import Ellipsis from '../../assets/images/vertical-ellipsis.png';

// Define the data type for your table rows
type Data = {
  ORGANIZATION: string;
  USERNAME: string;
  EMAIL: string;
  PHONE_NUMBER: string;
  DATE_JOINED: string;
  STATUS: string;
  ellipsis?: string;
};

// Extend columns to include ellipsis column
const EXTENDED_COLUMNS: Column<Data>[] = [
  ...COLUMNS,
  {
    Header: '',
    accessor: 'ellipsis' as keyof Data,
    Cell: () => <img src={Ellipsis} alt='Ellipsis' />,
  },
];

// Function to render pagination
const renderPagination = (
  pageOptions: number[],
  activePage: number,
  gotoPage: (pageIndex: number) => void
) => {
  const totalPages = pageOptions.length;
  const maxPagesToShow = 3;
  const pages: JSX.Element[] = [];

  if (totalPages <= maxPagesToShow + 2) {
    // Show all pages if total pages are small
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span
          key={i}
          className={`page-number ${activePage === i ? 'active' : ''}`}
          onClick={() => gotoPage(i - 1)}>
          {i}
        </span>
      );
    }
  } else {
    // Show the first page, pages around the active page, and the last page
    pages.push(
      <span
        key={1}
        className={`page-number ${activePage === 1 ? 'active' : ''}`}
        onClick={() => gotoPage(0)}>
        1
      </span>
    );

    if (activePage > 2) {
      pages.push(<span key='ellipsis1'>...</span>);
    }

    const startPage = Math.max(2, activePage - 1);
    const endPage = Math.min(totalPages - 1, activePage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <span
          key={i}
          className={`page-number ${activePage === i ? 'active' : ''}`}
          onClick={() => gotoPage(i - 1)}>
          {i}
        </span>
      );
    }

    if (activePage < totalPages - 1) {
      pages.push(<span key='ellipsis2'>...</span>);
    }

    pages.push(
      <span
        key={totalPages}
        className={`page-number ${activePage === totalPages ? 'active' : ''}`}
        onClick={() => gotoPage(totalPages - 1)}>
        {totalPages}
      </span>
    );
  }

  return pages;
};

const Table: React.FC = () => {
  const columns = useMemo<Column<Data>[]>(() => EXTENDED_COLUMNS, []);
  const data = useMemo<Data[]>(() => MOCK_DATA, []);

  const tableInstance = useTable<Data>(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  ) as TableInstance<Data> & UsePaginationInstanceProps<Data>;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state,
    prepareRow,
    gotoPage,
  } = tableInstance;

  const { pageIndex, pageSize, sortBy } = state as TableState<Data> &
    UsePaginationState<Data> & { sortBy: any };

  const [activePage, setActivePage] = useState(pageIndex + 1);

  useEffect(() => {
    setActivePage(pageIndex + 1);
  }, [pageIndex]);

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'inactive':
        return 'status-inactive';
      case 'pending':
        return 'status-pending';
      case 'blacklisted':
        return 'status-blacklisted';
      default:
        return '';
    }
  };

  return (
    <>
      <div className='table-container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    <div {...column.getSortByToggleProps()}>
                      {column.render('Header')}
                      <img
                        src={FilterButton}
                        alt='Header Icon'
                        className='header-icon'
                      />
                      {sortBy?.[0]?.id === column.id ? (
                        <span>{sortBy[0].desc ? '↓' : '↑'}</span>
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: Row<Data>) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      {cell.column.id === 'STATUS' ? (
                        <span className={getStatusClass(cell.value)}>
                          {cell.render('Cell')}
                        </span>
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='pagination__container'>
        <div className='page__statistics'>
          <span>Showing</span>
          <select
            title='pageSize'
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}>
            {[10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span>Out of {pageOptions.length}</span>
        </div>

        <div className='page__numbers'>
          <button
            type='button'
            onClick={() => previousPage()}
            disabled={!canPreviousPage}>
            <img src={Previous} alt='Previous Button Icon' />
          </button>
          <span className='pagination-pages'>
            {renderPagination(pageOptions, activePage, gotoPage)}
          </span>
          <button
            type='button'
            onClick={() => nextPage()}
            disabled={!canNextPage}>
            <img src={Next} alt='Next Button Icon' />
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
