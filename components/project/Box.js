import React from "react";

const Box = ({ title, bodyText1, bodyText2, finalValue }) => {
	return (
		<div className="shadow-md dark:hover:bg-gray-700 dark:bg-gray-800 px-6 py-4 w-full text-center rounded-xl hover:bg-gray-50 cursor-pointer">
			<div className="flex justify-between lg:gap-32">
				<h3 className="dark:text-gray-300">{title}</h3> {/* Icon */}
				<div className="flex flex-col gap-[2px]">
					<span className="bg-black dark:bg-gray-400 w-[2px] h-[2px]"></span>
					<span className="bg-black dark:bg-gray-400 w-[2px] h-[2px]"></span>
					<span className="bg-black dark:bg-gray-400 w-[2px] h-[2px]"></span>
				</div>
			</div>
			<div className="mt-8">
				<h1 className="text-4xl font-bold dark:text-gray-100">{bodyText1}</h1>
				<h1 className="text-gray-700 mt-2 dark:text-gray-200">{bodyText2}</h1>
			</div>
			<div className="mt-6 text-gray-700 dark:text-gray-400">{finalValue}</div>
		</div>
	);
};

export default Box;
