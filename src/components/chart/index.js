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

// Register Chart.js components and the annotation plugin
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
	// Data for the chart
	const data = {
		labels: ["'10", "'13", "'14", "'16", "'17", "'19", "'20", "'22"], // X-axis labels
		datasets: [
			{
				label: "Player Performance", // Dataset label
				data: [0, 0, 43, 48, 52, 19, 0, 66, 20, 0], // Y-axis data points
				fill: false, // Line fill
				borderColor: "rgb(75, 192, 192)", // Line color
				tension: 0.1, // Line smoothness
			},
		],
	};

	// Define the current value to display the horizontal line
	const currentValue = 22;

	// Chart options
	const options = {
		responsive: true,
		maintainAspectRatio: false, // Ensure it doesn't stretch disproportionately
		scales: {
			x: {
				// title: {
				// 	display: true,
				// 	text: "Month",
				// },
			},
			y: {
				// title: {
				// 	display: true,
				// 	text: "Performance",
				// },
			},
		},
		plugins: {
			annotation: {
				annotations: {
					currentValueLine: {
						type: "line",
						yMin: currentValue,
						yMax: currentValue,
						borderColor: "red", // Line color
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
				{/* Render 8 images of Spain's flag */}
				{Array(8).fill(
					<div className="col">
						<img
							src={nationality}
							alt="spain"
							className="responsive-logo logo_expand"
						/>
					</div>
				)}
			</div>
			<div className="chart-container">
				{/* Insert the Chart here */}
				<Line data={data} options={options} />
			</div>
		</div>
	);
};

export default PlayerChart;
