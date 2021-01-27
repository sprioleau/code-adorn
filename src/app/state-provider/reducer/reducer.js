import types from "../types/types";
import { randomItemFromArray } from "../../utilities/functions/utilityFunctions";
import codeSnippets from "../../utilities/codeSnippets";

const DEFAULT_LANGUAGE = randomItemFromArray(Object.keys(codeSnippets));

const initialState = {
	codeString: randomItemFromArray(codeSnippets[DEFAULT_LANGUAGE]),
	language: DEFAULT_LANGUAGE,
	theme: "material",
	lineNumbersVisible: false,
	screenshotBg: { hex: "#ffcd31" },
	screenshotDataUrl: "/",
	languageDropdownOpen: false,
	themeDropdownOpen: false,
	colorPickerOpen: false,
	stylePickerOpen: false,
	presetsPickerOpen: false,
	screenshotUrl: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_SCREENSHOT_URL:
			return {
				...state,
				screenshotUrl: action.url,
			};

		case types.UPDATE_CODE_STRING:
			return {
				...state,
				codeString: action.codeString,
			};

		case types.UPDATE_LANGUAGE:
			return {
				...state,
				language: action.language,
				languageDropdownOpen: false,
			};

		case types.TOGGLE_LANGUAGE_DROPDOWN:
			return {
				...state,
				languageDropdownOpen: !state.languageDropdownOpen,
				themeDropdownOpen: false,
				colorPickerOpen: false,
				stylePickerOpen: false,
				presetsPickerOpen: false,
			};

		case types.UPDATE_THEME:
			return {
				...state,
				theme: action.theme,
				themeDropdownOpen: false,
				languageDropdownOpen: false,
				colorPickerOpen: false,
				stylePickerOpen: false,
				presetsPickerOpen: false,
			};

		case types.TOGGLE_THEME_DROPDOWN:
			return {
				...state,
				themeDropdownOpen: !state.themeDropdownOpen,
				languageDropdownOpen: false,
				colorPickerOpen: false,
				stylePickerOpen: false,
				presetsPickerOpen: false,
			};

		case types.TOGGLE_LINE_NUMBERS_VISIBILITY:
			return {
				...state,
				lineNumbersVisible: !state.lineNumbersVisible,
			};

		case types.UPDATE_SCREENSHOT_BG:
			return {
				...state,
				screenshotBg: action.screenshotBg,
			};

		case types.UPDATE_SCREENSHOT_DATA_URL:
			return {
				...state,
				screenshotDataUrl: action.screenshotDataUrl,
			};

		case types.TOGGLE_COLOR_PICKER:
			return {
				...state,
				colorPickerOpen: !state.colorPickerOpen,
				presetsPickerOpen: false,
				languageDropdownOpen: false,
				themeDropdownOpen: false,
				stylePickerOpen: false,
			};

		case types.TOGGLE_STYLE_PICKER:
			return {
				...state,
				stylePickerOpen: !state.stylePickerOpen,
				languageDropdownOpen: false,
				themeDropdownOpen: false,
				colorPickerOpen: false,
				presetsPickerOpen: false,
			};

		case types.TOGGLE_PRESETS_PICKER:
			return {
				...state,
				presetsPickerOpen: !state.presetsPickerOpen,
				colorPickerOpen: false,
				languageDropdownOpen: false,
				themeDropdownOpen: false,
				stylePickerOpen: false,
			};

		default:
			return state;
	}
};

export default reducer;
