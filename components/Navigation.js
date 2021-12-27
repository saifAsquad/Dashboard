import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const repeatingStyles = {
	listItem:
		"w-full text-font-primary hover:text-white cursor-pointer dark:text-gray-300 text-sm p-[13px] pl-8 hover:bg-gradient-to-r from-gr-1 to-gr-2  ",
};

const Navigation = () => {
	const Active = useRouter().pathname;
	const activeClass =
		"bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 text-font-white";

	return (
		<div className="lg:w-80 flex flex-col dark:border-r border-r-[#1F2937]  justify-between  shadow-md  dark:bg-gray-900">
			{/* Main NAvigation */}
			<nav>
				<div className="mb-24  p-[35px] ">
					{/* Logo, 2 div's for cursor */}
					<div className="cursor-pointer">
						<Image src="/svgs/navigation/logo.svg" width={144} height={29} />
					</div>
				</div>
				<ul>
					<h1 className="w-full h-10 pl-8 dark:text-gray-300 text-font-primary text-sm">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							className="inline-block align-middle"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								fill="currentColor"
								d="M5.14286 0H1.71429C0.771429 0 0 0.771429 0 1.71429V5.14286C0 6.08963 0.767512 6.85714 1.71429 6.85714H5.14286C6.08963 6.85714 6.85714 6.08963 6.85714 5.14286V1.71429C6.85714 0.767512 6.08963 0 5.14286 0ZM1.14307 5.71428V1.14285H5.7145V5.71428H1.14307ZM10.8574 0H14.2859C15.2327 0 16.0002 0.767512 16.0002 1.71429V5.14286C16.0002 6.08963 15.2327 6.85714 14.2859 6.85714H10.8574C9.91058 6.85714 9.14307 6.08963 9.14307 5.14286V1.71429C9.14307 0.771429 9.9145 0 10.8574 0ZM10.2857 5.71429V1.14286H14.8571V5.71429H10.2857ZM1.71429 9.14286H5.14286C6.08963 9.14286 6.85714 9.91037 6.85714 10.8571V14.2857C6.85714 15.2325 6.08963 16 5.14286 16H1.71429C0.767512 16 0 15.2325 0 14.2857V10.8571C0 9.91429 0.771429 9.14286 1.71429 9.14286ZM1.14307 14.8571V10.2857H5.7145V14.8571H1.14307ZM10.8574 9.14285H14.2859C15.2327 9.14285 16.0002 9.91037 16.0002 10.8571V14.2857C16.0002 15.2325 15.2327 16 14.2859 16H10.8574C9.91058 16 9.14307 15.2325 9.14307 14.2857V10.8571C9.14307 9.91428 9.9145 9.14285 10.8574 9.14285ZM10.2857 14.8571V10.2857H14.8571V14.8571H10.2857Z"
							/>
						</svg>
						{"  "}
						<span className="align-middle inline-block ">Dashboard</span>
					</h1>
					<Link href="/">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								className="inline-block align-middle"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.4 14.4C10.4 15.2837 11.1163 16 12 16H14.4C15.2837 16 16 15.2837 16 14.4V12C16 11.1163 15.2837 10.4 14.4 10.4H13.6C13.1582 10.4 12.8 10.0418 12.8 9.6C12.8 9.15817 13.1582 8.8 13.6 8.8H14.4C15.2837 8.8 16 8.08366 16 7.2V4.8C16 3.91634 15.2837 3.2 14.4 3.2H12V2.4C12 1.07452 10.9255 0 9.6 0C8.27452 0 7.2 1.07452 7.2 2.4V3.2H4.8C3.92 3.2 3.2 3.912 3.2 4.8V7.2H2.4C1.54256 7.2 0.750258 7.65744 0.321539 8.4C-0.10718 9.14256 -0.10718 10.0574 0.321539 10.8C0.750258 11.5426 1.54256 12 2.4 12H3.2V14.4C3.2 15.2837 3.91634 16 4.8 16H7.2C8.08366 16 8.8 15.2837 8.8 14.4V13.6C8.8 13.1582 9.15817 12.8 9.6 12.8C10.0418 12.8 10.4 13.1582 10.4 13.6V14.4ZM14.4 12V14.4H12V13.6C12 12.7426 11.5426 11.9503 10.8 11.5215C10.0574 11.0928 9.14256 11.0928 8.4 11.5215C7.65744 11.9503 7.2 12.7426 7.2 13.6V14.4H4.8V12C4.8 11.1163 4.08366 10.4 3.2 10.4H2.4C1.95817 10.4 1.6 10.0418 1.6 9.6C1.6 9.15817 1.95817 8.8 2.4 8.8H3.2C4.08366 8.8 4.8 8.08366 4.8 7.2V4.8H7.2C8.08366 4.8 8.8 4.08366 8.8 3.2V2.4C8.8 1.95817 9.15817 1.6 9.6 1.6C10.0418 1.6 10.4 1.95817 10.4 2.4V3.2C10.4 4.08366 11.1163 4.8 12 4.8H14.4V7.2H13.6C12.7426 7.2 11.9503 7.65744 11.5215 8.4C11.0928 9.14256 11.0928 10.0574 11.5215 10.8C11.9503 11.5426 12.7426 12 13.6 12H14.4Z"
									fill="currentColor"
								/>
							</svg>
							<span className="align-middle"> Project</span>
						</li>
					</Link>
					<Link href="/analytics">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/analytics" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								height="16"
								className="inline-block align-middle"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM14.4 8C14.4 11.5346 11.5346 14.4 8 14.4C4.46538 14.4 1.6 11.5346 1.6 8C1.6 4.46538 4.46538 1.6 8 1.6C11.5346 1.6 14.4 4.46538 14.4 8ZM6.04823 5.544L11.1442 3.848C11.4303 3.75508 11.7443 3.83049 11.957 4.04319C12.1697 4.25589 12.2451 4.56991 12.1522 4.856L10.4562 9.952C10.3765 10.1897 10.1899 10.3763 9.95223 10.456L4.85623 12.152C4.57014 12.2449 4.25611 12.1695 4.04342 11.9568C3.83072 11.7441 3.75531 11.4301 3.84823 11.144L5.54423 6.048C5.62397 5.81031 5.81054 5.62374 6.04823 5.544ZM5.87497 10.127L5.872 10.128V10.136L5.87497 10.127ZM5.87497 10.127L9.072 9.064L10.128 5.864L6.928 6.936L5.87497 10.127Z"
									fill="currentColor"
								/>
							</svg>
							<span className="align-middle"> Analytics</span>
						</li>
					</Link>
					<Link href="/finance">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/finance" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								className="inline-block align-middle"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="2"
									y="4.66666"
									width="12"
									height="8.66667"
									rx="1.66667"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5.3335 4.66667V3.33333C5.3335 2.59695 5.93045 2 6.66683 2H9.3335C10.0699 2 10.6668 2.59695 10.6668 3.33333V4.66667"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M7.99984 8V8.00666"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2 8.66666C5.77397 10.5684 10.226 10.5684 14 8.66666"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>

							<span className="align-middle"> Finance</span>
						</li>
					</Link>
					<Link href="/tasks">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/tasks" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								className="inline-block align-middle"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.33398 2V4.66667C9.33398 5.03486 9.63246 5.33333 10.0007 5.33333H12.6673"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M11.334 14H4.66732C3.93094 14 3.33398 13.403 3.33398 12.6667V3.33333C3.33398 2.59695 3.93094 2 4.66732 2H9.33398L12.6673 5.33333V12.6667C12.6673 13.403 12.0704 14 11.334 14Z"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M6 4.66667H6.66667"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M6 8.66667H10"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M8.66602 11.3333H9.99935"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>

							<span className="align-middle"> Tasks</span>
						</li>
					</Link>
					<Link href="/courses">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/courses" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								stroke="currentColor"
								className="inline-block align-middle"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7.99935 2.66667L2.66602 5.33333L7.99935 8L13.3327 5.33333L7.99935 2.66667"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2.66602 8L7.99935 10.6667L13.3327 8"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2.66602 10.6667L7.99935 13.3333L13.3327 10.6667"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="align-middle"> Courses</span>
						</li>
					</Link>
					<Link href="/tailwind-css">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/tailwind-css" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								className="inline-block align-middle"
								fill="none"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7.778 4C6.118 4 5.082 4.81467 4.66667 6.44467C5.28867 5.62933 6.01533 5.32467 6.84467 5.528C7.318 5.644 7.656 5.98133 8.03 6.35467C8.64067 6.96267 9.36333 7.66667 10.8887 7.66667C12.5487 7.66667 13.5847 6.852 14 5.222C13.378 6.03733 12.6513 6.342 11.822 6.13867C11.3487 6.02267 11.0107 5.68533 10.6367 5.312C10.026 4.704 9.32 4 7.778 4ZM5.11133 8.33333C3.45133 8.33333 2.41533 9.148 2 10.778C2.622 9.96267 3.34867 9.658 4.178 9.86133C4.65133 9.97733 4.98933 10.3147 5.36333 10.688C5.974 11.296 6.68 12 8.222 12C9.882 12 10.918 11.1853 11.3333 9.55533C10.7113 10.3707 9.98467 10.6753 9.15533 10.472C8.682 10.356 8.344 10.0187 7.97 9.64533C7.35933 9.03733 6.65333 8.33333 5.11133 8.33333Z"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="align-middle"> Tailwind CSS</span>
						</li>
					</Link>
					<Link href="/pricing">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/pricing" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								className="inline-block align-middle"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M5.66667 6.33333C6.03486 6.33333 6.33333 6.03486 6.33333 5.66667C6.33333 5.29848 6.03486 5 5.66667 5C5.29848 5 5 5.29848 5 5.66667C5 6.03486 5.29848 6.33333 5.66667 6.33333Z" />
								<path
									d="M2.66797 4.66666V7.23932C2.66797 7.59732 2.80997 7.94066 3.0633 8.19399L8.47397 13.6047C8.59933 13.73 8.74816 13.8295 8.91197 13.8974C9.07577 13.9652 9.25133 14.0001 9.42864 14.0001C9.60594 14.0001 9.7815 13.9652 9.94531 13.8974C10.1091 13.8295 10.2579 13.73 10.3833 13.6047L13.606 10.382C13.7313 10.2566 13.8308 10.1078 13.8987 9.94399C13.9665 9.78019 14.0014 9.60463 14.0014 9.42732C14.0014 9.25002 13.9665 9.07446 13.8987 8.91065C13.8308 8.74685 13.7313 8.59802 13.606 8.47266L8.19464 3.06199C7.9416 2.80899 7.59846 2.66679 7.24064 2.66666H4.66797C4.13754 2.66666 3.62883 2.87737 3.25376 3.25244C2.87868 3.62752 2.66797 4.13622 2.66797 4.66666V4.66666Z"
									strokeWidth="1.33333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="align-middle"> Pricing</span>
						</li>
					</Link>
					<Link href="/faq">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/faq" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								height="16"
								className="inline-block align-middle"
								viewBox="0 0 16 16"
								fill="none"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.33398 5.33333C5.33398 4.8029 5.57982 4.29419 6.0174 3.91911C6.45499 3.54404 7.04848 3.33333 7.66732 3.33333H8.33398C8.95282 3.33333 9.54632 3.54404 9.9839 3.91911C10.4215 4.29419 10.6673 4.8029 10.6673 5.33333C10.6919 5.76616 10.5751 6.19526 10.3346 6.55598C10.0941 6.9167 9.74297 7.18951 9.33398 7.33333C8.925 7.52508 8.57382 7.88883 8.33334 8.36979C8.09286 8.85075 7.9761 9.42288 8.00065 10"
									strokeWidth="1.33333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M8 12.6667V12.6733"
									strokeWidth="1.33333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="align-middle"> FAQ</span>
						</li>
					</Link>
					<Link href="/contact">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/contact" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								className="inline-block align-middle"
								fill="none"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.66602 13.3333L13.3327 8.66667"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M8.66602 13.3333V9.33334C8.66602 9.15653 8.73625 8.98696 8.86128 8.86193C8.9863 8.73691 9.15587 8.66667 9.33268 8.66667H13.3327V4.00001C13.3327 3.64638 13.1922 3.30724 12.9422 3.0572C12.6921 2.80715 12.353 2.66667 11.9993 2.66667H3.99935C3.64573 2.66667 3.30659 2.80715 3.05654 3.0572C2.80649 3.30724 2.66602 3.64638 2.66602 4.00001V12C2.66602 12.3536 2.80649 12.6928 3.05654 12.9428C3.30659 13.1929 3.64573 13.3333 3.99935 13.3333H8.66602Z"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="align-middle"> Contact</span>
						</li>
					</Link>
					<Link href="/form">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/form" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								className="inline-block align-middle"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10 2V4.66667C10 4.84348 10.0702 5.01305 10.1953 5.13807C10.3203 5.2631 10.4899 5.33333 10.6667 5.33333H13.3333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12 11.3333H7.33333C6.97971 11.3333 6.64057 11.1929 6.39052 10.9428C6.14048 10.6928 6 10.3536 6 10V3.33333C6 2.97971 6.14048 2.64057 6.39052 2.39052C6.64057 2.14048 6.97971 2 7.33333 2H10L13.3333 5.33333V10C13.3333 10.3536 13.1929 10.6928 12.9428 10.9428C12.6928 11.1929 12.3536 11.3333 12 11.3333Z"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10.6673 11.3333V12.6667C10.6673 13.0203 10.5268 13.3594 10.2768 13.6095C10.0267 13.8595 9.68761 14 9.33398 14H4.66732C4.3137 14 3.97456 13.8595 3.72451 13.6095C3.47446 13.3594 3.33398 13.0203 3.33398 12.6667V5.99999C3.33398 5.64637 3.47446 5.30723 3.72451 5.05718C3.97456 4.80713 4.3137 4.66666 4.66732 4.66666H6.00065"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="align-middle"> Form</span>
						</li>
					</Link>
					<Link href="/invoice">
						<li
							className={`${repeatingStyles.listItem} ${
								Active === "/invoice" ? activeClass : ""
							}`}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								className="inline-block align-middle"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.3335 2V4.66667C9.3335 4.84348 9.40373 5.01305 9.52876 5.13807C9.65378 5.2631 9.82335 5.33333 10.0002 5.33333H12.6668"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M11.3335 14H4.66683C4.31321 14 3.97407 13.8595 3.72402 13.6095C3.47397 13.3594 3.3335 13.0203 3.3335 12.6667V3.33333C3.3335 2.97971 3.47397 2.64057 3.72402 2.39052C3.97407 2.14048 4.31321 2 4.66683 2H9.3335L12.6668 5.33333V12.6667C12.6668 13.0203 12.5264 13.3594 12.2763 13.6095C12.0263 13.8595 11.6871 14 11.3335 14Z"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M6 10L7.33333 11.3333L10 8.66667"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="align-middle"> Invoice</span>
						</li>
					</Link>
				</ul>
			</nav>
			{/* Bottom Box of the Navigation */}
			<div className={`p-4 flex flex-row justify-evenly ${activeClass}`}>
				<Image
					src="/svgs/navigation/bell-icon.svg"
					width={14}
					height={14}
					className="cursor-pointer"
				/>
				<Image
					src="/svgs/navigation/text-icon.svg"
					width={14}
					height={14}
					className="cursor-pointer"
				/>
				<Image
					src="/svgs/navigation/settings-icon.svg"
					width={14}
					height={14}
					className="cursor-pointer"
				/>
				<Image
					src="/svgs/navigation/bin-icon.svg"
					width={14}
					height={14}
					className="cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Navigation;

// import React from "react";
// function Index() {
// 	return (
// 		<div className="flex flex-no-wrap">
// 			{/* Sidebar starts */}
// 			{/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
// 			<div className="w-64 absolute sm:relative bg-indigo-900 shadow md:h-full flex-col justify-between hidden sm:flex">
// 				<div>
// 					<div className="h-16 w-full flex items-center px-8">
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							width={144}
// 							height={30}
// 							viewBox="0 0 144 30"
// 						>
// 							<path
// 								fill="#5F7DF2"
// 								d="M80.544 9.48c1.177 0 2.194.306 3.053.92.86.614 1.513 1.45 1.962 2.507.448 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.699 3.51-.465 1.037-1.136 1.851-2.012 2.444-.876.592-1.885.888-3.028.888-1.405 0-2.704-.554-3.897-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78H70.45V9.657h6.145v1.663l.209-.21c1.123-1.087 2.369-1.63 3.74-1.63zm17.675 0c1.176 0 2.194.306 3.053.92.859.614 1.513 1.45 1.961 2.507.449 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.698 3.51-.466 1.037-1.136 1.851-2.012 2.444-.876.592-1.886.888-3.028.888-1.405 0-2.704-.554-3.898-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78h-1.904V9.657h6.144v1.663l.21-.21c1.122-1.087 2.368-1.63 3.739-1.63zM24.973 1c1.13 0 2.123.433 2.842 1.133 0 .004 0 .008.034.012 1.54 1.515 1.54 3.962-.034 5.472-.035.029-.069.058-.069.089-.719.65-1.712 1.05-2.773 1.05-.719 0-1.37.061-1.985.184-2.363.474-3.8 1.86-4.28 4.13-.114.489-.18 1.02-.2 1.59l-.003.176.001-.034.002.034c.022.505-.058 1.014-.239 1.495l-.076.182.064-.157c.106-.28.18-.575.217-.881l.008-.084-.026.195c-.286 1.797-1.858 3.188-3.754 3.282l-.204.005h-.103l-.103.002h-.034c-.65.012-1.232.072-1.78.181-2.328.473-3.765 1.863-4.279 4.139-.082.417-.142.863-.163 1.339l-.008.362v.23c0 2.02-1.603 3.681-3.661 3.861L4.16 29l-.48-.01c-.958-.073-1.849-.485-2.499-1.113-1.522-1.464-1.573-3.808-.152-5.33l.152-.154.103-.12c.719-.636 1.677-1.026 2.704-1.026.754 0 1.404-.062 2.02-.184 2.362-.475 3.8-1.86 4.28-4.126.136-.587.17-1.235.17-1.942 0-.991.411-1.896 1.027-2.583.069-.047.137-.097.172-.15.068-.051.102-.104.17-.159.633-.564 1.498-.925 2.408-.978l.229-.007h.034c.068 0 .171.003.274.009.616-.014 1.198-.074 1.746-.18 2.328-.474 3.766-1.863 4.279-4.135.082-.44.142-.912.163-1.418l.008-.385v-.132c0-2.138 1.78-3.872 4.005-3.877zm-.886 10c1.065 0 1.998.408 2.697 1.073.022.011.03.024.042.036l.025.017v.015c1.532 1.524 1.532 3.996 0 5.52-.034.03-.067.06-.067.09-.7.655-1.665 1.056-2.697 1.056-.7 0-1.332.062-1.932.186-2.298.477-3.696 1.873-4.163 4.157-.133.591-.2 1.242-.2 1.95 0 1.036-.399 1.975-1.032 2.674l-.1.084c-.676.679-1.551 1.055-2.441 1.13l-.223.012-.366-.006c-.633-.043-1.3-.254-1.865-.632-.156-.096-.296-.201-.432-.315l-.2-.177v-.012c-.734-.735-1.133-1.72-1.133-2.757 0-2.078 1.656-3.793 3.698-3.899l.198-.005h.133c.666-.007 1.266-.069 1.832-.185 2.265-.476 3.663-1.874 4.163-4.161.08-.442.139-.916.159-1.424l.008-.387v-.136c0-2.153 1.731-3.899 3.896-3.904zm3.882 11.025c1.375 1.367 1.375 3.583 0 4.95s-3.586 1.367-4.96 0c-1.345-1.367-1.345-3.583 0-4.95 1.374-1.367 3.585-1.367 4.96 0zm94.655-12.672c1.405 0 2.628.323 3.669.97 1.041.648 1.843 1.566 2.406 2.756.563 1.189.852 2.57.87 4.145h-9.954l.03.251c.132.906.476 1.633 1.03 2.18.605.596 1.386.895 2.343.895 1.058 0 2.09-.525 3.097-1.574l3.301 1.066-.203.291c-.69.947-1.524 1.67-2.501 2.166-1.075.545-2.349.818-3.821.818-1.473 0-2.774-.277-3.904-.831-1.13-.555-2.006-1.34-2.628-2.355-.622-1.016-.933-2.21-.933-3.58 0-1.354.324-2.582.971-3.682s1.523-1.961 2.628-2.583c1.104-.622 2.304-.933 3.599-.933zm13.955.126c1.202 0 2.314.216 3.339.648v-.47h3.034v3.91h-3.034l-.045-.137c-.317-.848-1.275-1.272-2.875-1.272-1.21 0-1.816.339-1.816 1.016 0 .296.161.516.483.66.321.144.791.262 1.409.355 1.735.22 3.102.536 4.1.946 1 .41 1.697.919 2.095 1.524.398.605.597 1.339.597 2.202 0 1.405-.48 2.5-1.441 3.282-.96.783-2.266 1.174-3.917 1.174-1.608 0-2.7-.321-3.275-.964V23h-3.098v-4.596h3.098l.032.187c.116.547.412.984.888 1.311.53.364 1.183.546 1.962.546.762 0 1.324-.087 1.688-.26.364-.174.546-.476.546-.908 0-.296-.076-.527-.228-.692-.153-.165-.447-.31-.883-.438-.435-.127-1.102-.27-2-.431-1.997-.313-3.433-.82-4.31-1.517-.875-.699-1.313-1.64-1.313-2.825 0-1.21.455-2.162 1.365-2.856.91-.695 2.11-1.042 3.599-1.042zm-69.164.178v10.27h1.98V23h-8.24v-3.072h2.032V12.78h-2.031V9.657h6.259zm-16.85-5.789l.37.005c1.94.05 3.473.494 4.6 1.335 1.198.892 1.797 2.185 1.797 3.878 0 1.168-.273 2.15-.819 2.945-.546.796-1.373 1.443-2.482 1.943l3.085 5.776h2.476V23h-5.827l-4.317-8.366h-2.183v5.116h2.4V23H39.646v-3.25h2.628V7.118h-2.628v-3.25h10.918zm61.329 0v16.06h1.892V23h-8.24v-3.072h2.082v-13h-2.082v-3.06h6.348zm-32.683 9.04c-.812 0-1.462.317-1.949.951-.486.635-.73 1.49-.73 2.565 0 1.007.252 1.847.756 2.52.503.673 1.161 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.448-.622.672-1.504.672-2.647 0-1.092-.228-1.942-.685-2.552-.457-.61-1.113-.914-1.968-.914zm17.675 0c-.813 0-1.463.317-1.95.951-.486.635-.73 1.49-.73 2.565 0 1.007.253 1.847.756 2.52.504.673 1.162 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.449-.622.673-1.504.673-2.647 0-1.092-.229-1.942-.686-2.552-.457-.61-1.113-.914-1.967-.914zM14.1 0C16.267 0 18 1.743 18 3.894v.01c0 2.155-1.733 3.903-3.9 3.903-4.166 0-6.3 2.133-6.3 6.293 0 2.103-1.667 3.817-3.734 3.9l-.5-.009c-.933-.075-1.8-.49-2.433-1.121C.4 16.134 0 15.143 0 14.1c0-2.144 1.733-3.903 3.9-3.903 4.166 0 6.3-2.133 6.3-6.294C10.2 1.751 11.934.005 14.1 0zm108.32 12.184c-.76 0-1.372.22-1.834.66-.46.44-.75 1.113-.87 2.018h5.561c-.118-.795-.442-1.44-.97-1.936-.53-.495-1.158-.742-1.886-.742zM49.525 7.118h-2.26v4.444h1.829c2.023 0 3.034-.754 3.034-2.26 0-.728-.233-1.274-.698-1.638-.466-.364-1.1-.546-1.905-.546zm15.821-3.593c.635 0 1.183.231 1.644.692.462.462.692 1.01.692 1.644 0 .677-.23 1.238-.692 1.682-.46.445-1.009.667-1.644.667-.643 0-1.195-.23-1.656-.692-.462-.461-.692-1.013-.692-1.657 0-.634.23-1.182.692-1.644.46-.461 1.013-.692 1.656-.692zM5.991 1.171c1.345 1.563 1.345 4.095 0 5.658-1.374 1.561-3.585 1.561-4.96 0-1.375-1.563-1.375-4.095 0-5.658 1.375-1.561 3.586-1.561 4.96 0z"
// 							/>
// 						</svg>
// 					</div>
// 					<ul className="mt-12">
// 						<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center py-3 px-8">
// 							<div className="flex items-center">
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									className="icon icon-tabler icon-tabler-grid"
// 									width={18}
// 									height={18}
// 									viewBox="0 0 24 24"
// 									strokeWidth="1.5"
// 									stroke="currentColor"
// 									fill="none"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								>
// 									<path stroke="none" d="M0 0h24v24H0z" />
// 									<rect x={4} y={4} width={6} height={6} rx={1} />
// 									<rect x={14} y={4} width={6} height={6} rx={1} />
// 									<rect x={4} y={14} width={6} height={6} rx={1} />
// 									<rect x={14} y={14} width={6} height={6} rx={1} />
// 								</svg>
// 								<span className="text-sm  ml-2">Dashboard</span>
// 							</div>
// 						</li>
// 						<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
// 							<div className="flex items-center">
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									className="icon icon-tabler icon-tabler-puzzle"
// 									width={18}
// 									height={18}
// 									viewBox="0 0 24 24"
// 									strokeWidth="1.5"
// 									stroke="currentColor"
// 									fill="none"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								>
// 									<path stroke="none" d="M0 0h24v24H0z" />
// 									<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
// 								</svg>
// 								<span className="text-sm  ml-2">Products</span>
// 							</div>
// 						</li>
// 						<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
// 							<div className="flex items-center">
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									className="icon icon-tabler icon-tabler-compass"
// 									width={18}
// 									height={18}
// 									viewBox="0 0 24 24"
// 									strokeWidth="1.5"
// 									stroke="currentColor"
// 									fill="none"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								>
// 									<path stroke="none" d="M0 0h24v24H0z" />
// 									<polyline points="8 16 10 10 16 8 14 14 8 16" />
// 									<circle cx={12} cy={12} r={9} />
// 								</svg>
// 								<span className="text-sm  ml-2">Performance</span>
// 							</div>
// 						</li>
// 						<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
// 							<div className="flex items-center">
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									className="icon icon-tabler icon-tabler-code"
// 									width={20}
// 									height={20}
// 									viewBox="0 0 24 24"
// 									strokeWidth="1.5"
// 									stroke="currentColor"
// 									fill="none"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								>
// 									<path stroke="none" d="M0 0h24v24H0z" />
// 									<polyline points="7 8 3 12 7 16" />
// 									<polyline points="17 8 21 12 17 16" />
// 									<line x1={14} y1={4} x2={10} y2={20} />
// 								</svg>
// 								<span className="text-sm  ml-2">Deliverables</span>
// 							</div>
// 						</li>
// 						<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center  px-8 py-3">
// 							<div className="flex items-center">
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									className="icon icon-tabler icon-tabler-puzzle"
// 									width={18}
// 									height={18}
// 									viewBox="0 0 24 24"
// 									strokeWidth="1.5"
// 									stroke="currentColor"
// 									fill="none"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								>
// 									<path stroke="none" d="M0 0h24v24H0z" />
// 									<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
// 								</svg>
// 								<span className="text-sm  ml-2">Invoices</span>
// 							</div>
// 						</li>
// 						<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
// 							<div className="flex items-center">
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									className="icon icon-tabler icon-tabler-stack"
// 									width={18}
// 									height={18}
// 									viewBox="0 0 24 24"
// 									strokeWidth="1.5"
// 									stroke="currentColor"
// 									fill="none"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								>
// 									<path stroke="none" d="M0 0h24v24H0z" />
// 									<polyline points="12 4 4 8 12 12 20 8 12 4" />
// 									<polyline points="4 12 12 16 20 12" />
// 									<polyline points="4 16 12 20 20 16" />
// 								</svg>
// 								<span className="text-sm  ml-2">Inventory</span>
// 							</div>
// 						</li>
// 						<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
// 							<div className="flex items-center">
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									className="icon icon-tabler icon-tabler-settings"
// 									width={18}
// 									height={18}
// 									viewBox="0 0 24 24"
// 									strokeWidth="1.5"
// 									stroke="currentColor"
// 									fill="none"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								>
// 									<path stroke="none" d="M0 0h24v24H0z" />
// 									<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
// 									<circle cx={12} cy={12} r={3} />
// 								</svg>
// 								<span className="text-sm  ml-2">Settings</span>
// 							</div>
// 						</li>
// 					</ul>
// 					<div className="flex items-center mt-48 mb-4 px-8">
// 						<div className="w-10 h-10 bg-cover rounded-md mr-3">
// 							<img
// 								src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png"
// 								alt
// 								className="rounded-full h-full w-full overflow-hidden shadow"
// 							/>
// 						</div>
// 						<div>
// 							<p className="text-gray-600 text-sm font-medium">Steve Doe</p>
// 							<p className="text-gray-600 text-xs">View Profile</p>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="px-8 bg-indigo-800">
// 					<ul className="w-full flex items-center justify-between ">
// 						<li className="cursor-pointer text-white pt-5 pb-3">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-bell"
// 								width={20}
// 								height={20}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
// 								<path d="M9 17v1a3 3 0 0 0 6 0v-1" />
// 							</svg>
// 						</li>
// 						<li className="cursor-pointer text-white pt-5 pb-3">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-messages"
// 								width={20}
// 								height={20}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
// 								<path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
// 							</svg>
// 						</li>
// 						<li className="cursor-pointer text-white pt-5 pb-3">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-settings"
// 								width={20}
// 								height={20}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
// 								<circle cx={12} cy={12} r={3} />
// 							</svg>
// 						</li>
// 						<li className="cursor-pointer text-white pt-5 pb-3">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-archive"
// 								width={20}
// 								height={20}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<rect x={3} y={4} width={18} height={4} rx={2} />
// 								<path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
// 								<line x1={10} y1={12} x2={14} y2={12} />
// 							</svg>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 			<div
// 				className="text-gray-600 mr-8 visible sm:hidden relative"
// 				onclick="dropdownHandler(this)"
// 			>
// 				<ul className="p-y w-64 border-r bg-indigo-900 absolute rounded left-0 shadow mt-8 sm:mt-16 hidden">
// 					<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center py-3 px-2">
// 						<div className="flex items-center">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-grid"
// 								width={18}
// 								height={18}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<rect x={4} y={4} width={6} height={6} rx={1} />
// 								<rect x={14} y={4} width={6} height={6} rx={1} />
// 								<rect x={4} y={14} width={6} height={6} rx={1} />
// 								<rect x={14} y={14} width={6} height={6} rx={1} />
// 							</svg>
// 							<span className="text-sm  ml-2">Dashboard</span>
// 						</div>
// 					</li>
// 					<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
// 						<div className="flex items-center">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-puzzle"
// 								width={18}
// 								height={18}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
// 							</svg>
// 							<span className="text-sm  ml-2">Products</span>
// 						</div>
// 					</li>
// 					<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
// 						<div className="flex items-center">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-compass"
// 								width={18}
// 								height={18}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<polyline points="8 16 10 10 16 8 14 14 8 16" />
// 								<circle cx={12} cy={12} r={9} />
// 							</svg>
// 							<span className="text-sm  ml-2">Performance</span>
// 						</div>
// 					</li>
// 					<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
// 						<div className="flex items-center">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-code"
// 								width={20}
// 								height={20}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<polyline points="7 8 3 12 7 16" />
// 								<polyline points="17 8 21 12 17 16" />
// 								<line x1={14} y1={4} x2={10} y2={20} />
// 							</svg>
// 							<span className="text-sm  ml-2">Deliverables</span>
// 						</div>
// 					</li>
// 					<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center  px-2 py-3">
// 						<div className="flex items-center">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-puzzle"
// 								width={18}
// 								height={18}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
// 							</svg>
// 							<span className="text-sm  ml-2">Invoices</span>
// 						</div>
// 					</li>
// 					<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
// 						<div className="flex items-center">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-stack"
// 								width={18}
// 								height={18}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<polyline points="12 4 4 8 12 12 20 8 12 4" />
// 								<polyline points="4 12 12 16 20 12" />
// 								<polyline points="4 16 12 20 20 16" />
// 							</svg>
// 							<span className="text-sm  ml-2">Inventory</span>
// 						</div>
// 					</li>
// 					<li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
// 						<div className="flex items-center">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="icon icon-tabler icon-tabler-settings"
// 								width={18}
// 								height={18}
// 								viewBox="0 0 24 24"
// 								strokeWidth="1.5"
// 								stroke="currentColor"
// 								fill="none"
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 							>
// 								<path stroke="none" d="M0 0h24v24H0z" />
// 								<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
// 								<circle cx={12} cy={12} r={3} />
// 							</svg>
// 							<span className="text-sm  ml-2">Settings</span>
// 						</div>
// 					</li>
// 				</ul>
// 				<svg
// 					aria-label="Main Menu"
// 					aria-haspopup="true"
// 					xmlns="http://www.w3.org/2000/svg"
// 					className="icon icon-tabler icon-tabler-menu cursor-pointer"
// 					width={30}
// 					height={30}
// 					viewBox="0 0 24 24"
// 					strokeWidth="1.5"
// 					stroke="currentColor"
// 					fill="none"
// 					strokeLinecap="round"
// 					strokeLinejoin="round"
// 				>
// 					<path stroke="none" d="M0 0h24v24H0z" />
// 					<line x1={4} y1={8} x2={20} y2={8} />
// 					<line x1={4} y1={16} x2={20} y2={16} />
// 				</svg>
// 			</div>
// 			{/* Sidebar ends */}
// 			{/* Remove class [ h-64 ] when adding a card block */}
// 			<div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
// 				{/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
// 				<div className="w-full h-full rounded border-dashed border-2 border-gray-300">
// 					{/* Place your content here */}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Index;
