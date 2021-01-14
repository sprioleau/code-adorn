import React from "react";
import Icon, { ICONS } from "./Icon";
import presets from "../utilities/presets";
import { updateTheme, updateScreenshotBg, togglePresetsPicker } from "../state-provider/actions/actionCreators";
import { selectPresetsPickerOpen } from "../state-provider/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";

const PresetsPicker = () => {
	const dispatch = useDispatch();
	const presetsPickerOpen = useSelector(selectPresetsPickerOpen);

	const handlePresetSelect = (theme, color) => {
		dispatch(updateTheme(theme));
		dispatch(updateScreenshotBg({ hex: color }));
	};

	return (
		<div className="presets-picker">
			<button className="btn square presets-picker__button" onClick={() => dispatch(togglePresetsPicker())}>
				<Icon icon={ICONS.PRESETS} size="md" />
			</button>
			{presetsPickerOpen && (
				<div className="presets-picker__list-wrapper">
					<ul className="presets-picker__list">
						{presets.map(({ color, theme, previewImageFilename }, index) => (
							<li
								key={`${theme}-${color}`}
								className="presets-picker__list-item"
								onClick={() => handlePresetSelect(theme, color)}
							>
								<img
									className="presets-picker__image"
									src={`../images/presets/${previewImageFilename}`}
									alt={`preset-${index}`}
								/>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default PresetsPicker;
