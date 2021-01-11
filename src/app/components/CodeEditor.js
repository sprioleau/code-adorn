import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { LanguageTag } from "./LanguageSelect";

const CodeEditor = ({ codeString, language, themeOption, onBeforeChange, lineNumbersVisible, screenshotBg }) => {
	const codeMirrorOptions = {
		lineNumbers: lineNumbersVisible,
		highlightFormatting: true,
		tabSize: 2,
		lineWrapping: true,
		autoScroll: true,
		autoCursor: true,
		autofocus: true,
		dragDrop: true,
		theme: themeOption,
		mode: language,
	};

	return (
		<div className="code-editor-wrapper" id="screenshot-target">
			<div className="code-editor-window-ui">
				<div className="code-editor-container" style={{ backgroundColor: screenshotBg.hex }}>
					<ControlledEditor
						value={codeString}
						options={codeMirrorOptions}
						onBeforeChange={onBeforeChange}
						onChange={(editor, data, value) => {}}
						className={lineNumbersVisible ? "code-editor" : "code-editor line-numbers-hidden"}
					/>
					<LanguageTag language={language} />
				</div>
			</div>
		</div>
	);
};

export default CodeEditor;
