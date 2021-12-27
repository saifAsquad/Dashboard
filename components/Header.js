import Image from "next/image";

const Header = ({ darkMode, setDarkMode }) => {
	return (
		<div className="flex justify-between py-9 px-7 dark:bg-gray-900 dark:border border-[#1F2937]">
			<div className="cursor-pointer">
				<Image src="/svgs/header/hamburger-icon.svg" width={24} height={24} />
			</div>
			<div className="w-3/5">
				<div className="flex gap-12 items-center justify-end w-full">
					<div className="h-10 w-full dark:bg-gray-700 max-w-xs dark:border-0 border  border-grey-border gap-1 flex flex-row justify-start items-center p-3 rounded">
						<span className="w-4 h-3 flex items-center">
							<Image
								src="/svgs/header/search-icon.svg"
								width={14}
								height={14}
							/>
						</span>
						<input
							placeholder="Search"
							className="outline-none w-full bg-inherit dark:text-gray-300"
						/>
					</div>
					<span className="cursor-pointer w-10">
						{/* Sun Icon */}
						<svg
							onClick={() => setDarkMode(!darkMode)}
							width="24"
							height="24"
							className={`${darkMode ? "inline-block" : "hidden"}`}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 2.25V4.5"
								stroke="#E5E7EB"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
							/>
							<path
								d="M12 19.5V21.75"
								stroke="#E5E7EB"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
							/>
							<path
								d="M18.8942 5.10571L17.3032 6.69665"
								stroke="#E5E7EB"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
							/>
							<path
								d="M6.69641 17.3029L5.10547 18.8938"
								stroke="#E5E7EB"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
							/>
							<path
								d="M21.75 12H19.5"
								stroke="#E5E7EB"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
							/>
							<path
								d="M4.5 12H2.25"
								stroke="#E5E7EB"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
							/>
							<path
								d="M18.8942 18.8938L17.3032 17.3029"
								stroke="#E5E7EB"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
							/>
							<path
								d="M6.69641 6.69665L5.10547 5.10571"
								stroke="#E5E7EB"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
							/>
							<path
								d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
								stroke="#E5E7EB"
								strokeWidth="2"
								strokeMiterlimit="10"
								strokeLinecap="round"
							/>
						</svg>
						{/* Moon Icon */}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							onClick={() => setDarkMode(!darkMode)}
							className={`${!darkMode ? "inline-block" : "hidden"}`}
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.5 6.375C7.5 4.93969 7.71141 3.48703 8.25 2.25C4.66734 3.80953 2.25 7.46812 2.25 11.625C2.25 17.2167 6.78328 21.75 12.375 21.75C16.5319 21.75 20.1905 19.3327 21.75 15.75C20.513 16.2886 19.0603 16.5 17.625 16.5C12.0333 16.5 7.5 11.9667 7.5 6.375Z"
								stroke="#9CA3AF"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>

						{/* <Image src={"/svgs/header/bell-icon.svg"} width={24} height={24} /> */}
					</span>
					<div className="flex flex-row justify-start items-center gap-1">
						<Image src={"/svgs/header/profile.svg"} width={48} height={42} />
						<span className="text-grey-4b dark:text-gray-300 ">Jane Doe</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
