import React from "react";
import { dashboardObj } from "./SideBar";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type SideBarContentProps = {
	dashboardData: dashboardObj[];
	selectedData: any;
	setSelectedData(selectedData: any): void;
	collapsed: boolean;
};

const SideBarContent = ({
	dashboardData,
	selectedData,
	setSelectedData,
	collapsed,
}: SideBarContentProps) => {
	return (
		<div>
			{dashboardData?.map(item => {
				if (collapsed) {
					return (
						<div
							key={item.id}
							className="-1 pb-8 border-b-2 mt-1 hover:bg-slate-800 cursor-pointer rounded-md">
							<Mail className="ml-2 text-cyan-400" />
						</div>
					);
				}
				return (
					<div
						key={item.id}
						className={cn({
							"p-1 pb-5 border-b-2 mt-1 hover:bg-slate-800 cursor-pointer rounded-md": true,
							"bg-selectedDiv": item.id === selectedData?.id,
						})}
						onClick={() => {
							setSelectedData({ ...item });
						}}>
						<div className="flex justify-between items-center">
							<div className="flex gap-2 items-center">
								<Checkbox />
								<Button size={"sm"}>F'CAST STAB.</Button>
								<Button size={"sm"}>F'CAST ACC.</Button>
							</div>
							<Mail className="text-cyan-400" />
						</div>
						{item.name}
					</div>
				);
			})}
		</div>
	);
};

export default SideBarContent;
