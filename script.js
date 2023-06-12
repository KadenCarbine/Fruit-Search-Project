const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



function search(str) {
	//Initialize the results array that the current value of the input has
	let results = [];
	//Loop through the fruits array that was alredy filled with different fruits
	for(let fruit of fruits) {
		//Make the input that someone types into all lowercase to be able to compare to the fruits array
		let string = str.toLowerCase();
		//make the fruits array lowercase to compare and see if it includes the current string at any point
		if(fruit.toLowerCase().includes(string)) {
			//push the fruit that have the string included to the results array
			results.push(fruit)
		}
	}
	return results;
}



function searchHandler(e) {
	//Make the inputVal the current value of the textbox when a new keyup happens
	let inputVal = e.target.value;
	//Initialize results as an empty array
	let results = [];
	//If inputVal.length is = 0 then nothing will happen, but if it is a number it is truthy and the if statement goes through
	if(inputVal.length) {
		//have the inputVal be the argument for the search function made earlier, and set it to the results variable
		results = search(inputVal)
	}
	//?Idea? This will call the next function that I will make so that it will show the suggestions on the screen
	showSuggestions(results, inputVal)
}


//?Idea? loop through the array and make each fruit into a li and put it into the ul to start
//I dont know what I will use the inputVal for? Right now it seems like I do not need it
//Make the current inputVal bold
function showSuggestions(results, inputVal) {

	suggestions.innerHTML = ``

	if(results.length) {
		for(let i = 0; i < results.length; i++) {
			let li = document.createElement('li')
			let match = results[i].match(new RegExp(inputVal, 'i'))
			let text = results[i].replace(match[0], `<b>${match[0]}</b>`)
			li.innerHTML = text;
			suggestions.append(li)
		}
	}
}
//
function useSuggestion(e) {
	input.value = e.target.innerText;
	
	suggestions.innerHTML = ``
}
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);