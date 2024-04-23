import React, { useEffect, useState } from 'react';
//import './index.css';
import styles from './SigninForm.module.css';
import Navigationbar from './Navigationbar';

import { Table } from 'antd';
import BookingService from '../util/BookingService';
import { useParams } from 'react-router';
import { jwtDecode } from 'jwt-decode';
const columns = [

  {
    title: 'BookingId',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'UserId',
    dataIndex: 'userId',
    // filters: [
    //   {
    //     text: 'Bangaluru',
    //     value: 'Bengaluru',
    //   },
    //   {
    //     text: 'Jaipur',
    //     value: 'Jaipur',
    //   },
    //   {
    //     text: 'Pune',
    //     value: 'Pune',
    //   },

    // ],
    // filterMode: 'tree',
    // filterSearch: true,
    // onFilter: (value, record) => record.location.includes(value),
    width: '30%',
  },
  {
    title: 'SeatId',
    dataIndex: 'seatId',
    // filters: [
    //   {
    //     text: '1',
    //     value: '1',
    //   },
    //   {
    //     text: '2',
    //     value: '2',
    //   },
    //   {
    //     text: '3',
    //     value: '3',
    //   },

    // ],
    // filterMode: 'tree',
    // filterSearch: true,
    // onFilter: (value, record) => record.floor.toString().includes(value),
    width: '30%',
  },
  {
    title: 'StartTime',
    dataIndex: 'startTime',
    //sorter: (a, b) => a.age - b.age,
    // filters: [

    //   {
    //     text: 'Year',
    //     value: 'Year',
    //     children: [
    //       {
    //         text: '2024',
    //         value: '2024',
    //       },
    //       {
    //         text: '2023',
    //         value: '2023',
    //       },
    //     ],
    //   },

    // ],
    // filterMode: 'tree',
    // filterSearch: true,

    // onFilter: (value, record) => record.startdate.includes(value),
    width: '10%',

  },
  {
    title: 'EndTime',
    dataIndex: 'endTime',
    //sorter: (a, b) => a.age - b.age,
    // filters: [

    //   {
    //     text: 'Year',
    //     value: 'Year',
    //     children: [
    //       {
    //         text: '2024',
    //         value: '2024',
    //       },
    //       {
    //         text: '2023',
    //         value: '2023',
    //       },
    //     ],
    //   },

    // ],
    // filterMode: 'tree',
    // filterSearch: true,
    // onFilter: (value, record) => record.enddate.includes(value),
    width: '10%',

  },
  {
    title: 'Date',
    dataIndex: 'date',

  },
  {
    title: 'Status',
    dataIndex: 'status',

  },
];



const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Bookings = () => {

  const [data , setData] = useState([]);
  const token = localStorage.getItem("jwtToken");

  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id || [];

  useEffect(() => {
    BookingService.getBookingsHistory(userId).then(
      (response) => {
        setData(
          response.data.map(
            (booking)=>{
              return booking
            }
          )
        )
        console.log(data)
      }
    ).catch(e=>console.log(e))
  }, []); // Empty dependency array: run only once after mount


  return (


    <div className={styles.userprofile}>
      <header className={styles.header}>
        <br></br>
        <div>
          <h1>History</h1>
        </div>


      </header>

      <Navigationbar />

      <Table columns={columns} dataSource={data} onChange={onChange} />;
    </div>

  );

}
export default Bookings;