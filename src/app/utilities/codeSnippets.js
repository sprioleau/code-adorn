import { formatDate, repeatVibe } from "./functions/utilityFunctions";

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
	xml: [
		`  <div class="robot">
    <div>🤖</div>
    <div>¯|_(•)_/¯</div>
    <div style="margin-left: 7px">/|</div>
  </div>`,
		`<h1>Hello World! 👋🏾 🌍</h1>`,
	],
	css: [
		`body {
      background: 
        linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    }`,
		`/* HTML */
    /* <div class="paper"></div> */
    
    /* Stacked paper effect */
    .paper {
  background: #fff;
  box-shadow:
    0 1px 1px rgba(0,0,0,0.15),
    0 10px 0 -5px #eee,
    0 10px 1px -4px rgba(0,0,0,0.15),
    0 20px 0 -10px #eee,
    0 20px 1px -9px rgba(0,0,0,0.15);
    padding: 30px;
  }

/* Source: CSS Tricks */`,
	],
	sass: [
		`@mixin transition($property: all) {
	transition: $property 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}`,
		`@mixin sm {
	@media (max-width: #{$bp-small}) {
		@content;
	}
}`,
		`html.person {
	head { 
		&::before { content: "🐵"; @include head-properties }
	}

	body {
		&__arms { background-color: $skin;  @include arm-properties }
		&__legs { background-color: $pants;  @include leg-properties }
	}

	footer.feet { background-color: $shoes;  @include shoe-properties }
}`,
	],
	jsx: [
		`const Footer = () => {
	return (
		<footer>
			<div>
				<a href="https://github.com/sprioleau/code-adorn">source</a>
				<a href="https://github.com/sprioleau">about</a>
			</div>
			<div>created by <span>@sprioleau</span>👨🏾‍💻</div>
		</footer>
	);
};`,
		`const personName = 'Tony Stark';
const element = <h1>Hello, {personName}</h1>;

ReactDOM.render( element, document.getElementById('root'));`,
	],
	markdown: [
		`## Github Octocat & Friends

![Octocat](https://octodex.github.com/images/original.png "Octocat")
![Baracktocat](https://octodex.github.com/images/baracktocat.jpg "Baracktocat")
![Megacat](https://octodex.github.com/images/megacat.jpg "Megacat")`,
		`# A Nutritional Lunch

## Ingredients

| **Name** | **Calories** | **Image** |
| :------: | :----------: | :-------: |
|  Bread   |      80      |    🍞     |
|  Letuce  |      10      |    🥬     |
|  Chese   |      40      |    🧀     |
|  Turkey  |     120      |    🦃     |`,
	],
};

export default codeSnippets;
