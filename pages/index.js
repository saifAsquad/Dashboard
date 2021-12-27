import Box from "../components/project/Box";
import Graph from "../components/project/graph/Graph";

const index = ({ darkMode }) => {
	return (
		<section className="px-7 pt-14 dark:bg-gray-900">
			<div className=" flex justify-start lg:gap-20 ">
				<div>
					<h1 className="text-gray-800 text-4xl font-semibold dark:text-gray-300">
						Welcome Back, Jane Doe
					</h1>
					<p className="text-gray-600 text-base mt-4 dark:text-gray-300">
						You have 9 new tasks queued
					</p>
				</div>
				<div className="text-gray-600 font-semibold rounded-lg dark:bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 text-sm max-h-14 dark:text-gray-300  px-9 py-5 shadow-md hover:bg-gray-50 cursor-pointer">
					Messages {""}
					<span className="rounded-full  dark:bg-gray-300 dark:bg-none dark:text-gray-800 dark:font-bold bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 text-white text-center p-[2.5px] px-[6px] text-[10px]">
						4
					</span>
				</div>
			</div>
			<div className="flex gap-12 mt-20">
				<button className="w-28 dark:hover:bg-gray-600 hover:font-semibold h-11  rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-50">
					Home
				</button>
				<button className="w-28 h-11 dark:bg-gray-800 dark:hover:bg-gray-600 hover:font-semibold dark:text-gray-200 text-gray-600 shadow-md rounded-lg hover:bg-gray-50">
					Budget
				</button>
				<button className="w-28 h-11 dark:bg-gray-800 dark:hover:bg-gray-600 hover:font-semibold dark:text-gray-200 text-gray-600 shadow-md hover:bg-gray-50 rounded-lg">
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
			<div className="mt-10 dark:bg-gray-800 flex flex-col py-8 justify-center shadow-lg mb-10 p-8 rounded-2xl">
				<Graph title="Products Sales" darkMode={darkMode} />
			</div>
		</section>
	);
};

export default index;
