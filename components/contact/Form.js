import React from "react";
export default function IndexPage() {
	return (
		<>
			<div className="py-4 lg:py-8  relative">
				<img
					src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
					className="h-2/5 lg:h-full dark:hidden w-full lg:w-1/2 absolute inset-0 object-contain object-center xl:block hidden"
					alt="map"
				/>
				<div className="h-2/5 lg:h-[99%] rounded-lg w-full lg:w-1/2 absolute inset-0 object-cover xl:block hidden bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 opacity-75 dark:opacity-100 z-10 abolute"></div>
				<div className="xl:mx-auto xl:container  relative ">
					<div className="flex flex-wrap xl:mx-auto xl:container ">
						<div className="w-full  relative lg:w-1/2 xl:mt-10 overflow-hidden  mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
							<img
								src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
								className="w-full xl:w-1/2  inset-0 bg-fill bg-center xl:hidden"
								alt="map"
							/>
							<div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
								<div className="w-full 2xl:pl-48 xl:pt-1">
									<h1 className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-wider text-white">
										We’re Here
									</h1>
									<div className="w-full md:w-10/12 mt-3">
										<h2 className="text-white dark:text-gray-200 text-base md:text-lg leading-8 tracking-wider relative z-50">
											We believe digital innovation is at the heart of every
											business success
										</h2>
										<div className="mt-4 md:mt-8">
											<h2 className="text-sm md:text-base dark:text-gray-200 text-white font-semibold">
												Address
											</h2>
											<h2 className="text-white dark:text-gray-200 text-base md:text-lg leading-8 tracking-wider mt-2">
												Office #13, NSTP, NUST University H-12 Sector, Islamabad
											</h2>
										</div>
										<div className="mt-4 md:mt-8">
											<h2 className="text-sm md:text-base dark:text-gray-200 text-white font-semibold">
												Contact
											</h2>
											<h2 className="text-white text-base dark:text-gray-200 md:text-lg leading-8 tracking-wider mt-2">
												+92 051 4567890 (Phone)
											</h2>
											<h2 className="text-white text-base dark:text-gray-200 md:text-lg leading-8 tracking-wider mt-2">
												+92 123 4567890 (Cell)
											</h2>
										</div>
										<div className="mt-4 md:mt-8">
											<h2 className="text-sm md:text-base dark:text-gray-200 text-white font-semibold">
												Email
											</h2>
											<h2 className="text-white text-base dark:text-gray-200 md:text-lg leading-8 tracking-wider mt-2">
												alphasquad@example.com
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
							<div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
								<h1 className="text-4xl md:text-5xl lg:text-4xl dark:text-gray-200 font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3">
									Let’s Talk
								</h1>
								<div className="w-full 2xl:w-8/12 mt-3">
									<h2 className="text-gray-600 text-base dark:text-gray-200 md:text-lg leading-8 tracking-wider">
										For enquiries, please email us using the form below
									</h2>
									<div className="mt-4 md:mt-8">
										<p className="text-gray-600 text-base font-medium dark:text-gray-200">
											Name
										</p>
										<input
											className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 rounded-sm focus:border-indigo-600 focus:outline-none  py-3 pl-4 text-gray-600"
											type="text"
											placeholder="Justin Timberlake"
										/>
									</div>
									<div className="mt-4 md:mt-8">
										<p className="text-gray-600 dark:text-gray-200 text-base font-medium">
											Email Address
										</p>
										<input
											className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none rounded-sm py-3 pl-4 text-gray-600"
											type="email"
											placeholder="example@mail.com"
										/>
									</div>
									<div className="mt-4 md:mt-8">
										<p className="text-gray-600 text-base dark:text-gray-200 font-medium">
											Message
										</p>
										<textarea
											className="mt-3 text-base border-2 w-11/12 lg:w-full  resize-none hover:border-indigo-600 focus:border-indigo-600 rounded-sm focus:outline-none  xl:h-40 py-5 pl-4 text-gray-600"
											type="text"
											placeholder="Write us something..."
											defaultValue={""}
										/>
									</div>
									<div className="py-5">
										<button className="py-3 dark:bg-gray-800 dark:hover:bg-gray-700  px-20 shadow-md dark:text-gray-200 text-gray-600 hover:bg-gray-100 rounded-md ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">
											Send
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
