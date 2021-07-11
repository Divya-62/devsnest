const square = document.querySelector(".square");
const bk = document.querySelector(".bookedSeats");
const totalSeats = document.querySelector(".remainingSeats");
var booked=0;
var remaining=36;



for (let i = 0; i <36; i++) {
	const items = document.createElement("div")
	items.addEventListener('click', () => {
		if (items.style.backgroundColor == "silver") {
			items.style.backgroundColor = "lightslategrey"
            booked--;
            remaining++;
            bk.value=booked;
            totalSeats.value=remaining;
		}
		else {
			items.style.backgroundColor = "silver"
            booked++;
            remaining--;
            bk.value=booked;
            totalSeats.value=remaining;

		}

	})
	square.appendChild(items);

}
