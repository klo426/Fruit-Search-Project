const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	return fruit.filter(fruitName =>
		fruitName.toLocaleLowerCase().includes(str.toLocaleLowerCase())
		);

	// TODO
}

function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
	// TODO
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	results.forEach(result => {
		const li = document.createElement('li');
		li.textContent = result;
		suggestions.appendChild(li);
	});
	// TODO
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent;
		suggestions.innerHTML = '';
	}
	// TODO
}

const body = document.body;
const gradient = document.createElement('div');
gradient.classList.add('gradient-bg');
body.appendChild(gradient);

function updateGradient(event){
	const mouseX = event.clientX / window.innerWidth;
	const mouseY = event.clientY / window.innerHeight;
	const gradientColor = `linear-gradient(to right, rgb(0, 0, 255), rgb(255, 0, 0), rgb(0, 0, 255))`;

	body.style.background = `${gradientColor} ${mouseX * 100}% ${mouseY * 100}%`;
}

document.addEventListener('mousemove', updateGradient);

input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);