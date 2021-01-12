import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
// import languageOptions from "../utilities/languageOptions";
import { updateCodeString } from "../state-provider/actions/actionCreators";
import {
	selectCodeString,
	selectLanguage,
	selectTheme,
	selectLineNumbersVisible,
	selectScreenshotBg,
} from "../state-provider/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import { composeClasses } from "../utilities/utilityFunctions";

const CodeEditor = () => {
	const dispatch = useDispatch();
	const codeString = useSelector(selectCodeString);
	const language = useSelector(selectLanguage);
	const theme = useSelector(selectTheme);
	const lineNumbersVisible = useSelector(selectLineNumbersVisible);
	const screenshotBg = useSelector(selectScreenshotBg);

	const codeMirrorOptions = {
		lineNumbers: lineNumbersVisible,
		highlightFormatting: true,
		tabSize: 2,
		lineWrapping: true,
		autoScroll: true,
		autoCursor: true,
		autofocus: true,
		dragDrop: true,
		theme: theme,
		mode: language,
	};

	const codeMirrorClasses = {
		"code-editor": "",
		"line-numbers-hidden": !lineNumbersVisible,
	};

	return (
		<div className="code-editor-wrapper" id="screenshot-target">
			<div className="code-editor-window-ui">
				<div className="code-editor-container" style={{ backgroundColor: screenshotBg.hex }}>
					<ControlledEditor
						value={codeString}
						options={codeMirrorOptions}
						onBeforeChange={(editor, data, value) => dispatch(updateCodeString(value))}
						onChange={(editor, data, value) => {}}
						className={composeClasses(codeMirrorClasses)}
					/>
					{/* <LanguageTag language={language} /> */}
				</div>
			</div>
		</div>
	);
};

export default CodeEditor;

// const LanguageTag = ({ language }) => {
// 	const languageLabel = languageOptions.find((item) => item.name === language).label;
// 	return <span className="language-tag">{languageLabel}</span>;
// };
