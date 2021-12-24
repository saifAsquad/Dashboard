import Form from "../../components/form/Form.js";

const index = () => {
	return (
		<section className="px-7 pt-14">
			<div className="mb-6">
				<h1 className=" text-3xl text-gray-700 font-bold">Form</h1>
				<p className="text-lg text-gray-600">
					Provide feedback and help us improve.
				</p>
			</div>
			<Form />
		</section>
	);
};

export default index;
