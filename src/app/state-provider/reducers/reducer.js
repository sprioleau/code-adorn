import types from "../types/types";
import { randomIndex } from "../../utilities/utilityFunctions";
import codeSnippets from "../../utilities/codeSnippets";

const initialState = {
	codeString: codeSnippets.javascript[randomIndex(codeSnippets.javascript)],
	language: "javascript",
	theme: "material",
	lineNumbersVisible: false,
	screenshotBg: { hex: "#ffcd31" },
	screenshotDataUrl: "/",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_CODE_STRING:
			return {
				...state,
				codeString: action.codeString,
			};

		case types.UPDATE_LANGUAGE:
			return {
				...state,
				language: action.language,
			};

		case types.UPDATE_THEME:
			return {
				...state,
				theme: action.theme,
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

		default:
			return state;
	}
};

export default reducer;
