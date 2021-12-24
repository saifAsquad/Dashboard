import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const repeatingStyles = {
	listItem:
		"w-full text-font-primary hover:text-white cursor-pointer text-sm p-[13px] pl-8",
};

const Navigation = () => {
	const checkActive = (path) => {
		return path === "/" ? "gradient-1" : "";
	};

	const Active = checkActive(useRouter().pathname);

	return (
		<div className="lg:w-80 flex flex-col  justify-between  shadow-md ">
			{/* Main NAvigation */}
			<nav>
				<div className="mb-24  p-[35px] ">
					{/* Logo, 2 div's for cursor */}
					<div className="cursor-pointer">
						<Image src="/svgs/navigation/logo.svg" width={144} height={29} />
					</div>
				</div>
				<ul>
					<h1 className="w-full h-10 pl-8 text-font-primary text-sm">
						<Image
							src="/svgs/navigation/dashboard-icon.svg"
							width={16}
							height={16}
						/>
						{"  "}
						Dashboard
					</h1>
					<Link href="/">
						<li className={`${repeatingStyles.listItem} ${Active}`}>
							<Image
								src="/svgs/navigation/project-icon.svg"
								width={16}
								height={16}
							/>{" "}
							Project
						</li>
					</Link>
					<Link href="/analytics">
						<li className={`${repeatingStyles.listItem}`}>
							<Image
								src="/svgs/navigation/analytics-icon.svg"
								width={16}
								height={16}
							/>{" "}
							Analytics
						</li>
					</Link>
					<Link href="/finance">
						<li className={repeatingStyles.listItem}>
							<Image
								src="/svgs/navigation/finance-icon.svg"
								width={16}
								height={16}
							/>{" "}
							Finance
						</li>
					</Link>
					<Link href="/tasks">
						<li className={repeatingStyles.listItem}>
							<Image
								src="/svgs/navigation/tasks-icon.svg"
								width={16}
								height={16}
							/>{" "}
							Tasks
						</li>
					</Link>
					<Link href="/courses">
						<li className={repeatingStyles.listItem}>
							<Image
								src="/svgs/navigation/courses-icon.svg"
								width={16}
								height={16}
							/>{" "}
							Courses
						</li>
					</Link>
					<Link href="/tailwind-css">
						<li className={repeatingStyles.listItem}>
							<Image
								src="/svgs/navigation/tailwind-icon.svg"
								width={16}
								height={16}
							/>{" "}
							Tailwind CSS
						</li>
					</Link>
					<Link href="/pricing">
						<li className={repeatingStyles.listItem}>
							<Image
								src="/svgs/navigation/pricing-icon.svg"
								width={16}
								height={16}
							/>{" "}
							Pricing
						</li>
					</Link>
					<Link href="/faq">
						<li className={repeatingStyles.listItem}>
							<Image
								src="/svgs/navigation/faq-icon.svg"
								width={16}
								height={16}
							/>{" "}
							FAQ
						</li>
					</Link>
					<Link href="/contact">
						<li className={repeatingStyles.listItem}>
							<Image
								src="/svgs/navigation/contact-icon.svg"
								width={16}
								height={16}
							/>{" "}
							Contact
						</li>
					</Link>
					<Link href="/form">
						<li className={repeatingStyles.listItem}>
							<Image
								src="/svgs/navigation/form-icon.svg"
								width={16}
								height={16}
							/>{" "}
							Form
						</li>
					</Link>
					<Link href="/invoice">
						<li className={repeatingStyles.listItem}>
							<Image
								src="/svgs/navigation/invoice-icon.svg"
								width={16}
								height={16}
							/>{" "}
							Invoice
						</li>
					</Link>
				</ul>
			</nav>
			{/* Bottom Box of the Navigation */}
			<div className="p-4 gradient-1 flex flex-row justify-evenly ">
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
