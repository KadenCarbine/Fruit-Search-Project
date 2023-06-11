const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//Loop through the array and do a search on each word to see if the current sting is in that word and if it is add it to the results array

function search(str) {
	let results = [];
	for(let fruit of fruits) {
		let string = str.toLowerCase();
		if(fruit.toLowerCase().includes(string)) {
			results.push(fruit)
		}
	}
	return results;
}
//When a key is pressed Loop through the results array and make each one into an li and put it in the suggestions ul and make that appear on the screen in a dropdown menu

//figure out how to make it so that when something is typed into the type=text that it makes it go through the seach function so that it can create a results array that I would be able to loop through and do my first thought currently seachHandler(e) e.target console.logs the whole html line?


function searchHandler(e) {
	let inputVal = e.target.value;
	
	let results = [];
	results = search(inputVal)
	console.log(results)
}

function showSuggestions(results, inputVal) {

	// TODO
}

function useSuggestion(e) {
	// TODO
}
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);