"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowDown, ArrowUp } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useRouter } from "next/navigation";

type cityType = {
	city: string;
	foreCastUp: string;
	foreCastDown: string;
	data: { name: string; final: number; ai: number }[];
	data1: { name: string; final: number; ai: number }[];
	id: number
};

const CustomTooltip = ({ payload, label, active }: any) => {
	if (active) {
		return (
			<Card className="rounded-md -mt-10">
				<CardHeader className="p-2">
					<CardTitle className="text-center">{label}</CardTitle>
				</CardHeader>
				<CardContent className="p-4 pt-0">
					<div>
						{payload[0].name}: {payload[0].value}
					</div>
					<div>
						{payload[1].name}: {payload[1].value}
					</div>
				</CardContent>
			</Card>
		);
	}
	return null;
};

const CityWidgets = ({ cities }: { cities: cityType[] }) => {
	const router = useRouter();

	return (
		<ScrollArea className="h-64">
			<div className="flex justify-evenly flex-wrap pt-6">
				{cities.map(item => {
					return (
						<Card
							key={item.id}
							onClick={() => router.push(`dashboardDetail/${item.id}`)}
							className="backdrop-blur-sm bg-transparent w-56 h-56 mb-2 cursor-pointer border-t-blue-700 border-b-teal-500">
							<CardHeader>
								<CardTitle className="text-white">{item.city}</CardTitle>
							</CardHeader>
							<CardContent>
								<div>
									<h6 className="text-white">Forecast</h6>
									<div className="flex h-10 gap-2 justify-center">
										<h1 className="text-white">{item.foreCastUp}</h1>
										<ResponsiveContainer width="60%" height="90%">
											<LineChart width={50} height={25} data={item.data}>
												<Tooltip content={<CustomTooltip />} />
												<Line type="monotone" dataKey="ai" strokeWidth={2} />
												<Line type="monotone" dataKey="final" strokeDasharray="3 4 5 2" />
											</LineChart>
										</ResponsiveContainer>
										<ArrowUp color="green" />
									</div>
								</div>
								<div className="mt-2">
									<h6 className="text-white">Forecast</h6>
									<div className="flex h-10 gap-2 justify-center">
										<h1 className="text-white">{item.foreCastDown}</h1>
										<ResponsiveContainer width="60%" height="90%" className="-mt-1">
											<LineChart width={50} height={25} data={item.data1}>
												<Tooltip content={<CustomTooltip />} />
												<Line type="monotone" dataKey="ai" strokeWidth={2} />
												<Line type="monotone" dataKey="final" strokeDasharray="3 4 5 2" />
											</LineChart>
										</ResponsiveContainer>
										<ArrowDown color="red" />
									</div>
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</ScrollArea>
	);
};

export default CityWidgets;
