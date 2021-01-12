import React from "react";
import languageOptions from "../utilities/languageOptions";
import { themeOptions } from "../utilities/themeOptions";
import ToggleSwitch from "./ToggleSwitch";
import ColorPicker from "./ColorPicker";
import DropdownList from "./DropdownList";
import {
	updateLanguage,
	toggleLanguageDropdown,
	updateTheme,
	toggleThemeDropdown,
} from "../state-provider/actions/actionCreators";
import {
	selectLanguage,
	selectTheme,
	selectScreenshotBg,
	selectLanguageDropdownOpen,
	selectThemeDropdownOpen,
} from "../state-provider/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";

const Toolbar = ({ exportScreenshot }) => {
	const dispatch = useDispatch();
	const screenshotBg = useSelector(selectScreenshotBg);
	const language = useSelector(selectLanguage);
	const languageDropdownOpen = useSelector(selectLanguageDropdownOpen);
	const theme = useSelector(selectTheme);
	const themeDropdownOpen = useSelector(selectThemeDropdownOpen);

	return (
		<div className="toolbar">
			<DropdownList
				listItems={languageOptions}
				value={languageOptions.find((item) => item.name === language).label}
				open={languageDropdownOpen}
				addClass="language-picker"
				labelOnClick={() => dispatch(toggleLanguageDropdown())}
				listItemOnClick={(item) => dispatch(updateLanguage(item))}
			/>
			<DropdownList
				listItems={themeOptions}
				value={themeOptions.find((item) => item.name === theme).label}
				open={themeDropdownOpen}
				addClass="theme-picker"
				labelOnClick={() => dispatch(toggleThemeDropdown())}
				listItemOnClick={(item) => dispatch(updateTheme(item))}
			/>
			<ToggleSwitch name="Line Numbers" />
			<ColorPicker screenshotBg={screenshotBg} />
			<button onClick={exportScreenshot}>Export Screenshot</button>
		</div>
	);
};

export default Toolbar;
