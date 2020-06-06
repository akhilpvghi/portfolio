import ReactTable from 'react-table-6';
import React,  {  useState, useEffect } from "react";
import 'react-table-6/react-table.css';
import axios from 'axios';

const Table =(props)=>{
    const[columns,setColumns] =  useState([]);
    const[data,setData] =  useState([]);

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

   
    
        // const data = [{
        //   name: 'Tanner Linsley',
        //   age: 26,
        //   friend: {
        //     name: 'Jason Maurer',
        //     age: 23,
        //   }
        // }]
       
        // const columns = [{}];
       
        let content = (
            // <div className="a">ak</div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={5}
        />
        )

        return content;
      
      

}
 
export default Table;