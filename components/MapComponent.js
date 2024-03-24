// components/MapComponent.js
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import cities from "@/constant/cities.json";
// import 'mapbox-gl/dist/mapbox-gl.css';

const token =
	"pk.eyJ1IjoiYWJoYXkwMjEiLCJhIjoiY2x1MTV2eTFmMGltbDJpcHJsbDhuZnEwbiJ9.Dol8h2JeVmfpL99_rsN3SQ";

// Mock data

export default function MapComponent() {
	const [viewport, setViewport] = useState({
		latitude: 33.1376,
		longitude: 81.8262,
		zoom: 2,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setViewport(v => ({ ...v, zoom: v.zoom + 0.1 }));
		}, 100);

		setTimeout(() => {
			clearInterval(interval);
		}, 2000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="w-full h-full">
			<ReactMapGL
				attributionControl={false}
				{...viewport}
				// initialViewState={viewport}
				style={{
					width: "100vw",
					height: "100vh",
				}}
				mapStyle="mapbox://styles/abhay021/clu19w7sw00n001qs8fcs1jwc"
				mapboxAccessToken={token}
				onMove={e => setViewport(e.viewState)}>
				{cities.map((city, index) => (
					<Marker key={index} latitude={city.latitude} longitude={city.longitude}>
						<HoverCard>
							<HoverCardTrigger asChild>
								<MapPin color="green" />
							</HoverCardTrigger>
							<HoverCardContent className="w-80">
								<div>Label: {city.name}</div>
								<div>Metric: {city.metrics}</div>
							</HoverCardContent>
						</HoverCard>
					</Marker>
				))}
				<ReactTooltip id="my-tooltip" place="top" type="dark" effect="float" />
				{/* <div style={{ position: "absolute", right: 0 }}>
					<NavigationControl />
				</div> */}
			</ReactMapGL>
		</div>
	);
}
