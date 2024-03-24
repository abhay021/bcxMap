"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import CityWidgets from "./CityWidgets";
import mockData from "@/constant/mockData.json"

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function Dashboard() {
	return (
		<div className="w-full h-full">
			<div className="absolute">
				<MapComponent />
			</div>
			<div className="z-10 ml-7 p-2">
				<h1 className="text-white relative text-3xl">Hello User</h1>
			</div>
			<div className="z-10 relative">
            	<CityWidgets cities={mockData} />
			</div>
		</div>
	);
}
