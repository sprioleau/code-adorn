import React from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ screenshotBg, handleUpdateScreenshotBg }) => {
	const onChangeComplete = (color) => {
		handleUpdateScreenshotBg(color);
	};

	return (
		<div>
			<SketchPicker color={screenshotBg} onChangeComplete={onChangeComplete} />
		</div>
	);
};

export default ColorPicker;
