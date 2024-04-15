import React, { useState } from "react";
import {Grid} from "../AdminPage/Grid.js";
import { Space, Table, Tag, Menu, Layout } from "antd";
const { Column, ColumnGroup } = Table;
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
    dataIndex: "bookingid",
    key: "bookingid",
  },
  {
    title: "Start Time",
    dataIndex: "starttime",
    key: "starttime",
  },
  {
    title: "End Time",
    dataIndex: "endtime",
    key: "endtime",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Office",
    dataIndex: "office",
    key: "office",
  },
  {
    title: "Seat ID",
    dataIndex: "seatid",
    key: "seatid",
  },
  {
    title: "Floor",
    dataIndex: "floor",
    key: "floor",
  },
,
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <button
  //         style={{
  //           backgroundColor: "blue",
  //           color: "white",
  //           borderRadius: "5px",
  //           fontSize: "12px",
  //           padding: "6px",
  //         }}
  //       >
  //         Swap Request
  //       </button>
  //       <button
  //         style={{
  //           backgroundColor: "blue",
  //           color: "white",
  //           borderRadius: "5px",
  //           fontSize: "12px",
  //           padding: "6px",
  //         }}
  //       >
  //         Accept Booking
  //       </button>
  //     </Space>
  //   ),
  // },
];
const data = [
  {
    key: "1",
    username: "John Doe",
    bookingid: "B001",
    starttime: "10:00 AM",
    endtime: "12:00 PM",
    location: "New York",
    office: "Office 1",
    seatid: "S001",
    floor: "1",
  },
  {
    key: "2",
    username: "Jane Doe",
    bookingid: "B002",
    starttime: "1:00 PM",
    endtime: "3:00 PM",
    location: "London",
    office: "Office 2",
    seatid: "S002",
    floor: "2",
  },
  // Add more objects here for more rows in the table
];
const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

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
