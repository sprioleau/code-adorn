import React from "react";
import { shortFormatDate } from "../utilities/functions/utilityFunctions";
import { exportScreenshot } from "../utilities/functions/screenshot";
import { selectLanguage, selectScreenshotBg } from "../state-provider/selectors/selectors";
import { useSelector } from "react-redux";

const ExportScreenshotButton = () => {
	const screenshotBg = useSelector(selectScreenshotBg);
	const language = useSelector(selectLanguage);

	const handleExportScreenshot = () => {
		const targetSelector = ".code-editor-container";
		const fileName = `code-adorn-screenshot-${language}-${shortFormatDate(new Date())}.png`;
		const options = { backgroundColor: screenshotBg.hex, scale: 1.5, width: 900 };
		exportScreenshot(targetSelector, fileName, options);
	};

	return (
		<button className="btn export" onClick={handleExportScreenshot}>
			Export Screenshot
		</button>
	);
};

export default ExportScreenshotButton;
