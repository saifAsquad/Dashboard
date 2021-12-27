import Form from "../../components/form/Form.js";

const index = () => {
	return (
		<section className="px-7 pt-14 dark:bg-gray-800 ml-2 mt-2">
			<div className="mb-6">
				<h1 className=" text-3xl dark:text-gray-200 text-gray-700 font-bold">
					Form
				</h1>
				<p className="text-lg dark:text-gray-200 text-gray-600">
					Provide feedback and help us improve.
				</p>
			</div>
			<Form />
		</section>
	);
};

export default index;
