"use client";

import Sidebar from "@/components/SideBar";
import classNames from "classnames";
import { Menu } from "lucide-react";
import React, { PropsWithChildren, useState } from "react";
import dashboardMockData from "@/constant/dashboardData.json";
import Details from "@/components/Details";

const page = () => {
	const [collapsed, setSidebarCollapsed] = useState<boolean>(false);
	const [dashboardData, setDashboardData] = useState(dashboardMockData);
	const [selectedData, setSelectedData] = useState<{ id: string; name: string }>(
		dashboardMockData[0]
	);

	return (
		<div
			className={classNames({
				// 👇 use grid layout
				"grid h-screen w-screen": true,
				// 👇 toggle the width of the sidebar depending on the state
				"grid-cols-sidebar": !collapsed,
				"grid-cols-sidebar-collapsed": collapsed,
				// 👇 transition animation classes
				"transition-[grid-template-columns] duration-300 ease-in-out": true,
			})}>
			<Sidebar
				collapsed={collapsed}
				setCollapsed={setSidebarCollapsed}
				dashboardData={dashboardData}
				selectedData={selectedData}
				setSelectedData={setSelectedData}
			/>
			<div className="h-screen w-screen lg:w-full overflow-hidden overflow-x-auto">
				<Details selectedData={selectedData} />
			</div>
		</div>
	);
};

export default page;
