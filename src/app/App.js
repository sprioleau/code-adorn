import React from "react";
import html2canvas from "html2canvas";
import Hero from "./components/Hero";
import Toolbar from "./components/Toolbar";
import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";
// import { shortFormatDate } from "./utilities/utilityFunctions";
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

// import { updateScreenshotDataUrl } from "./state-provider/actions/actionCreators";
import { useSelector } from "react-redux";
import { selectScreenshotDataUrl, selectScreenshotBg } from "./state-provider/selectors/selectors";

const App = () => {
	// const dispatch = useDispatch();
	const screenshotBg = useSelector(selectScreenshotBg);
	const screenshotDataUrl = useSelector(selectScreenshotDataUrl);

	const saveData = (blob, fileName) => {
		const a = document.createElement("a");
		document.body.appendChild(a);
		a.style = "display: none";

		const url = window.URL.createObjectURL(blob);
		a.href = url;
		a.download = fileName;
		a.click();
		window.URL.revokeObjectURL(url);
	};

	const saveScreenshot = () => {
		saveData(screenshotDataUrl, "download.png");
	};

	const createScreenshot = async () => {
		const canvas = await html2canvas(document.querySelector(".code-editor-container"), {
			backgroundColor: screenshotBg,
		});
		// const dataUrl = canvas.toDataURL("image/png", 1);
		canvas.toBlob((blob) => saveData(blob, "download.png"));
		// dispatch(updateScreenshotDataUrl(dataUrl));
	};

	const exportScreenshot = async () => {
		await createScreenshot();
		// document.getElementById("download").click();
	};

	// useEffect(() => {
	// 	createScreenshot();
	// 	// eslint-disable-next-line
	// }, []);

	return (
		<section className="app-container">
			<main>
				<Hero />
				<button className="btn" onClick={saveScreenshot}>
					Save Screenshot
				</button>
				<div className="main-content">
					<Toolbar exportScreenshot={exportScreenshot} />
					<CodeEditor />
				</div>
			</main>
			<Footer />
			{/* <ScreenshotTarget /> */}
		</section>
	);
};

// const ScreenshotTarget = () => {
// 	const language = useSelector(selectLanguage);
// 	const screenshotDataUrl = useSelector(selectScreenshotDataUrl);

// 	return (
// 		<a
// 			id="download"
// 			href={screenshotDataUrl}
// 			style={{ display: "none" }}
// 			download={`code-adorn-screenshot-${language}-${shortFormatDate(new Date())}.png`}
// 		>
// 			Download Screenshot
// 		</a>
// 	);
// };

export default App;
