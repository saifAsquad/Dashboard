import Table from "../../components/finance/Table";
import Image from "next/image";

const index = () => {
	return (
		<section className="px-7 pt-14">
			<div>
				<div className="flex gap gap-20 ">
					<div>
						<h1 className="text-4xl font-bold text-gray-800">Finance</h1>
						<p className="text-gray-600 mt-4">
							Keep your financal status in check
						</p>
					</div>
					<div>
						<button className="w-40 h-14 text-gray-600 flex justify-center gap-1 items-center  text-sm mr-6  rounded-lg shadow-md hover:bg-gray-50">
							<Image
								src="/svgs/finance/settings-icon.svg"
								width={20}
								height={20}
							/>
							<span>Settings</span>
						</button>
					</div>
				</div>
			</div>
			<div>
				<Table />
			</div>
		</section>
	);
};

export default index;
