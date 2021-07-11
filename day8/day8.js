const square = document.querySelector(".square");



for (let i = 0; i <400; i++) {
	const items = document.createElement("div")
	items.addEventListener('click', () => {
		if (items.style.backgroundColor == "white") {
			items.style.backgroundColor = "red"
		}
		else {
			items.style.backgroundColor = "white"
		}

	})
	square.appendChild(items);

}
