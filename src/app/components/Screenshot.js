import React from "react";
import { useSelector } from "react-redux";

const Screenshot = () => {
	const url = useSelector((state) => state.screenshotUrl);
	return <img src={url} alt="code-adorn-screenshot" width="100%" />;
};

export default Screenshot;
