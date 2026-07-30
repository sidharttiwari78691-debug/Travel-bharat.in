card.innerHTML = `

<img src="${place.image}" alt="${place.name}">

<h3>${place.name}</h3>

<p>${place.description}</p>

<button class="view-btn"

onclick="openPlace('${place.name}')">

View Details

</button>

function openPlace(name){

localStorage.setItem("placeName",name);

window.location.href="place.html";

}

`;