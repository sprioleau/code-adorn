import React from "react";
import { composeClasses } from "../utilities/utilityFunctions";

const DropdownList = ({ listItems, value, open, addClass, labelOnClick, listItemOnClick }) => {
	const dropdownListClasses = {
		"dropdown-list": "",
		[addClass]: addClass ? true : null,
	};

	return (
		<div className={composeClasses(dropdownListClasses)}>
			<div className="dropdown-list__label" onClick={labelOnClick}>
				{value}
			</div>
			{open && (
				<ul className="dropdown-list__list">
					{listItems.map(({ name, label }) => (
						<li key={name} className="list-item" onClick={() => listItemOnClick(name)}>
							{label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DropdownList;
