import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ screenshotBg, handleUpdateScreenshotBg }) => {
	const [colorPickerOpen, setColorPickerOpen] = useState(false);

	const onChangeComplete = (color) => {
		handleUpdateScreenshotBg(color);
	};

	const handleToggleColorPicker = () => {
		setColorPickerOpen(!colorPickerOpen);
	};

	const styles = {
		currentColor: {
			backgroundColor: screenshotBg.hex,
		},
	};

	return (
		<div className="color-picker">
			<div className="color-picker__button" onClick={handleToggleColorPicker}>
				<div className="current-color" style={styles.currentColor} />
			</div>
			{colorPickerOpen && <SketchPicker color={screenshotBg} onChangeComplete={onChangeComplete} />}
		</div>
	);
};

export default ColorPicker;
