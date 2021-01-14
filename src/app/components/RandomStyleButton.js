import React from "react";
import Icon, { ICONS } from "../components/Icon";
import { randomItemFromArray } from "../utilities/functions/utilityFunctions";
import themeOptions, { randomColorPickerOptions } from "../utilities/themeOptions";
import { updateTheme, updateScreenshotBg } from "../state-provider/actions/actionCreators";
import { useDispatch } from "react-redux";

const RandomStyleButton = () => {
	const dispatch = useDispatch();

	const setRandomStyle = () => {
		dispatch(updateTheme(randomItemFromArray(themeOptions).name));
		dispatch(updateScreenshotBg({ hex: randomItemFromArray(randomColorPickerOptions) }));
	};

	return (
		<button className="btn square random-style" onClick={setRandomStyle}>
			<Icon icon={ICONS.RANDOM_STYLE} size="md" />
		</button>
	);
};

export default RandomStyleButton;
