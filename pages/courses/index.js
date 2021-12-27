import Card from "../../components/courses/Card";

const index = () => {
	const makeCards = () => {
		const arr = [1, 2, 3, 4, 5, 6];
		return arr.map((item, i) => {
			return <Card key={i} />;
		});
	};
	return (
		<section className="px-7 pt-14">
			<div className="w-full bg-gradient-to-r from-gr-1 via-gr-2 to-gr-3 text-white  py-20 px-28 text-center rounded-3xl">
				<h1 className="font-medium text-2xl">Make It Easy</h1>
				<h1 className="font-semibold mt-6 text-4xl">
					Experience Fun Learning and Experience Adventure
				</h1>
				<p className="text-base mt-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
					tristique pellentesque a nibh at in nibh et. Et nulla cursus quis
					etiam iaculis sit. Sed tristique libero nunc tincidunt ornare.
				</p>
			</div>
			<div className="flex justify-center flex-wrap">{makeCards()}</div>
		</section>
	);
};

export default index;
