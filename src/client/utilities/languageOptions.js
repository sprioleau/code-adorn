import SyntaxHighlighter from "react-syntax-highlighter";

export const languageOptions = [
	{ name: "javascript", label: "JavaScript" },
	{ name: "xml", label: "HTML" }, // Needs "xml" name to format "html"
	{ name: "css", label: "CSS" },
	{ name: "sass", label: "Sass" },
	{ name: "jsx", label: "JSX" },
	{ name: "python", label: "Python" },
	{ name: "go", label: "Go" },
	{ name: "r", label: "R" },
	{ name: "markdown", label: "Markdown" },
	{ name: "ruby", label: "ruby" },
	{ name: "rust", label: "Rust" },
];

export const suppportedLanguages = SyntaxHighlighter.supportedLanguages;

export default languageOptions;
