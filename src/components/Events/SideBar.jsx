import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
	return (
		<div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">
			<SideBarIcon icon={<FaFire size="28" />}  text="Home"/>
			<SideBarIcon icon={<BsPlus size="32" />} text="Explore" />
			<SideBarIcon icon={<BsFillLightningFill size="20" />} text="Saved" />
			<SideBarIcon icon={<FaPoo size="20" />} text="Create Events" />
		</div>
	);
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
	<div className="sidebar-icon group">
		{icon}
		<span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
	</div>
);

export default SideBar;
