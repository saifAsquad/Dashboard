import React, { useEffect } from "react";
import Chart from "chart.js/auto";

// npm i react-helmet
import { Helmet } from "react-helmet";

export default function IndexPage({ title, number, percentage }) {
	useEffect(() => {
		var ctx = document.getElementById("myChart1").getContext("2d");
		var myChart = new Chart(ctx, {
			type: "line",
			data: {
				labels: [
					"",
					"",
					"",
					" ",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
					"",
				],
				datasets: [
					{
						data: [
							50, 40, 60, 40, 50, 40, 60, 40, 50, 40, 60, 40, 50, 40, 60, 40,
							50, 40, 60, 40, 50, 40, 60, 40, 50, 40, 60, 40,
						],
						backgroundColor: ["rgba(172,50,228,0.8)"],
						borderColor: "#D1D5DB",
						borderWidth: 2,
						pointBackgroundColor: "#6366F1",
						fill: true,
						strokeColor: "#6366F1",
						tension: 0.2,
					},
				],
			},
			options: {
				plugins: {
					legend: {
						display: false,
						align: "end",
						labels: {
							display: false,
							usePointStyle: true,
							pointStyle: "circle",
						},
					},
				},
				elements: {
					point: {
						radius: 0,
					},
				},
				generateLabels: {
					hidden: true,
				},
				legend: {
					display: false,
				},
				scales: {
					y: {
						grid: {
							display: false,
							drawOnChartArea: false,
						},
						beginAtZero: true,
						ticks: {
							display: false,
						},
					},
					x: {
						grid: {
							display: false,
							drawOnChartArea: false,
						},
					},
				},
			},
		});
	}, []);
	return (
		<>
			<Helmet>
				<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
				<script
					defer
					src="https://cdn.tuk.dev/dev/light-dark-switch.js"
				></script>
			</Helmet>
			<div className="dark:bg-gray-800  rounded shadow-lg bg-white overflow-hidden max-w-[356px] ">
				<div className="flex justify-between p-7">
					<h1 className="dark:text-gray-300">{title}</h1>
					<p className="text-gray-800 dark:text-gray-300">28 days</p>
				</div>
				<div className="p-7">
					<h1 className="text-gray-800 text-4xl font-bold dark:text-gray-300">
						{number}
					</h1>
					<p className="dark:text-gray-300">
						<span className="text-red-600">{percentage} </span>Below Target
					</p>
				</div>
				<div className="w-full  flex items-center justify-center">
					<div className="w-full h-full card-1">
						<canvas
							id="myChart1"
							className="max-h-24 relative bottom-[-29px] left-[-10px] w-[390px]"
							width={390}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
