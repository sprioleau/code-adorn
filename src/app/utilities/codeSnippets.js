import { formatDate, repeatVibe } from "./utilityFunctions";

const codeSnippets = {
	javascript: [
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

		`const repeatVibe = (repeat, vibe) => new Array(repeat).fill(vibe);
console.log(repeatVibe(5, "🤩"));
// [${repeatVibe(5, "🤩")}]`,
	],
};

export default codeSnippets;
