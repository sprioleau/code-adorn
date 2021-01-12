import React from "react";
import { SketchPicker } from "react-color";
import { updateScreenshotBg, toggleColorPicker } from "../state-provider/actions/actionCreators";
import { selectScreenshotBg, selectColorPickerOpen } from "../state-provider/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";

const ColorPicker = () => {
	const dispatch = useDispatch();
	const screenshotBg = useSelector(selectScreenshotBg);
	const colorPickerOpen = useSelector(selectColorPickerOpen);

	const styles = {
		currentColor: {
			backgroundColor: screenshotBg.hex,
		},
	};

	return (
		<div className="color-picker">
			<div className="color-picker__button" onClick={() => dispatch(toggleColorPicker())}>
				<div className="current-color" style={styles.currentColor} />
			</div>
			{colorPickerOpen && (
				<SketchPicker color={screenshotBg} onChangeComplete={(color) => dispatch(updateScreenshotBg(color))} />
			)}
		</div>
	);
};

export default ColorPicker;
