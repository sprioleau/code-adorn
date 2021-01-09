import React from "react";

const ToggleSwitch = ({ name, lineNumbersVisible, handleChangeLineNumberVisibility }) => {
	return (
		<div className="toggle-switch">
			<input
				type="checkbox"
				className="toggle-switch-checkbox"
				name={name}
				id={name}
				checked={lineNumbersVisible}
				onClick={handleChangeLineNumberVisibility}
			/>
			<label className="toggle-switch-label" htmlFor={name}>
				<span className="toggle-switch-inner" />
				<span className="toggle-switch-switch" />
			</label>
		</div>
	);
};

export default ToggleSwitch;
