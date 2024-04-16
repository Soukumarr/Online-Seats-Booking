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
  },
  {
    title: "Booking ID",
    dataIndex: "bookingId",
    key: "bookingId",
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    key: "endTime",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Office",
    dataIndex: "officename",
    key: "officename",
  },
  {
    title: "Seat ID",
    dataIndex: "seatId",
    key: "seatId",
  }
 
 
  
];
 
const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [data, setData] = useState([]); // Add a state to store the fetched data
 
  useEffect(() => {
    // Fetch the data when the component mounts
    axios.get('http://localhost:8080/api/booking/dashboard')
      .then(response => {
        // When the data is fetched successfully, update the state
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
          <Table columns={columns} dataSource={data} />
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