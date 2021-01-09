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

	return (
		<div className="app-container">
			<Hero />
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
