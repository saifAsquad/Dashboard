import { Fragment } from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="flex flex-row  h-max">
			<Navigation />
			<div className="w-full">
				<Header />
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
