
import React, { useState,useEffect } from 'react';
import { Row, Col, Card, Pagination, Button, Modal, Spinner } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { Link as RouterLink }  from 'react-router-dom';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import { GlobalFilter } from '../users/GlobalFilter';

function Table({ columns, data, modalOpen }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    globalFilter,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <Row className="mb-3">
        <Col className="d-flex align-items-center">
          Show
          <select
            className="form-control w-auto mx-2"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          entries
        </Col>
        <Col className="d-flex justify-content-end">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <Button variant="success" className="btn-sm btn-round has-ripple ml-2" onClick={modalOpen}>
            
            <RouterLink to='/createindent' style={{'color':'black'}}>
            <i className="feather icon-plus" /> New Indent
            </RouterLink>
          </Button>
        </Col>
      </Row>
      <BTable striped bordered hover responsive {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span className="feather icon-arrow-down text-muted float-right" />
                      ) : (
                        <span className="feather icon-arrow-up text-muted float-right" />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>
      <Row className="justify-content-between">
        <Col>
          <span className="d-flex align-items-center">
            Page{' '}
            <strong>
              {' '}
              {pageIndex + 1} of {pageOptions.length}{' '}
            </strong>{' '}
            | Go to page:{' '}
            <input
              type="number"
              className="form-control ml-2"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '100px' }}
            />
          </span>
        </Col>
        <Col>
          <Pagination className="justify-content-end">
            <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
            <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
            <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
            <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
          </Pagination>
        </Col>
      </Row>
    </>
  );
}

const IndentView = () => {
    const [product , SetProduct]=useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'S no',
        id: 'index',
        accessor: (row, i ) => i + 1 ,
        disableSortBy: true,
        disableFilters: true,
        filterable: false,
      
    },
      {
            Header: 'Indent Id',
            accessor: 'id',
            Cell:({row})=><RouterLink to={`/indent/${row.values.id}`} >{`${row.values.id}`}</RouterLink>
    
      },
  
      {
        Header: 'Business Unit',
        accessor: 'category'
      },
      {
        Header: 'Itemlist',
        accessor: 'pincode'
      },
      {
        Header: 'Priority',
        accessor: 'created_by'
      },
      {
        Header: 'Created Date',
        accessor: 'createdAt'
      },
      {
        Header: 'Status',
        accessor: 'priority',
        Cell:({row})=><Button to={`/${row.values.id}`} >{`${row.values.priority ? '🏏':'✔'}`}</Button>

      },
    
    
    ],
    []
  );

  const data = React.useMemo(() => product, [product]);

  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };
useEffect(()=>{
   function fetchingdata(){
       fetch(`http://192.168.15.121:8080/api/indent/fetchAllIndent`).then(res=>res.json()).then(d=>SetProduct(d.state))
    }
    fetchingdata()
},[]);

  return (
    <React.Fragment className='container'>
      <Row > 
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Indent List</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table columns={columns} data={data} modalOpen={openHandler} />
            </Card.Body>
          </Card>
          
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default IndentView;
