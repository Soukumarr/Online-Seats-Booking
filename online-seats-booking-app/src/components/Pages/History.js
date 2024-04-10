import React from 'react';
//import './index.css';
import styles from './SigninForm.module.css';
import Navigationbar from './Navigationbar';

import { Table } from 'antd';
const columns = [

    {
        title: 'Bookingid',
        dataIndex: 'bookingid',
        sorter: (a, b) => a.bookingid - b.bookingid,
      },
  {
    title: 'Location',
    dataIndex: 'location',
    filters: [
      {
        text: 'Bangaluru',
        value: 'Bengaluru',
      },
      {
        text: 'Jaipur',
        value: 'Jaipur',
      },
      {
        text: 'Pune',
        value: 'Pune',
      },
      
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.location.includes(value),
    width: '30%',
  },
  {
    title: 'Floor',
    dataIndex: 'floor',
    filters: [
      {
        text: '1',
        value: '1',
      },
      {
        text: '2',
        value: '2',
      },
      {
        text: '3',
        value: '3',
      },
      
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.floor.toString().includes(value),
    width: '30%',
  },
  {
    title: 'Startdate',
    dataIndex: 'startdate',
    //sorter: (a, b) => a.age - b.age,
    filters: [
      
      {
        text: 'Year',
        value: 'Year',
        children: [
          {
            text: '2024',
            value: '2024',
          },
          {
            text: '2023',
            value: '2023',
          },
        ],
      },
      
    ],
    filterMode: 'tree',
    filterSearch: true,
    
    onFilter: (value, record) => record.startdate.includes(value),
    width: '10%',
    
  },
  {
    title: 'Enddate',
    dataIndex: 'enddate',
    //sorter: (a, b) => a.age - b.age,
    filters: [
      
      {
        text: 'Year',
        value: 'Year',
        children: [
          {
            text: '2024',
            value: '2024',
          },
          {
            text: '2023',
            value: '2023',
          },
        ],
      },
      
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.enddate.includes(value),
    width: '10%',
    
  },
  {
    title: 'Status',
    dataIndex: 'status',
    
  },
];
const data = [
  {
    key: '1',
    bookingid:'1',
    location: 'Bangaluru',
    floor: 1,
    startdate:'2023-05-06',
    enddate:'2023-05-07',
    status:'booked'
  },
  {
    key: '2',
    bookingid:'2',
    location: 'Pune',
    floor: 2,
    startdate:'2023-07-06',
    enddate:'2023-07-09',
    status:'booked'
  },
  {
    key: '3',
    bookingid:'3',
    location: 'Jaipur',
    floor: 3,
    startdate:'2023-05-23',
    enddate:'2023-05-30',
    status:'booked'
  },
  {
    key: '4',
    bookingid:'4',
    location: 'Jaipur',
    floor: 1,
    startdate:'2024-01-23',
    enddate:'2024-01-30',
    status:'booked'
  },
  
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Bookings = () => 
{
  return(
    
    
    <div className={styles.userprofile}>
          <header className={styles.header}>
            <br></br>
            <div> 
            <h1>History</h1> 
            </div>
            
            
          </header>
          
          <Navigationbar/>
      
        <Table columns={columns} dataSource={data} onChange={onChange} />;
        </div>
        
   );

}
export default Bookings;