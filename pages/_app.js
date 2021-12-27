import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { useState, useEffect } from "react";

import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		const classes = document.body.classList;
		if (darkMode) {
			{
				classes.add("dark");
			}
		} else {
			classes.remove("dark");
		}
	}, [darkMode]);

	return (
		<>
			<div className="flex flex-row  h-max dark:bg-gray-900">
				<Navigation />
				<div className="w-full">
					<Header darkMode={darkMode} setDarkMode={setDarkMode} />
					<Component {...pageProps} darkMode={darkMode} />
				</div>
			</div>
		</>
	);
}

export default MyApp;
