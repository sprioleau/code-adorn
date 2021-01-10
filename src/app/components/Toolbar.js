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
			<span>
				Show Line Numbers:{" "}
				<ToggleSwitch
					name="Line Numbers"
					lineNumbersVisible={lineNumbersVisible}
					handleChangeLineNumberVisibility={handleChangeLineNumberVisibility}
				/>
			</span>
			<ColorPicker screenshotBg={screenshotBg} handleUpdateScreenshotBg={handleUpdateScreenshotBg} />
		</div>
	);
};

export default Toolbar;
