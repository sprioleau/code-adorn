import React from "react";
import LanguageSelect from "./LanguageSelect";
import ThemeSelect from "./ThemeSelect";
import ToggleSwitch from "./ToggleSwitch";
import ColorPicker from "./ColorPicker";

const Toolbar = ({
	language,
	themeOption,
	handleChangeLanguage,
	handleChangeTheme,
	lineNumbersVisible,
	handleChangeLineNumberVisibility,
	screenshotBg,
	handleUpdateScreenshotBg,
}) => {
	return (
		<div className="toolbar">
			<ThemeSelect themeOption={themeOption} handleThemeChange={handleChangeTheme} />
			<LanguageSelect language={language} handleLanguageChange={handleChangeLanguage} />
			<ToggleSwitch
				name="Line Numbers"
				lineNumbersVisible={lineNumbersVisible}
				handleChangeLineNumberVisibility={handleChangeLineNumberVisibility}
			/>
			<ColorPicker screenshotBg={screenshotBg} handleUpdateScreenshotBg={handleUpdateScreenshotBg} />
		</div>
	);
};

export default Toolbar;
