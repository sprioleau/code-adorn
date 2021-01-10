const formatDate = () => {
	const d = new Date();
	const curr_date = d.getDate();
	const curr_month = d.getMonth() + 1; //months are zero based
	const curr_year = d.getFullYear();

	return curr_date + "-" + curr_month + "-" + curr_year;
};

const codeSnippets = [
	`let fruits = ["bananas", "Apples", "Oranges"];

  fruits.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  })

  console.log(fruits);
  // ["Apples", "bananas", "Oranges"]`,

	`const formatDate = () => {
    const d = new Date();
    const curr_date = d.getDate();
    const curr_month = d.getMonth() + 1; //months are zero based
    const curr_year = d.getFullYear();

    return curr_month + "-" + curr_date + "-" + curr_year;
  }
  
  console.log(formatDate());
  // ${formatDate()}`,
];

export default codeSnippets;
