import React from "react";
import languageOptions from "../utilities/languageOptions";

export const LanguageSelect = ({ language, handleLanguageChange }) => {
	return (
		<div>
			<label htmlFor="theme-picker">Language: </label>
			<select name="theme-picker" id="theme-picker" value={language} onChange={handleLanguageChange}>
				{languageOptions.map(({ name, label }) => (
					<option key={name} value={name}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};

export const LanguageTag = ({ language }) => {
	const label = languageOptions.find((item) => item.name === language).label;

	return <span className="language-tag">{label}</span>;
};

export default LanguageSelect;
