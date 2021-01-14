import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Screenshot = () => {
	const url = useSelector((state) => state.screenshotUrl);
	if (!url) return <Redirect to="/" />;
	return <img src={url} alt="code-adorn-screenshot" width="100%" />;
};

export default Screenshot;
