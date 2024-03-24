import { ChevronDown, File, Flag, Info, SquareMenu, TriangleAlert } from "lucide-react";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "./ui/label";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DetailChart from "./DetailChart";
import DetailTable from "./DetailTable";

type DetailProps = {
	selectedData: { id: string; name: string };
};

const Details = ({ selectedData }: DetailProps) => {
	return (
		<div className="h-full w-[226vw] lg:w-full">
			<div className="flex mt-5 w-full lg:w-full gap-6 border-b-4 border-b-darkbackground pb-2">
				<div className="flex gap-3 ml-12 pr-16 text-sm">
					<TriangleAlert color="yellow" size={15} />
					{selectedData.name}
				</div>
				<div className="border border-fadedBackground -mt-3"></div>
				<div className="px-4 text-sm">Stack Id: {selectedData.id}</div>
				<div className="pr-8">
					<SquareMenu className="-mt-1 text-cyan-400" size={16} />
				</div>
				<div className="flex gap-20 -mt-4 p-1 bg-fadedBackground rounded-lg pr-20">
					<div>
						<p className="text-sm text-slate-600">FORECAST</p>
						<p>89%</p>
					</div>
					<div>
						<p className="text-sm text-slate-600">FORECAST</p>
						<p>80%</p>
					</div>
				</div>
				<div className="-mt-2">
					<Flag size={18} />
				</div>
			</div>
			<div className="ml-12 my-3 flex gap-5">
				<File size={18} />
				<p className="text-sm">SPECIAL REQUIREMENTS</p>
				<div className="flex items-center space-x-2">
					<Switch id="include" className="data-[state=unchecked]:bg-white text-sm" />
					<Label htmlFor="include" className="text-sm">
						INCLUDE
					</Label>
				</div>
				<div className="border border-fadedBackground"></div>
				<ChevronDown size={15} />
			</div>
			<div className="bg-darkbackground h-[70%]">
				<div className="p-4 ml-12 flex gap-6">
					<p className="text-sm">Forecast Horizon</p>
					<DropdownMenu>
						<DropdownMenuTrigger className="outline-none text-sm">Latest Issue</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Previous Issue</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<Info size={20} />
					<div className="border border-fadedBackground"></div>
					<div className="flex items-center space-x-2">
						<Switch id="confidence" className="data-[state=unchecked]:bg-white" />
						<Label htmlFor="confidence" className="text-sm">
							SHOW CONFIDENCE INTERVAL
						</Label>
					</div>
				</div>
				<div className="p-4 w-full h-full">
					<DetailChart selectedData={selectedData} />
				</div>
			</div>
			<div className="h-[30%]">
				<DetailTable selectedData={selectedData} />
			</div>
		</div>
	);
};

export default Details;
