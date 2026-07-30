const placeName = localStorage.getItem("placeName");

const place = places.find(p => p.name === placeName);

document.getElementById("placeImage").src = place.image;

document.getElementById("placeName").innerText = place.name;

document.getElementById("placeDescription").innerText = place.description;

document.getElementById("mapLink").href = place.map;