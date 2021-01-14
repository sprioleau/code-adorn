import html2canvas from "html2canvas";

const saveData = (blob, fileName) => {
	const a = document.createElement("a");
	const targetElement = document.querySelector(".app-container");
	const url = window.URL.createObjectURL(blob);

	targetElement.appendChild(a);

	a.setAttribute("id", "screenshot-link-target");
	a.style = "display: none";
	a.href = url;
	a.download = fileName;
	a.click();

	window.URL.revokeObjectURL(url);

	targetElement.removeChild(a);
};

export const exportScreenshot = async (targetSelector, fileName, options) => {
	const canvas = await html2canvas(document.querySelector(targetSelector), options);
	canvas.toBlob((blob) => saveData(blob, fileName));
};
