"use client";

import React from "react";
import cn from "classnames";
import { DoubleArrowLeftIcon, DoubleArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { ListFilter } from "lucide-react";
import SideBarContent from "./SideBarContent";
import { ScrollArea } from "./ui/scroll-area";

export type dashboardObj = {
	id: string;
	name: string;
};

type Props = {
	collapsed: boolean;
	setCollapsed(collapsed: boolean): void;
	dashboardData: dashboardObj[];
	selectedData: {};
	setSelectedData(selectedData: any): void;
};

const badgeData = [0, 1, 2, 3, 4];
const Sidebar = ({
	collapsed,
	setCollapsed,
	dashboardData,
	selectedData,
	setSelectedData,
}: Props) => {
	const router = useRouter();
	const Icon = collapsed ? DoubleArrowRightIcon : DoubleArrowLeftIcon;
	return (
		<ScrollArea>
			<div
				className={cn({
					"text-zinc-50 z-20 shadow-2xl border-black border-solid": true,
					// "w-96": !collapsed,
				})}>
				<div
					className={cn({
						"flex flex-col justify-between border-b-slate-300": true,
					})}>
					<div
						className={cn({
							"flex items-center border-b": true,
							"p-1 justify-between": !collapsed,
							"justify-center": collapsed,
						})}>
						{!collapsed && (
							<div className="flex flex-col color gap-2">
								<button
									className="hover:bg-indigo-800 w-10 h-10 rounded-full grid place-content-center"
									onClick={() => router.push("/")}>
									<ArrowLeftIcon />
								</button>
								<div className="flex gap-2 ml-3">
									{badgeData.map((item, ind) => (
										<Badge key={ind} className={`${ind === 2 ? "bg-cyan-600" : "bg-green-800"}`} />
									))}
								</div>
								<h2 className="ml-3">Sample Stack</h2>
								<div>
									<Tabs defaultValue="backlog" className="w-[250px]">
										<TabsList className="w-full bg-transparent">
											<TabsTrigger className="text-xs data-[state=active]:text-cyan-400" value="backlog">
												BACKLOG (238)
											</TabsTrigger>
											<TabsTrigger className="text-xs data-[state=active]:text-cyan-400" value="pending">
												PENDING (0)
											</TabsTrigger>
											<TabsTrigger className="text-xs data-[state=active]:text-cyan-400" value="finalSignOff">
												FINAL SIGN-OFF (0)
											</TabsTrigger>
										</TabsList>
										{/* <TabsContent value="account">Make changes to your account here.</TabsContent>
										<TabsContent value="password">Change your password here.</TabsContent> */}
									</Tabs>
								</div>
							</div>
						)}
						<button
							className={cn({
								"grid place-content-center": true,
								"hover:bg-indigo-800 ": true,
								"w-10 h-10 rounded-full ": true,
							})}
							onClick={() => setCollapsed(!collapsed)}>
							<Icon className="w-5 h-5" />
						</button>
					</div>
				</div>
				<div className={cn({ "": !collapsed })}>
					<Button variant="ghost" className="text-cyan-400">
						{collapsed ? "" : "Filter"}
						<ListFilter className="ml-2 w-5 h-5" />
					</Button>
				</div>
				<div className="p-2">
					<SideBarContent
						dashboardData={dashboardData}
						selectedData={selectedData}
						setSelectedData={setSelectedData}
						collapsed={collapsed}
					/>
				</div>
			</div>
		</ScrollArea>
	);
};
export default Sidebar;
