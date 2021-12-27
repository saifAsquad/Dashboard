import React from "react";

const index = () => {
	return (
		<section className="px-7 pt-14 flex flex-col gap-14">
			<div>
				<h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-300">
					TailwindCSS
				</h1>
				<p className=" text-gray-600 mt-4 dark:text-gray-300">
					Customizable framework that provides you all the building blocks for
					your project.
				</p>
			</div>
			<div className="flex flex-row justify-center rounded-lg border dark:bg-gray-800 ">
				<div className="w-full h-72 border border-r-1 border-l-0 border-y-0"></div>
				<div className="w-full h-72 border border-r-1 border-y-0 "></div>
				<div className="w-full h-72 border border-r-1 border-y-0 "></div>
			</div>
			<div>
				<div className="flex flex-row justify-center  rounded-lg border dark:bg-gray-800">
					<div className="w-full h-64 border border-r-1 border-l-0 border-b-0"></div>
					<div className="w-4/6 h-64 border border-r-1  bg-[#F9FAFB] dark:bg-gray-700 border-b-0"></div>
				</div>
				<div className="w-full h-24 bg-[#F3F4F6] dark:bg-gray-600 rounded-b-lg"></div>
			</div>
			<div className="w-full border rounded-lg h-72 dark:bg-gray-800"></div>
			<div className="flex flex-row-reverse justify-center rounded-lg border mb-14">
				<div className="w-full h-64 border border-r-1 dark:bg-gray-800 "></div>
				<div className="w-4/6 h-64 border border-r-1  bg-[#F9FAFB] dark:bg-gray-700 border-b-0 border-l-0"></div>
			</div>
		</section>
	);
};

export default index;
