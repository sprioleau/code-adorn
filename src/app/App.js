import React, { useState } from "react";
import Hero from "./components/Hero";
import Toolbar from "./components/Toolbar";
import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";

const App = () => {
	const [codeString, setCodeString] = useState(`console.log("Hello World!");`);
	const [language, setLanguage] = useState("javascript");
	const [themeOption, setThemeOption] = useState("material");

	const handleChangeLanguage = (e) => {
		setLanguage(e.target.value);
	};

	const handleChangeTheme = (e) => {
		setThemeOption(e.target.value);
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
			/>
			<CodeEditor
				codeString={codeString}
				language={language}
				themeOption={themeOption}
				onBeforeChange={onBeforeChange}
			/>
			<Footer />
		</div>
	);
};

export default App;
