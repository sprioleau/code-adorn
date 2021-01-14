import React from "react";
import { useHistory } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import { saveData } from "../utilities/functions/screenshot";
import { shortFormatDate } from "../utilities/functions/utilityFunctions";
import html2canvas from "html2canvas";
import { setScreenshotUrl } from "../state-provider/actions/actionCreators";
import { selectLanguage, selectScreenshotBg } from "../state-provider/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";

const ExportScreenshotButton = () => {
	const screenshotBg = useSelector(selectScreenshotBg);
	const language = useSelector(selectLanguage);
	const dispatch = useDispatch();
	const history = useHistory();

	const targetSelector = ".code-editor-container";
	const fileName = `code-adorn-screenshot-${language}-${shortFormatDate(new Date())}.png`;
	const options = { backgroundColor: screenshotBg.hex, scale: 1.5 };

	const browserExport = async (targetSelector, fileName, options) => {
		const canvas = await html2canvas(document.querySelector(targetSelector), options);
		canvas.toBlob((blob) => saveData(blob, fileName));
	};

	const mobileExport = async () => {
		const canvas = await html2canvas(document.querySelector(targetSelector), options);
		canvas.toBlob((blob) => dispatch(setScreenshotUrl(window.URL.createObjectURL(blob))));
		history.push("/screenshot");
	};

	const handleExportScreenshot = () => {
		if (isBrowser) return browserExport(targetSelector, fileName, options);
		if (isMobile) return mobileExport();
	};

	return (
		<button className="btn export" onClick={handleExportScreenshot}>
			Export Screenshot
		</button>
	);
};

export default ExportScreenshotButton;
