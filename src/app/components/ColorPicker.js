import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { updateScreenshotBg } from "../state-provider/actions/actionCreators";
import { selectScreenshotBg } from "../state-provider/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";

const ColorPicker = () => {
	const [colorPickerOpen, setColorPickerOpen] = useState(false);
	const dispatch = useDispatch();
	const screenshotBg = useSelector(selectScreenshotBg);

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
			{colorPickerOpen && (
				<SketchPicker color={screenshotBg} onChangeComplete={(color) => dispatch(updateScreenshotBg(color))} />
			)}
		</div>
	);
};

export default ColorPicker;
