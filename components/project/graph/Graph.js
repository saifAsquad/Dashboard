import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

// Line.options.plugins.legend.labels.usePointStyle = true;
// Line.options.plugins.legend.labels.

export default function App({ display1, darkMode, title }) {
	const data = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		datasets: [
			{
				display: false,
				label: "online",
				data: [33, 32, 38, 50, 80, 30, 50, 90],
				fill: false,
				borderColor: darkMode ? "#E5E7EB" : "#000",
				backgroundColor: darkMode ? "#E5E7EB" : "#000",
				lineTension: 0.5,
				// color: "#ffffff",
				borderCapStyle: "round",
			},
			{
				label: "sales",
				data: [43, 45, 25, 50, 24, 90],
				fill: false,
				borderColor: "#AC32E4",
				backgroundColor: "#AC32E4",
				lineTension: 0.5,
			},
		],
	};
	const options = {
		plugins: {
			title: {
				display: true,
				text: title || " ",
				color: darkMode ? "#ffffff" : "#212121",
				align: "start",
				positon: "top",
				font: {
					size: 24,
				},
			},
			legend: {
				display: display1 ? false : true,
				align: "end",
				labels: {
					usePointStyle: true,
					pointStyle: "circle",
					padding: 10,
					color: darkMode ? "#ffffff" : "#212121",
				},
			},
		},
		legend: {
			display: false,
		},
		layout: {
			padding: 20,
		},
		bezierCurve: true,
		scales: {
			y: {
				grid: {
					display: false,
				},
				min: 10,
				max: 100,
				ticks: {
					padding: 30,

					// forces step size to be 50 units
					font: {
						size: 16,
						weight: "bold",
						lineHeight: 2,
					},
					color: darkMode ? "#ffffff" : "#212121",
					stepSize: 50,
					callback: function (value, index, values) {
						return value + "K";
					},
				},
			},
			x: {
				grid: {
					display: false,
				},
				ticks: {
					padding: 0,

					color: darkMode ? "#ffffff" : "#212121",
					font: {
						size: 16,
						weight: "bold",
						lineHeight: 2,
					},
				},
			},
		},
		elements: {
			point: {
				radius: 0,
			},
		},
	};
	return (
		<div className="project max-h-[400px]">
			<Line data={data} options={options} />
		</div>
	);
}
