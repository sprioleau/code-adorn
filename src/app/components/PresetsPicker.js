import React from "react";
import Icon, { ICONS } from "./Icon";
import presets from "../utilities/presets";
import { updateTheme, updateScreenshotBg, togglePresetsPicker } from "../state-provider/actions/actionCreators";
import { selectPresetsPickerOpen } from "../state-provider/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { composeClasses } from "../utilities/functions/utilityFunctions";

const PresetsPicker = () => {
	const dispatch = useDispatch();
	const presetsPickerOpen = useSelector(selectPresetsPickerOpen);

	const handlePresetSelect = (theme, color) => {
		dispatch(updateTheme(theme));
		dispatch(updateScreenshotBg({ hex: color }));
	};

	const presetsPickerListClasses = {
		"presets-picker__list-wrapper": "",
		open: presetsPickerOpen,
	};

	return (
		<div className="presets-picker">
			<button className="btn square presets-picker__button" onClick={() => dispatch(togglePresetsPicker())}>
				<Icon icon={ICONS.PRESETS} size="md" />
			</button>
			<div className={composeClasses(presetsPickerListClasses)}>
				<ul className="presets-picker__list">
					{presets.map(({ color, theme, previewImageFilename }, index) => (
						<li
							key={`${theme}-${color}`}
							className="presets-picker__list-item"
							onClick={() => handlePresetSelect(theme, color)}
						>
							<img className="presets-picker__image" src={previewImageFilename} alt={`preset-${index}`} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PresetsPicker;
