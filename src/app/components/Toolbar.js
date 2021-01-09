import React from "react";
import LanguageSelect from "./LanguageSelect";
import ThemeSelect from "./ThemeSelect";

const Toolbar = ({ language, themeOption, handleChangeLanguage, handleChangeTheme }) => {
	return (
		<div className="toolbar">
			<LanguageSelect language={language} handleLanguageChange={handleChangeLanguage} />
			<ThemeSelect themeOption={themeOption} handleThemeChange={handleChangeTheme} />
		</div>
	);
};

export default Toolbar;
