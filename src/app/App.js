import React, { useEffect } from "react";
import html2canvas from "html2canvas";
import Hero from "./components/Hero";
import Toolbar from "./components/Toolbar";
import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";
import { shortFormatDate } from "./utilities/utilityFunctions";
import DropdownList from "./components/DropdownList";
import { themeOptions } from "./utilities/themeOptions";
import "./styles/app.scss";

// CodeMirror Style Imports
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/material-darker.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/base16-light.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/blackboard.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/hopscotch.css";
import "codemirror/theme/3024-night.css";
import "codemirror/theme/lucario.css";

// CodeMirror Mode Imports
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/sass/sass";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/markdown/markdown";

import { updateTheme, updateScreenshotDataUrl } from "./state-provider/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, selectScreenshotDataUrl } from "./state-provider/selectors/selectors";

const App = () => {
	const dispatch = useDispatch();
	const language = useSelector(selectLanguage);
	const screenshotDataUrl = useSelector(selectScreenshotDataUrl);

	const createScreenshot = async () => {
		const canvas = await html2canvas(document.querySelector(".code-editor-window-ui"));
		const dataUrl = canvas.toDataURL("image/png");
		dispatch(updateScreenshotDataUrl(dataUrl));
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
			<a
				id="download"
				href={screenshotDataUrl}
				style={{ display: "none" }}
				download={`code-adorn-screenshot-${language}-${shortFormatDate(new Date())}.png`}
			>
				Download Screenshot
			</a>
			<Toolbar exportScreenshot={exportScreenshot} />
			<DropdownList listItems={themeOptions} onClick={(item) => dispatch(updateTheme(item))} />
			<CodeEditor />
			<Footer />
		</div>
	);
};

export default App;
