import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import axios to make HTTP requests
import {Grid} from "../AdminPage/Grid.js";
import { Table, Menu, Layout } from "antd";
const { Sider, Content } = Layout;
 
 
const columns = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    render: (text) => <a>{text}</a>,
    onFilter: (value, record) => record.username.indexOf(value) === 0,  
    sorter: (a, b) => a.username.length - b.username.length,
  },
  {
    title: "Booking ID",
    dataIndex: "bookingId",
    key: "bookingId",
    sorter: (a, b) => a.bookingId - b.bookingId,
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
    sorter: (a, b) => new Date(a.startTime) - new Date(b.startTime),
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    key: "endTime",
    sorter: (a, b) => new Date(a.endTime) - new Date(b.endTime),
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    onFilter: (value, record) => record.location.indexOf(value) === 0,  
    sorter: (a, b) => a.location.length - b.location.length,
  },
  {
    title: "Office",
    dataIndex: "officename",
    key: "officename",
    onFilter: (value, record) => record.officename.indexOf(value) === 0,  
    sorter: (a, b) => a.officename.length - b.officename.length,
  },
  {
    title: "Seat ID",
    dataIndex: "seatId",
    key: "seatId",
    sorter: (a, b) => a.seatId - b.seatId,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => <a>{text}</a>,
    onFilter: (value, record) => record.status.indexOf(value) === 0,  
    sorter: (a, b) => a.status.length - b.status.length,
  }
 
 
  
];
function onChange(pagination, filters, sorter) {  console.log('params', pagination, filters, sorter);}
 
const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("create_update");
  const [data, setData] = useState([]); // Add a state to store the fetched data
 
  useEffect(() => {
    // Fetch the data when the component mounts
    axios.get('http://localhost:8080/api/booking/dashboard')
      .then(response => {
        // When the data is fetched successfully, update the state
        console.log( "STATUS : " + JSON.stringify(response.data.at(0)))
        setData(response.data);
      })
      .catch(error => {
        // If there's an error, log it
        console.error('There was an error fetching the data!', error);
      });
  }, []);
 
  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };
 
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[selectedMenu]}
          mode="vertical"
        >
          <Menu.Item key="dashboard">Dashboard</Menu.Item>
          <Menu.Item key="create_update">
            Office Locations
          </Menu.Item>
          <Menu.Item key="users">Users Info</Menu.Item>
        </Menu>
      </Sider>
      <Content>
        {selectedMenu === "users" && (
          <Table columns={columns} dataSource={data} onChange={onChange}/>
        )}
        {selectedMenu === "dashboard" && <div>Dashboard content goes here</div>}
        {selectedMenu === "create_update" && (
          <div><Grid></Grid></div>
        )}
      </Content>
    </Layout>
  );
};
 
export default AdminDashboard;