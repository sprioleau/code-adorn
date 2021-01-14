export const formatDate = () => {
	const d = new Date();
	const current_date = d.getDate();
	const current_month = d.getMonth() + 1; //months are zero based
	const current_year = d.getFullYear();

	return current_date + "-" + current_month + "-" + current_year;
};

export const shortFormatDate = (date) => {
	const current_date = date.getDate();
	const current_month = date.getMonth() + 1; //months are zero basedate
	const current_year = date.getFullYear();
	const current_hour = date.getHours();
	const current_minute = date.getMinutes();
	const current_second = date.getSeconds();

	return `${current_date}.${current_month}.${current_year}-${current_hour}.${current_minute}.${current_second}`;
};

export const repeatVibe = (repeat, vibe) => new Array(repeat).fill(vibe);

export const randomItemFromArray = (array) => array[Math.floor(Math.random() * array.length)];

export const toTitleCase = (string) =>
	string.replace(/(\w)(\w*)/g, (_, g1, g2) => g1.toUpperCase() + g2.toLowerCase()).replace("-", " ");

export const composeClasses = (classesObject) => {
	const classList = Object.entries(classesObject);

	let newClassList = [];

	classList.forEach(([classString, condition]) => {
		const validString = typeof condition === "string" && condition === "";
		const validBoolean = typeof condition === "boolean" && condition === true;
		const classIsDefined = classString !== undefined;
		const validCondition = (validString || validBoolean) && classIsDefined;

		if (!validCondition) return;
		newClassList = newClassList.concat(classString);
	});

	return newClassList.join(" ");
};
