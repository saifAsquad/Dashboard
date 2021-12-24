import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const data = {
	labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	datasets: [
		{
			display: false,
			label: "online",
			data: [33, 32, 38, 50, 80, 30, 50, 90],
			fill: false,
			borderColor: "#000000",
			backgroundColor: "#000000",
			lineTension: 0.5,
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

// Line.options.plugins.legend.labels.usePointStyle = true;
// Line.options.plugins.legend.labels.

export default function App({ display1 }) {
	const options = {
		plugins: {
			legend: {
				display: display1 ? false : true,
				align: "end",
				labels: {
					usePointStyle: true,
					pointStyle: "circle",
					padding: 30,
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
					// forces step size to be 50 units
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
			<Line data={data} options={options} maxHeigh />
		</div>
	);
}
