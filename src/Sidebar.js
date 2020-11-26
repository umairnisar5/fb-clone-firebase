import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from '@material-ui/icons';


function Sidebar() {
    return <div className="sidebar">
        <SidebarRow src='https://avatars2.githubusercontent.com/u/59221584?s=400&u=fa2672a34b583ad3acf351c1976fc1e3b38795c6&v=4' title="Muhammad Talha" />
        <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 information center" />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Frieds" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Vedios" />
        <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
}

export default Sidebar;