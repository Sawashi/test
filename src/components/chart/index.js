import React from "react";
import "./style.css";
import nationality from "../../assets/Source Images-Icons/Icons/Spain.svg";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Chart,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	annotationPlugin
);

const PlayerChart = () => {
	const data = {
		labels: ["'10", "'13", "'14", "'16", "'17", "'19", "'20", "'22"],
		datasets: [
			{
				label: "Player Performance",
				data: [0, 0, 43, 48, 52, 19, 0, 66, 20, 0],
				fill: false,
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	};

	const currentValue = 22;

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {},
			y: {},
		},
		plugins: {
			annotation: {
				annotations: {
					currentValueLine: {
						type: "line",
						yMin: currentValue,
						yMax: currentValue,
						borderColor: "red",
						borderWidth: 2,
						label: {
							enabled: true,
							content: "Current Value",
							position: "center",
							backgroundColor: "white",
							font: {
								size: 12,
							},
						},
					},
				},
			},
		},
	};

	return (
		<div className="cardChart">
			<div className="row">
				{Array(8)
					.fill()
					.map((_, index) => (
						<div className="col" key={index}>
							<img
								src={nationality}
								alt="spain"
								className="responsive-logo logo_expand"
							/>
						</div>
					))}
			</div>
			<div className="chart-container">
				<Line data={data} options={options} />
			</div>
		</div>
	);
};

export default PlayerChart;
