import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import Hero from "./components/Hero";
import Toolbar from "./components/Toolbar";
import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";
import codeSnippets from "./utilities/codeSnippets";
import { shortFormatDate, randomIndex } from "./utilities/utilityFunctions";

// Code Mirror mode/language options
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/sass/sass";
import "codemirror/mode/markdown/markdown";

const App = () => {
	const [codeString, setCodeString] = useState(codeSnippets.javascript[randomIndex(codeSnippets.javascript)]);
	const [language, setLanguage] = useState("javascript");
	const [themeOption, setThemeOption] = useState("material");
	const [lineNumbersVisible, setLineNumbersVisible] = useState(true);
	const [screenshotBg, setScreenshotBg] = useState({ hex: "#ffcd31" });
	const [screenshotDataUrl, setScreenshotDataUrl] = useState("/");

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

	const createScreenshot = async () => {
		const canvas = await html2canvas(document.querySelector(".code-editor-window-ui"));
		const dataUrl = canvas.toDataURL("image/png");
		setScreenshotDataUrl(dataUrl);
	};

	const exportScreenshot = async () => {
		await createScreenshot();
		document.getElementById("download").click();
	};

	useEffect(() => {
		createScreenshot();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="app-container">
			<Hero />
			<button onClick={exportScreenshot}>Export Screenshot</button>
			<a
				id="download"
				href={screenshotDataUrl}
				style={{ display: "none" }}
				download={`code-adorn-screenshot-${language}-${shortFormatDate()}`}
			>
				Download Screenshot
			</a>
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
