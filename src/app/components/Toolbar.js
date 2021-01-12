import React from "react";
import LanguageSelect from "./LanguageSelect";
import ToggleSwitch from "./ToggleSwitch";
import ColorPicker from "./ColorPicker";
import { selectLanguage, selectScreenshotBg } from "../state-provider/selectors/selectors";
import { useSelector } from "react-redux";

const Toolbar = ({ exportScreenshot }) => {
	const language = useSelector(selectLanguage);
	const screenshotBg = useSelector(selectScreenshotBg);

	return (
		<div className="toolbar">
			<LanguageSelect language={language} />
			<ToggleSwitch name="Line Numbers" />
			<ColorPicker screenshotBg={screenshotBg} />
			<button onClick={exportScreenshot}>Export Screenshot</button>
		</div>
	);
};

export default Toolbar;
