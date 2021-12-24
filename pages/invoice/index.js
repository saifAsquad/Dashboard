import Table from "../../components/finance/Table.js";
import List from "../../components/invoice/List.js";

const index = () => {
	return (
		<section className="px-7 pt-14">
			<List />
			<br />
			<br />
			<br />
			<Table />
		</section>
	);
};

export default index;
