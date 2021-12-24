import Graph from "../../components/analytics/Graph";
import Graph2 from "../../components/project/graph/Graph";
import Card from "../../components/analytics/card";
import Card2 from "../../components/analytics/card2";
import Card3 from "../../components/analytics/card3";

const index = () => {
	return (
		<section className="px-7 pt-14">
			<div className="flex gap gap-20 ">
				<div>
					<h1 className="text-4xl font-bold text-gray-800">Analytics</h1>
					<p className="text-gray-600 mt-4">
						Moniter performance and measure metrics
					</p>
				</div>
				<div>
					<button className="w-40 h-14 text-gray-600 text-sm mr-6  rounded-lg shadow-md hover:bg-gray-50">
						import
					</button>
					<button className="w-40 h-14 text-gray-600 text-sm rounded-lg shadow-md hover:bg-gray-50">
						exports
					</button>
				</div>
			</div>
			<div className="mt-10 flex flex-col py-8 justify-center shadow-lg mb-10 p-8 rounded-2xl">
				<Graph />
			</div>
			<div className="flex justify-between   ">
				<Card title={"Conversions"} number={"4,637"} percentage={"12%"} />
				<Card2 title={"Impressions"} number={"46,037"} percentage={"24%"} />
				<Card3 title={"Visits"} number={"90,582"} percentage={"8%"} />
			</div>

			<div className="mt-28 flex flex-col py-8 justify-center shadow-lg mb-10 p-8 rounded-2xl">
				<div className="w-full flex justify-between">
					<h1 className="text-gray-800 text-2xl font-bold">Visitors</h1>
					<h1 className="text-gray-800 text-xl font-semibold">30 days</h1>
				</div>
				<Graph2 display1={"show"} />
			</div>
		</section>
	);
};

export default index;
