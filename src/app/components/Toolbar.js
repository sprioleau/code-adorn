import React from "react";
import languageOptions from "../utilities/languageOptions";
import themeOptions from "../utilities/themeOptions";
import ToggleSwitch from "./ToggleSwitch";
import ColorPicker from "./ColorPicker";
import DropdownList from "./DropdownList";

import {
	selectScreenshotBg,
	selectLanguageDropdownOpen,
	selectThemeDropdownOpen,
} from "../state-provider/selectors/selectors";
import { useSelector } from "react-redux";

const Toolbar = ({ exportScreenshot }) => {
	const screenshotBg = useSelector(selectScreenshotBg);
	const languageDropdownOpen = useSelector(selectLanguageDropdownOpen);
	const themeDropdownOpen = useSelector(selectThemeDropdownOpen);

	return (
		<div className="toolbar">
			<DropdownList
				listItems={languageOptions}
				open={languageDropdownOpen}
				addClass="language-picker"
				dropdownKey="language"
			/>
			<DropdownList listItems={themeOptions} open={themeDropdownOpen} addClass="theme-picker" dropdownKey="theme" />
			<ToggleSwitch name="Line Numbers" />
			<ColorPicker screenshotBg={screenshotBg} />
			<button onClick={exportScreenshot}>Export Screenshot</button>
		</div>
	);
};

export default Toolbar;
