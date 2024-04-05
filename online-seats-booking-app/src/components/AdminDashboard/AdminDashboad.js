import React, { useState } from "react";
import {Grid} from "../AdminPage/Grid.js";
import { Space, Table, Tag, Menu, Layout } from "antd";
const { Column, ColumnGroup } = Table;
const { Sider, Content } = Layout;


const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Location",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Floor number",
    dataIndex: "floor",
    key: "floor",
  },
  {
    title: "Room Number",
    dataIndex: "room",
    key: "room",
  },
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
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    floor: 1,
    room: 101,
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    floor: 2,
    room: 201,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    floor: 3,
    room: 301,
  },
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
