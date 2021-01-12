import React from "react";
import { toggleLineNumbersVisibility } from "../state-provider/actions/actionCreators";
import { selectLineNumbersVisible } from "../state-provider/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";

const ToggleSwitch = ({ name }) => {
	const dispatch = useDispatch();
	const lineNumbersVisible = useSelector(selectLineNumbersVisible);

	return (
		<div className="toggle-switch">
			<label className="toggle-switch-label" htmlFor={name}>
				Show Line Numbers:{" "}
			</label>
			<input
				type="checkbox"
				className="toggle-switch-checkbox"
				name={name}
				id={name}
				checked={lineNumbersVisible}
				onClick={() => dispatch(toggleLineNumbersVisibility())}
				readOnly
			/>
		</div>
	);
};

export default ToggleSwitch;
