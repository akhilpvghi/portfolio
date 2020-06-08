import React from 'react'
import  {  useState, useEffect } from "react";
import styled from 'styled-components'
import { useTable, useBlockLayout, useResizeColumns } from 'react-table'
import axios from 'axios';

// import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;
  display: grid;
  overflow: overlay;

  .table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        display: inline-block;
        background: blue;
        width: 10px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action:none;

        &.isResizing {
          background: red;
        }
      }
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    defaultColumn
  },
    useBlockLayout,
    useResizeColumns)

  // Render the UI for your table
  return (
    // <table {...getTableProps()}>
    //   <thead>
    //     {headerGroups.map(headerGroup => (
    //       <tr {...headerGroup.getHeaderGroupProps()}>
    //         {headerGroup.headers.map(column => (
    //           <th {...column.getHeaderProps()}>{column.render('Header')}</th>
    //         ))}
    //       </tr>
    //     ))}
    //   </thead>
    //   <tbody {...getTableBodyProps()}>
    //     {rows.map((row, i) => {
    //       prepareRow(row)
    //       return (
    //         <tr {...row.getRowProps()}>
    //           {row.cells.map(cell => {
    //             return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
    //           })}
    //         </tr>
    //       )
    //     })}
    //   </tbody>
    // </table>
    <div {...getTableProps()} className="table">
      <div>
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps()} className="th">
                {column.render('Header')}
                {/* Use column.getResizerProps to hook up the events correctly */}
                <div
                  {...column.getResizerProps()}
                  className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <div {...row.getRowProps()} className="tr">
              {row.cells.map(cell => {
                return (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function TableCompo(props) {
  const[columns,setColumns] =  useState([]);
    const[data,setData] =  useState([]);

    useEffect(() => {
      axios.get(localStorage.getItem("mainURL")+"/dfpByDate?date="+localStorage.getItem("formCreatedOn"))
      .then((res)=>{
       console.log("url hit from table ",localStorage.getItem("mainURL")+"?data="+localStorage.getItem("formCreatedOn"),"\n",res)
       res.data.map((ele)=>{
         setData((dataRecord)=>[...dataRecord,ele])
       })
   
      })
      .catch((err)=>{
        console.log("err from table----> ",err);
      })
       
     }, [])
  

       useEffect(() => {
       
       if(props.columns.length!==0){
           Object.entries(props.columns).map(([key,val])=>{
            let data={};
               console.log("props props ===>",val);
               data={
                Header: () => (
                    <span>
                     <h4>{val}</h4>
                    </span>
                  ),
                accessor: key,
               }
               setColumns(addHeader=>[...addHeader,data])
           }) 
       }
       
   }, [props.columns])


    
  // const data = React.useMemo(() => makeData(20), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default TableCompo
