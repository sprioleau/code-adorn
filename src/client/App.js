import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import Hero from "./components/Hero";
import Toolbar from "./components/Toolbar";
import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";
import codeSnippets from "./utilities/codeSnippets";

const App = () => {
	const randomIndex = Math.floor(Math.random() * codeSnippets.length);

	const [codeString, setCodeString] = useState(codeSnippets[randomIndex]);
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

	const downloadScreenshot = () => {
		const downloadButton = document.createElement("a");
		downloadButton.href = screenshotDataUrl;
		downloadButton.setAttribute("download", "code-adorn-screenshot.png");
		downloadButton.style.display = "none";
		document.body.appendChild(downloadButton);
		downloadButton.click();
	};

	const createScreenshot = async (downloadImage) => {
		const canvas = await html2canvas(document.querySelector(".code-editor-window-ui"));
		const dataUrl = canvas.toDataURL("image/png");
		setScreenshotDataUrl(dataUrl);

		if (downloadImage) downloadScreenshot();
	};

	useEffect(() => {
		createScreenshot();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="app-container">
			<Hero />
			<button onClick={() => createScreenshot(false)}>Take Screenshot</button>
			<button onClick={() => createScreenshot(true)}>Download Screenshot</button>
			{screenshotDataUrl !== "/" && (
				<a id="download" download="code-adorn-screenshot.png" style={{ display: "none" }} href={screenshotDataUrl}>
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
