import React from "react";
import { composeClasses } from "../utilities/functions/utilityFunctions";

import { ReactComponent as GlobeIcon } from "../images/icons/globe.svg";
import { ReactComponent as LineNumbersIcon } from "../images/icons/line-numbers.svg";
import { ReactComponent as StyleIcon } from "../images/icons/style.svg";

export const ICONS = {
	GLOBE: <GlobeIcon />,
	LINE_NUMBERS: <LineNumbersIcon />,
	STYLE: <StyleIcon />,
};

export const Icon = ({ icon, iconClass, size, onClick }) => {
	const iconClasses = {
		icon: "",
		[iconClass]: iconClass ? true : null,
		[size]: size ? true : null,
	};

	return (
		<span className={composeClasses(iconClasses)} onClick={onClick ? onClick : null}>
			{icon}
		</span>
	);
};

export default Icon;
