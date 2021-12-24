import React from "react";

const Box = ({ title, bodyText1, bodyText2, finalValue }) => {
	return (
		<div className="shadow-md px-6 py-4 w-full text-center rounded-xl hover:bg-gray-50 cursor-pointer">
			<div className="flex justify-between lg:gap-32">
				<h3>{title}</h3> {/* Icon */}
				<div className="flex flex-col gap-[2px]">
					<span className="bg-black w-[2px] h-[2px]"></span>
					<span className="bg-black w-[2px] h-[2px]"></span>
					<span className="bg-black w-[2px] h-[2px]"></span>
				</div>
			</div>
			<div className="mt-8">
				<h1 className="text-4xl font-bold">{bodyText1}</h1>
				<h1 className="text-gray-700 mt-2">{bodyText2}</h1>
			</div>
			<div className="mt-6 text-gray-700">{finalValue}</div>
		</div>
	);
};

export default Box;
