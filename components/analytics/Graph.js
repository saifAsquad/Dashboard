import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
// import chart from "react-chartjs-2";

export default function App({ darkMode }) {
	console.log(darkMode);
	const data = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		datasets: [
			{
				display: false,
				label: "online",
				data: [
					8, 6, 5, 9, 10, 7, 15, 12, 15, 20, 15, 30, 14, 25, 20, 15, 18, 30, 20,
					8, 6, 5, 9, 0, 15, 18, 30, 20, 8, 6, 5, 9, 10,
				],
				fill: true,
				borderColor: "#94A3B8",
				backgroundColor: "rgba(172,50,228, 0.5)",
				borderCapStyle: "round",
			},
			{
				label: "sales",
				data: [25, 20, 22, 18, 20, 25, 30, 25],
				fill: true,
				borderColor: "#94A3B8",
				backgroundColor: "rgba(121,24,242, 0.4)",
			},
		],
	};

	// Line.options.plugins.legend.labels.usePointStyle = true;
	// Line.options.plugins.legend.labels.
	const options = {
		plugins: {
			legend: {
				display: false,
				align: "end",
				labels: {
					display: false,
					usePointStyle: true,
					pointStyle: "circle",
					padding: 30,
				},
			},
		},
		legend: {
			display: true,
		},
		layout: {
			padding: 20,
		},
		// bezierCurve: true,
		scales: {
			y: {
				grid: {
					display: false,
				},
				beginAtZero: true,
				min: 0,
				max: 40,
				ticks: {
					// forces step size to be 50 units
					color: darkMode ? "#ffffff" : "#212121",

					stepSize: 10,
					callback: function (value, index, values) {
						return "$" + value + "K";
					},
				},
			},
			x: {
				grid: {
					display: true,
				},
				ticks: {
					color: darkMode ? "#ffffff" : "#212121",
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
		<div className="project max-h-[400px] rounded-lg  ">
			<Line data={data} options={options} maxHeigh />
		</div>
	);
}
