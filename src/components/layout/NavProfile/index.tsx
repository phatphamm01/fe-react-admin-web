import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { connect } from "react-redux";
import {
  EditOutlined,
  SettingOutlined,
  ShopOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "@hook/redux";
import { useNavigate } from "react-router-dom";

const menuItem = [
  {
    title: "Edit Profile",
    icon: EditOutlined,
    path: "/",
  },

  {
    title: "Account Setting",
    icon: SettingOutlined,
    path: "/",
  },
  {
    title: "Billing",
    icon: ShopOutlined,
    path: "/",
  },
  {
    title: "Help Center",
    icon: QuestionCircleOutlined,
    path: "/",
  },
];

export const NavProfile = () => {
  const { user } = useAppSelector((state) => state.userReducers);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    location.reload();
  };

  const profileImg = user.photo || "/img/avatars/thumb-1.jpg";
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <Avatar size={45} src={profileImg} />
          <div className="pl-3">
            <h4 className="mb-0">{user.fname + " " + user.lname}</h4>
            <span>Admin</span>
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          <Menu.Item key={menuItem.length + 1} onClick={(e) => signOut()}>
            <span>
              <LogoutOutlined className="mr-3" />
              <span className="font-weight-normal">Sign Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item key="profile">
          <Avatar src={profileImg} />
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
};

export default NavProfile;
