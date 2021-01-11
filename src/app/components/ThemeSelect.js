import React from "react";
import { styleOptions } from "../utilities/styleOptions";

// CodeMirror Style/Mode Imports
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/base16-light.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/blackboard.css";
import "codemirror/theme/midnight.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/solarized.css";
import "codemirror/theme/ambiance.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

export const ThemeSelect = ({ themeOption, handleThemeChange }) => {
	return (
		<div>
			<label htmlFor="theme-picker">Theme: </label>
			<select name="theme-picker" id="theme-picker" value={themeOption} onChange={handleThemeChange}>
				{styleOptions.map((theme) => (
					<option key={theme} value={theme}>
						{theme}
					</option>
				))}
			</select>
		</div>
	);
};

export default ThemeSelect;