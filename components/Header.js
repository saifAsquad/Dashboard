import Image from "next/image";

const Header = () => {
	return (
		<div className="flex justify-between py-9 px-7">
			<div className="cursor-pointer">
				<Image src="/svgs/header/hamburger-icon.svg" width={24} height={24} />
			</div>
			<div className="w-3/5">
				<div className="flex gap-12 items-center justify-end w-full">
					<div className="h-10 w-full  max-w-xs border  border-grey-border gap-1 flex flex-row justify-start items-center p-3 rounded">
						<span className="w-4 h-3 flex items-center">
							<Image
								src="/svgs/header/search-icon.svg"
								width={14}
								height={14}
							/>
						</span>
						<input placeholder="Search" className="outline-none w-full" />
					</div>
					<span className="cursor-pointer w-10">
						<Image src={"/svgs/header/bell-icon.svg"} width={24} height={24} />
					</span>
					<div className="flex flex-row justify-start items-center gap-1">
						<Image src={"/svgs/header/profile.svg"} width={48} height={42} />
						<span className="text-grey-4b ">Jane Doe</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
