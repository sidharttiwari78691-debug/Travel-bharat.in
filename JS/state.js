const stateId = Number(localStorage.getItem("stateId"));

const selectedState = states.find(state => state.id === stateId);

document.getElementById("stateName").innerText = selectedState.name;

document.getElementById("capitalName").innerText =
"Capital : " + selectedState.capital;

const placesContainer = document.getElementById("placesContainer");

const statePlaces = places.filter(place => place.stateId === stateId);

statePlaces.forEach(place => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `

<img src="${place.image}" alt="${place.name}">

<h3>${place.name}</h3>

<p>${place.description}</p>

<a href="${place.map}" target="_blank">

<button class="view-btn">

View on Google Maps

</button>

</a>

`;

placesContainer.appendChild(card);

});