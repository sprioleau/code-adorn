import React from "react";
import LanguageSelect from "./LanguageSelect";
import ThemeSelect from "./ThemeSelect";
import ToggleSwitch from "./ToggleSwitch";

const Toolbar = ({
	language,
	themeOption,
	handleChangeLanguage,
	handleChangeTheme,
	lineNumbersVisible,
	handleChangeLineNumberVisibility,
}) => {
	return (
		<div className="toolbar">
			<LanguageSelect language={language} handleLanguageChange={handleChangeLanguage} />
			<ThemeSelect themeOption={themeOption} handleThemeChange={handleChangeTheme} />
			<span>
				Show Line Numbers:{" "}
				<ToggleSwitch
					name="Line Numbers"
					lineNumbersVisible={lineNumbersVisible}
					handleChangeLineNumberVisibility={handleChangeLineNumberVisibility}
				/>
			</span>
		</div>
	);
};

export default Toolbar;
