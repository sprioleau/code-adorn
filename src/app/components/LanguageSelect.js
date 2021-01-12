import React from "react";
import languageOptions from "../utilities/languageOptions";
import { updateLanguage } from "../state-provider/actions/actionCreators";
import { selectLanguage } from "../state-provider/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";

export const LanguageSelect = () => {
	const dispatch = useDispatch();
	const language = useSelector(selectLanguage);

	return (
		<div>
			<label htmlFor="theme-picker">Language: </label>
			<select
				name="theme-picker"
				id="theme-picker"
				value={language}
				onChange={(e) => dispatch(updateLanguage(e.target.value))}
			>
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
