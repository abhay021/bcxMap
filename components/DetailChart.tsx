import React, { useState } from "react";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import { Switch } from "./ui/switch";

const DetailChart = ({ selectedData }: any) => {
	const [ai, setAi] = useState<boolean>(true);
	const [final, setFinal] = useState<boolean>(true);
	const [consumption, setConsumption] = useState<boolean>(true);
	const [aiForecast, setAiForecast] = useState<boolean>(true);
	const [finalForecast, setFinalForecast] = useState<boolean>(true);
	const [consumptionForecast, setConsumptionForecast] = useState<boolean>(true);

	const renderLegend = () => {
		return (
			<>
				<div className="flex justify-evenly">
					<div className="flex justify-center gap-2 mb-4">
						<Switch checked={ai} onCheckedChange={() => setAi(!ai)} />
						<div className="text-aiForecast">|</div>
						<p>AI Forecast</p>
						<Switch checked={final} onCheckedChange={() => setFinal(!final)} />
						<div className="text-finalForecast">|</div>
						<p>Final Forecast</p>
						<Switch checked={consumption} onCheckedChange={() => setConsumption(!consumption)} />
						<div className="text-consumptionForecast">|</div>
						<p>Consumption Forecast</p>
					</div>
					<div className="flex justify-center gap-2 mb-4">
						<Switch checked={aiForecast} onCheckedChange={() => setAiForecast(!aiForecast)} />
						<div className="text-aiForecast">|</div>
						<p>AI Forecast</p>
						<Switch checked={finalForecast} onCheckedChange={() => setFinalForecast(!finalForecast)} />
						<div className="text-finalForecast">|</div>
						<p>Final Forecast</p>
						<Switch
							checked={consumptionForecast}
							onCheckedChange={() => setConsumptionForecast(!consumptionForecast)}
						/>
						<div className="text-consumptionForecast">|</div>
						<p>Previous Quarter Final Forecast</p>
					</div>
				</div>
			</>
		);
	};
	return (
		<div className="w-full h-full">
			<ResponsiveContainer width="95%" height="90%">
				<LineChart
					data={selectedData.data}
					width={800}
					height={500}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid opacity={0.2} horizontal={false} />
					<XAxis dataKey="quarter" />
					<YAxis />
					<Legend verticalAlign="top" content={renderLegend} />
					{ai && <Line type="monotone" dataKey="ai" stroke="#228628" strokeWidth={2} />}
					{final && <Line type="monotone" dataKey="final" stroke="#b6b10c" strokeWidth={2} />}
					{consumption && (
						<Line type="monotone" dataKey="consumption" stroke="#5f97c9" strokeWidth={2} />
					)}
					{aiForecast && (
						<Line type="monotone" dataKey="aiForecast" stroke="#228628" strokeDasharray="5 5" />
					)}
					{finalForecast && (
						<Line type="monotone" dataKey="finalForecast" stroke="#b6b10c" strokeDasharray="5 5" />
					)}
					{consumptionForecast && (
						<Line type="monotone" dataKey="consumptionForecast" stroke="#5f97c9" strokeDasharray="5 5" />
					)}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default DetailChart;
