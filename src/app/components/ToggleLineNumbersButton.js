import React from "react";
import Icon, { ICONS } from "./Icon";
import { toggleLineNumbersVisibility } from "../state-provider/actions/actionCreators";
import { useDispatch } from "react-redux";

const ToggleLineNumbersButton = () => {
	const dispatch = useDispatch();

	return (
		<button className="btn line-numbers square" onClick={() => dispatch(toggleLineNumbersVisibility())}>
			<Icon icon={ICONS.LINE_NUMBERS} size="md" />
		</button>
	);
};

export default ToggleLineNumbersButton;
