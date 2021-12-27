import Simple from "../../components/pricing/Simple";
import RightAligned from "../../components/pricing/RightAligned";

const index = () => {
	return (
		<section className="px-7 pt-14">
			<div className="text-center flex flex-col items-center justify-center gap-4">
				<h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3">
					Our Pricing For You
				</h2>
				<h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3">
					Make the most out of this opportunity get busy
				</h2>
				<h2 className="max-w-[817px] text-gray-400 dark:text-gray-300">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
					tristique pellentesque a nibh at in nibh et. Et nulla cursus quis
					etiam iaculis sit. Sed tristique libero nunc tincidunt ornare.
				</h2>
			</div>

			<div>
				<Simple />
			</div>
			<div className="text-center mt-24">
				<h1 className="text-4xl font-semibold dark:text-gray-300">
					Start 14 Day Trial
				</h1>
				<h1 className="font-medium text-gray-500 mt-3 dark:text-gray-300">
					Get Started, no Credit Card Required
				</h1>
			</div>
			<div>
				<RightAligned />
			</div>
		</section>
	);
};

export default index;
