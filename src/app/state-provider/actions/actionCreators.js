import types from "../types/types";

export const setScreenshotUrl = (url) => ({
	type: types.SET_SCREENSHOT_URL,
	url,
});

export const updateCodeString = (codeString) => ({
	type: types.UPDATE_CODE_STRING,
	codeString,
});

export const updateLanguage = (language) => ({
	type: types.UPDATE_LANGUAGE,
	language,
});

export const toggleLanguageDropdown = () => ({
	type: types.TOGGLE_LANGUAGE_DROPDOWN,
});

export const toggleThemeDropdown = () => ({
	type: types.TOGGLE_THEME_DROPDOWN,
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

export const toggleColorPicker = () => ({
	type: types.TOGGLE_COLOR_PICKER,
});

export const toggleStylePicker = () => ({
	type: types.TOGGLE_STYLE_PICKER,
});

export const togglePresetsPicker = () => ({
	type: types.TOGGLE_PRESETS_PICKER,
});
