import React, { useState } from "react";
import { toTitleCase, composeClasses } from "../utilities/utilityFunctions";
import { selectTheme } from "../state-provider/selectors/selectors";
import { useSelector } from "react-redux";

const DropdownList = ({ listItems, addClass, onClick }) => {
	const [open, setOpen] = useState(false);

	const theme = useSelector(selectTheme);

	const handleOpen = () => setOpen(!open);

	const dropdownListClasses = {
		"dropdown-list": "",
		[addClass]: addClass ? true : null,
	};

	return (
		<div className={composeClasses(dropdownListClasses)}>
			<input
				autoComplete="off"
				value={theme}
				placeholder={toTitleCase(theme)}
				spellCheck={false}
				className="dropdown-list-label"
				readOnly={true}
				onClick={handleOpen}
			/>
			{open && (
				<ul className="dropdown-list__list">
					{listItems.map((item) => (
						<li key={item} className="dropdown-list__list-item" onClick={() => onClick(item)}>
							{toTitleCase(item)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DropdownList;
