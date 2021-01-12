import React from "react";
import { composeClasses } from "../utilities/utilityFunctions";
import { updateLanguage, updateTheme } from "../state-provider/actions/actionCreators";
import { selectLanguage, selectTheme } from "../state-provider/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";

const DropdownList = ({ listItems, dropdownKey, addClass }) => {
	const language = useSelector(selectLanguage);
	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();

	const dropdownListClasses = {
		"dropdown-list": "",
		[addClass]: addClass ? true : null,
	};

	const componentProperties = {
		language: {
			function: (language) => updateLanguage(language),
			value: language,
		},
		theme: {
			function: (theme) => updateTheme(theme),
			value: theme,
		},
	};

	const onChange = (e) => {
		dispatch(componentProperties[dropdownKey].function(e.target.value));
	};

	return (
		<div className={composeClasses(dropdownListClasses)}>
			<select className="dropdown-list__list" value={componentProperties[dropdownKey].value} onChange={onChange}>
				{listItems.map(({ name, label }) => (
					<option key={name} value={name} className="list-item">
						{label}
					</option>
				))}
			</select>
		</div>
	);
};

export default DropdownList;
