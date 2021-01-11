export const formatDate = () => {
	const d = new Date();
	const curr_date = d.getDate();
	const curr_month = d.getMonth() + 1; //months are zero based
	const curr_year = d.getFullYear();

	return curr_date + "-" + curr_month + "-" + curr_year;
};

export const shortFormatDate = () => {
	const d = new Date();
	const curr_date = d.getDate();
	const curr_month = d.getMonth() + 1; //months are zero based
	const curr_year = d.getFullYear();

	return curr_date + curr_month + curr_year;
};

export const repeatVibe = (repeat, vibe) => new Array(repeat).fill(vibe);

export const randomIndex = (array) => Math.floor(Math.random() * array.length);

export const toTitleCase = (string) =>
	string.replace(/(\w)(\w*)/g, (_, g1, g2) => g1.toUpperCase() + g2.toLowerCase()).replace("-", " ");
