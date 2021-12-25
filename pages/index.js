import Box from "../components/project/Box";
import Graph from "../components/project/graph/Graph";

const index = () => {
	return (
		<section className="px-7 pt-14">
			<div className=" flex justify-start lg:gap-20">
				<div>
					<h1 className="text-gray-800 text-4xl font-semibold">
						Welcome Back, Jane Doe
					</h1>
					<p className="text-gray-600 text-base mt-4">
						You have 9 new tasks queued
					</p>
				</div>
				<div className="text-gray-600 text-sm max-h-14  px-9 py-5 shadow-md hover:bg-gray-50 cursor-pointer">
					Messages {""}
					<span className="rounded-full bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 text-white text-center p-[2px] px-[5px] text-[10px]">
						4
					</span>
				</div>
			</div>
			<div className="flex gap-12 mt-20">
				<button className="w-28 h-11 font-semibold rounded-lg shadow-md hover:bg-gray-50">
					Home
				</button>
				<button className="w-28 h-11 text-gray-600 shadow-md rounded-lg hover:bg-gray-50">
					Budget
				</button>
				<button className="w-28 h-11 text-gray-600 shadow-md hover:bg-gray-50 rounded-lg">
					Team
				</button>
			</div>
			<div className="flex justify-between mt-8 gap-5">
				<Box
					title={"Summary"}
					bodyText1={"19"}
					bodyText2="Due Tasks"
					finalValue="Completed : 13"
				/>
				<Box
					title={"Overdue"}
					bodyText1={"2"}
					bodyText2="Tasks"
					finalValue="Pending : 9"
				/>
				<Box
					title={"Issues"}
					bodyText1={"11"}
					bodyText2="Open"
					finalValue="Today : 10"
				/>
				<Box
					title={"Features"}
					bodyText1={"21"}
					bodyText2="Proposals"
					finalValue="Implemented : 21"
				/>
			</div>
			<div className="mt-10 flex flex-col py-8 justify-center shadow-lg mb-10 p-8 rounded-2xl">
				<div className="w-full">
					<h1 className="text-gray-800 text-2xl font-bold">Products Sales</h1>
				</div>
				<Graph />
			</div>
		</section>
	);
};

export default index;
