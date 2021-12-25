const Index = (props) => (
	<div>
		<div className="mx-auto container dark:bg-gray-900 flex justify-center items-center py-12 px-6">
			<div className="max-w-[345px]">
				<div className="w-full  flex flex-col justify-between bg-white dark:bg-gray-800  rounded-lg border shadow-md mb-6 py-5 px-4">
					<div className="w-full flex justify-between items-center h-full">
						<div className="text-gray-600 hover:bg-gray-100 cursor-pointer bg-white shadow-md rounded-full text-sm leading-3 py-2 px-5">
							New
						</div>
						<div>
							<div className="w-8 h-8 rounded-full bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 text-white flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-pencil"
									width={20}
									height={20}
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
									<line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
								</svg>
							</div>
						</div>
					</div>
					<div className="mt-10">
						<h1 className="font-semibold text-2xl text-gray-600">
							React Native
						</h1>
						<h3 className="text-gray-600 dark:text-gray-100 leading-7 mt-7  w-11/12">
							Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt,
							neque por qiuam est, quid malum, sensu iudicari agam sed ut.
						</h3>
					</div>
					<div className="mt-11">
						<div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
							<p className="text-sm text-gray-500">March 28, 2020</p>
							<div className="text-gray-600 hover:bg-gray-100 w-24 h-10 cursor-pointer bg-white shadow-md rounded-lg flex justify-center items-center text-sm leading-3 py-2 px-5">
								Start
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default Index;
