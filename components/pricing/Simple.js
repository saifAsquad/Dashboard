import React from "react";
function Index() {
	const checkClickHandler = (e) => {
		const parent = e.target.parentElement;
		if (
			parent.children[1].classList.contains("hidden") ||
			parent.children[0].classList.contains("translate-x-6")
		) {
			parent.children[1].classList.remove("hidden");
			parent.children[0].classList.remove("translate-x-6");
			return;
		}
		parent.children[1].classList.add("hidden");
		parent.children[0].classList.add("translate-x-6");
	};
	return (
		<div className="container mx-auto pt-16">
			<div className="flex flex-row mb-14 justify-center items-center gap-2 w-full">
				<p className="text-xl font-semibold gray-600 dark:text-gray-300">
					Bill Monthly
				</p>
				<div className="cursor-pointer border-0  shadow-sm  w-12 h-6 rounded-full bg-gradient-to-r  from-gr-1 via-gr-2 to-gr-3 relative">
					<input
						type="checkbox"
						name="toggle"
						id="toggle"
						onClick={(e) => {
							e.stopPropagation();
							checkClickHandler(e);
						}}
						className="focus:outline-none  checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
					/>
					<label
						htmlFor="toggle"
						onClick={(e) => {
							e.stopPropagation();
							checkClickHandler(e);
						}}
						className="toggle-label bg-gray-500  w-full block  h-6 overflow-hidden rounded-full  cursor-pointer"
					/>
				</div>
				<p className="text-xl font-semibold gray-600 dark:text-gray-300">
					Bill Annually
				</p>
			</div>
			<div className="flex flex-wrap justify-between">
				<div className="w-11/12 xl:w-1/3 lg:w-1/2 sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border border-gray-300 sm:border-none bg-white dark:bg-gray-800">
					<div className="pt-8 px-8 pb-6">
						<h4 className="text-2xl text-center text-gray-600 dark:text-gray-300 pb-3 font-bold">
							Professional
						</h4>
						<p className="text-sm text-center text-gray-600 dark:text-gray-300 pb-5 leading-normal px-10">
							Basic resources for a starter site. Individuals and small teams.
						</p>
						<p className="text-base text-center dark:text-gray-300 text-gray-600 font-bold">
							${" "}
							<span className="text-4xl  text-transparent dark:text-gray-300 bg-clip-text bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 font-medium px-2">
								49
							</span>
							/mo
						</p>
					</div>
					<div
						className="flex justify-between pl-12 pr-12 pt-4 pb-4 bg-gray-100 dark:bg-gray-700"
						role="button"
					>
						<p className="text-base text-gray-600 font-bold  dark:text-gray-300">
							Annual Billing
						</p>
						<div className="cursor-pointer  w-12 h-6 rounded-full bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 relative shadow-sm">
							<input
								type="checkbox"
								name="toggle"
								id="toggle"
								onClick={(e) => {
									e.stopPropagation();
									checkClickHandler(e);
								}}
								className="focus:outline-none   checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
							/>
							<label
								htmlFor="toggle"
								onClick={(e) => {
									e.stopPropagation();
									checkClickHandler(e);
								}}
								className="toggle-label bg-gray-500   block w-12 h-6 overflow-hidden rounded-full  cursor-pointer"
							/>
						</div>
					</div>
					<div className="pt-6 pr-8 pl-8">
						<ul className="flex flex-col items-center">
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
						</ul>
					</div>
					<div className="flex justify-center pb-8">
						<button className="focus:outline-none dark:hover:bg-gray-500 dark:bg-gray-600 dark:text-gray-300 bg-white hover:bg-gray-100 transition duration-150 ease-in-out  rounded border text-gray-600 shadow-md px-6 py-2 text-sm">
							Subscribe
						</button>
					</div>
				</div>
				<div className="w-11/12 xl:w-1/3 lg:w-1/2 dark:bg-gray-800  sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border-2 border-gr-2  bg-white">
					<div className="pt-8 px-8 pb-6">
						<h4 className="text-2xl text-center dark:text-gray-300 text-gray-600 pb-3 font-bold">
							Pro Plus
						</h4>
						<p className="text-sm text-center dark:text-gray-300 text-gray-600 pb-5 leading-normal px-10">
							More power for company sites and heavy traffic. Growing business.
						</p>
						<p className="text-base text-center text-gray-600 dark:text-gray-300 font-bold">
							${" "}
							<span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 font-medium px-2">
								52
							</span>
							/mo
						</p>
					</div>
					<div className="flex justify-between pl-12 pr-12 pt-4 pb-4 bg-gray-100 dark:bg-gray-700">
						<p className="text-base text-gray-600 dark:text-gray-300 font-bold">
							Annual Billing
						</p>
						<div className="cursor-pointer w-12 h-6 rounded-full bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 relative shadow-sm">
							<input
								defaultChecked
								type="checkbox"
								name="toggle"
								id="toggle1"
								onClick={(e) => {
									e.stopPropagation();
									checkClickHandler(e);
								}}
								className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
							/>
							<label
								htmlFor="toggle1"
								onClick={(e) => {
									e.stopPropagation();
									checkClickHandler(e);
								}}
								className="toggle-label  block w-12 h-6 overflow-hidden rounded-full bg-gray-500 cursor-pointer"
							/>
						</div>
					</div>
					<div className="pt-6 pr-8 pl-8">
						<ul className="flex flex-col items-center">
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
						</ul>
					</div>
					<div className="flex justify-center pb-8 ">
						<button className="focus:outline-none dark:border dark:hover:border-gray-700 dark:font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 transition duration-150 ease-in-out  rounded  shadow-md px-6 py-2 text-sm">
							Subscribe
						</button>
					</div>
				</div>
				<div className="w-11/12 xl:w-1/3 dark:bg-gray-800 lg:w-1/2 sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border border-gray-300 sm:border-none bg-white">
					<div className="pt-8 px-8 pb-6">
						<h4 className="text-2xl text-center dark:text-gray-300 text-gray-600 pb-3 font-bold">
							Enterprise
						</h4>
						<p className="text-sm text-center dark:text-gray-300 text-gray-600 pb-5 leading-normal px-10">
							Support multi-complex sites and high-resolution photos and videos.
						</p>
						<p className="text-base text-center dark:text-gray-300 text-gray-600 font-bold">
							${" "}
							<span className="text-4xl text-transparent dark:text-gray-300 bg-clip-text bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 font-medium px-2">
								90
							</span>
							/mo
						</p>
					</div>
					<div className="flex justify-between pl-12 pr-12 pt-4 pb-4 bg-gray-100 dark:bg-gray-700">
						<p className="text-base text-gray-600 font-bold  dark:text-gray-300">
							Annual Billing
						</p>
						<div className="cursor-pointer w-12 h-6 rounded-full bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 relative shadow-sm">
							<input
								type="checkbox"
								name="toggle"
								id="toggle2"
								onClick={(e) => {
									e.stopPropagation();
									checkClickHandler(e);
								}}
								className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
							/>
							<label
								htmlFor="toggle2"
								onClick={(e) => {
									e.stopPropagation();
									checkClickHandler(e);
								}}
								className="toggle-label bg-gray-500 block w-12 h-6 overflow-hidden rounded-full  cursor-pointer"
							/>
						</div>
					</div>
					<div className="pt-6 pr-8 pl-8">
						<ul className="flex flex-col items-center">
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600  dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
							<li className="flex items-center mb-8">
								<div className="h-1 w-1 rounded-full bg-indigo-700" />
								<p className="pl-2 text-gray-600 dark:text-gray-300 text-base">
									Demo features 1 for plan
								</p>
							</li>
						</ul>
					</div>
					<div className="flex justify-center pb-8">
						<button className="focus:outline-none dark:hover:bg-gray-500 dark:bg-gray-600 dark:text-gray-300 bg-white hover:bg-gray-100 transition duration-150 ease-in-out  rounded border text-gray-600 shadow-md px-6 py-2 text-sm">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;
