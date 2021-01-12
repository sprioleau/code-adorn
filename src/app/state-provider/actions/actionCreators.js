import types from "../types/types";

export const updateCodeString = (codeString) => ({
	type: types.UPDATE_CODE_STRING,
	codeString,
});

export const updateLanguage = (language) => ({
	type: types.UPDATE_LANGUAGE,
	language,
});

export const updateTheme = (theme) => ({
	type: types.UPDATE_THEME,
	theme,
});

export const toggleLineNumbersVisibility = () => ({
	type: types.TOGGLE_LINE_NUMBERS_VISIBILITY,
});

export const updateScreenshotBg = (screenshotBg) => ({
	type: types.UPDATE_SCREENSHOT_BG,
	screenshotBg,
});

export const updateScreenshotDataUrl = (screenshotDataUrl) => ({
	type: types.UPDATE_SCREENSHOT_DATA_URL,
	screenshotDataUrl,
});
