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
	// This will call the next function that I will make so that it will show the suggestions on the screen
	showSuggestions(results, inputVal)
}

function showSuggestions(results, inputVal) {
	//Everytime the text inside the input changes it will set the html back to zero so that there aren't extra options to choose from
	suggestions.innerHTML = ``
	//As long as something is typed the results will show on screen, made this so that the whole array would not show up with nothing typed in
	if(results.length) {
		//loop through the results array to make it so that I can make each one into an li changed to a for of loop for better readability
		for(let result of results) {
			//Create an li each time to put the fruit's text into
			let li = document.createElement('li')
			//Match the current fruits that have the inputVal with case being insesitive
			let match = result.match(new RegExp(inputVal, 'i'))
			//replace the current fruit's name to have the part that is the inputVal to be bolded
			let text = result.replace(match[0], `<b>${match[0]}</b>`)
			//make the li's innerHTML into what we just replaced it with
			li.innerHTML = text;
			//append it so that it appears on screen
			suggestions.append(li)
		}
	}
}
//
function useSuggestion(e) {
	//When one of the autocompleted suggestions is clicked on it will fill the input with that value that is click
	input.value = e.target.innerText;
	//When a value is clicked it will reset the list so that it is no longer there
	suggestions.innerHTML = ``
}
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);