import React from "react";

const ExportScreenshotButton = ({ exportScreenshot }) => {
	return (
		<button className="btn export" onClick={exportScreenshot}>
			Export Screenshot
		</button>
	);
};

export default ExportScreenshotButton;
