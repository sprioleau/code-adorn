import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { LanguageTag } from "./LanguageSelect";

const CodeEditor = ({ codeString, language, themeOption, onBeforeChange }) => {
	const codeMirrorOptions = {
		lineNumbers: true,
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
		<div className="code-editor-wrapper">
			<ControlledEditor
				value={codeString}
				options={codeMirrorOptions}
				onBeforeChange={onBeforeChange}
				onChange={(editor, data, value) => {}}
				className="code-editor"
			/>
			<LanguageTag language={language} />
		</div>
	);
};

export default CodeEditor;
