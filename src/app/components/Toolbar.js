import React from "react";
import languageOptions from "../utilities/languageOptions";
import { themeOptions } from "../utilities/themeOptions";
import ToggleLineNumbersButton from "./ToggleLineNumbersButton";
import RandomStyleButton from "./RandomStyleButton";
import ColorPicker from "./ColorPicker";
import DropdownList from "./DropdownList";
import SaveScreenshotButton from "./SaveScreenshotButton";
import Icon, { ICONS } from "./Icon";
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

const Toolbar = () => {
	const dispatch = useDispatch();
	const screenshotBg = useSelector(selectScreenshotBg);
	const language = useSelector(selectLanguage);
	const languageDropdownOpen = useSelector(selectLanguageDropdownOpen);
	const theme = useSelector(selectTheme);
	const themeDropdownOpen = useSelector(selectThemeDropdownOpen);

	return (
		<div className="toolbar">
			<div className="row dropdowns">
				<DropdownList
					listItems={languageOptions}
					value={language}
					open={languageDropdownOpen}
					addClass="language-picker"
					labelOnClick={() => dispatch(toggleLanguageDropdown())}
					listItemOnClick={(item) => dispatch(updateLanguage(item))}
					icon={<Icon icon={ICONS.GLOBE} size="md" />}
				/>
				<DropdownList
					listItems={themeOptions}
					value={theme}
					open={themeDropdownOpen}
					addClass="theme-picker"
					labelOnClick={() => dispatch(toggleThemeDropdown())}
					listItemOnClick={(item) => dispatch(updateTheme(item))}
					icon={<Icon icon={ICONS.STYLE} size="md" />}
				/>
			</div>
			<div className="row export-options">
				<div className="style-options">
					<ToggleLineNumbersButton />
					<RandomStyleButton />
					<ColorPicker screenshotBg={screenshotBg} />
				</div>
				<SaveScreenshotButton />
			</div>
		</div>
	);
};

export default Toolbar;
