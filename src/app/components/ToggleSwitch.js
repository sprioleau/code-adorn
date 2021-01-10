import React from "react";

const ToggleSwitch = ({ name, lineNumbersVisible, handleChangeLineNumberVisibility }) => {
	return (
		<div className="toggle-switch">
			<label className="toggle-switch-label" htmlFor={name} />
			<input
				type="checkbox"
				className="toggle-switch-checkbox"
				name={name}
				id={name}
				checked={lineNumbersVisible}
				onClick={handleChangeLineNumberVisibility}
				readOnly
			/>
		</div>
	);
};

export default ToggleSwitch;
