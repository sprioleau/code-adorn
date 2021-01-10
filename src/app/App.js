import React, { useState } from "react";
import Hero from "./components/Hero";
import Toolbar from "./components/Toolbar";
import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";

const App = () => {
	const [codeString, setCodeString] = useState(`console.log("Hello World!");`);
	const [language, setLanguage] = useState("javascript");
	const [themeOption, setThemeOption] = useState("material");
	const [lineNumbersVisible, setLineNumbersVisible] = useState(true);
	const [screenshotBg, setScreenshotBg] = useState({ hex: "#ffcd31" });
	const [screenshotUrl, setScreenshotUrl] = useState(null);

	const handleUpdateScreenshotBg = (color) => {
		setScreenshotBg(color);
	};

	const handleChangeLanguage = (e) => {
		setLanguage(e.target.value);
	};

	const handleChangeTheme = (e) => {
		setThemeOption(e.target.value);
	};

	const handleChangeLineNumberVisibility = () => {
		setLineNumbersVisible(!lineNumbersVisible);
	};

	const onBeforeChange = (editor, data, value) => {
		setCodeString(value);
	};

	// const FETCH_URL = "code-adorn.netlify.app";

	// const screenshotApiOptions = [
	// 	// { width: "500" },
	// 	// { height: "500" },
	// 	{ output: "image" },
	// 	{ fresh: "true" },
	// 	{ selector: ".code-editor-wrapper" },
	// ];

	// const screenshotApiOptionsString = screenshotApiOptions
	// 	.map((option) => {
	// 		return Object.entries(option).flat().join("=");
	// 	})
	// 	.join("&");

	// const getScreenshot = async () => {
	// 	const response = await fetch(
	// 		`https://screenshotapi.net/api/v1/screenshot?token=${process.env.REACT_APP_SCREENSHOT_API_KEY}&url=${FETCH_URL}&${screenshotApiOptionsString}`
	// 		// fetchOptions
	// 	);
	// 	// const screenshot = response.data.screenshot;
	// 	console.log(response);
	// };

	const getScreenshot = async () => {
		const response = await fetch("/api", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		const json = await response.json();
		const url = json.url;
		setScreenshotUrl(url);
	};

	return (
		<div className="app-container">
			<Hero />
			<button onClick={getScreenshot}>Get Screenshot</button>
			{screenshotUrl && <img src={screenshotUrl} alt="screenshot from code-adorn" />}
			<Toolbar
				language={language}
				themeOption={themeOption}
				handleChangeLanguage={handleChangeLanguage}
				handleChangeTheme={handleChangeTheme}
				lineNumbersVisible={lineNumbersVisible}
				handleChangeLineNumberVisibility={handleChangeLineNumberVisibility}
				screenshotBg={screenshotBg}
				handleUpdateScreenshotBg={handleUpdateScreenshotBg}
			/>
			<CodeEditor
				codeString={codeString}
				language={language}
				themeOption={themeOption}
				onBeforeChange={onBeforeChange}
				lineNumbersVisible={lineNumbersVisible}
				screenshotBg={screenshotBg}
			/>
			<Footer />
		</div>
	);
};

export default App;
