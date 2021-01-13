import React, { useRef } from "react";
import { composeClasses } from "../utilities/utilityFunctions";
import useDismissOnOutsideClick from "../hooks/useDismissOnOutsideClick";
import { toggleLanguageDropdown, toggleThemeDropdown } from "../state-provider/actions/actionCreators";
import { useDispatch } from "react-redux";

const DropdownList = ({ listItems, value, open, addClass, labelOnClick, listItemOnClick, icon }) => {
	const dispatch = useDispatch();
	const dropdownRef = useRef(null);

	const dispatchFunction = () => {
		if (addClass === "language-picker") return toggleLanguageDropdown();
		if (addClass === "theme-picker") return toggleThemeDropdown();
	};

	useDismissOnOutsideClick(dropdownRef, open, () => dispatch(dispatchFunction()));

	const dropdownListClasses = {
		"dropdown-list": "",
		[addClass]: addClass ? true : null,
		expanded: open,
	};

	const displayedLabel = listItems.find((item) => item.name === value).label;

	return (
		<div className="dropdown-list-wrapper">
			<span className="label-icon">{icon}</span>
			<div ref={dropdownRef} className={composeClasses(dropdownListClasses)}>
				<div className="dropdown-list__label" onClick={labelOnClick}>
					{displayedLabel}
				</div>
				{open && (
					<ul className="dropdown-list__list">
						{listItems.map(({ name, label }) => (
							<li
								key={name}
								className={`list-item ${label === displayedLabel ? "selected" : ""}`}
								onClick={() => listItemOnClick(name)}
							>
								{label}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default DropdownList;
