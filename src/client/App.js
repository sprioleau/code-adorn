import React, { useState } from "react";
import html2canvas from "html2canvas";
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

	const createScreenshot = () => {
		html2canvas(document.querySelector(".code-editor-window-ui")).then((canvas) => {
			// document.querySelector(".hero").appendChild(canvas); // Add this preview to a modal
			const canvasDataUrl = canvas.toDataURL("image/png");
			setScreenshotDataUrl(canvasDataUrl);
		});
	};

	return (
		<div className="app-container">
			<Hero />
			<button onClick={createScreenshot}>Take Screenshot</button>
			{screenshotDataUrl !== "/" && (
				<a id="download" download="code-adorn-screenshot.png" href={screenshotDataUrl}>
					Download to code-adorn-screenshot.png
				</a>
			)}
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
