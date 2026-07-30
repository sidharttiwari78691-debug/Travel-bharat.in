const stateContainer = document.getElementById("stateContainer");
const searchBox = document.getElementById("searchBox");

// State Cards Display
function displayStates(stateList) {

    stateContainer.innerHTML = "";

    stateList.forEach((state) => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${state.image}" alt="${state.name}">
            <h3>${state.name}</h3>
            <p><strong>Capital:</strong> ${state.capital}</p>
            <button class="view-btn" onclick="openState(${state.id})">
                Explore
            </button>
        `;

        stateContainer.appendChild(card);

    });

}

// Search Function
searchBox.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const filtered = states.filter((state) =>
        state.name.toLowerCase().includes(value)
    );

    displayStates(filtered);

});

// Open State
function openState(id){

    localStorage.setItem("stateId",id);

    window.location.href="state.html";

}

// Load All States
displayStates(states);