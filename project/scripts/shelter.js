const dashboardStats = [
    { label: "Total Animals", value: "1,248" },
    { label: "Available for Adoption", value: "342" },
    { label: "Adopted This Month", value: "156" }
];

const shelterAnimals = [
    {
        name: "Kona",
        island: "Oahu",
        age: 2,
        waitDays: 147
    },
    {
        name: "Milo",
        island: "Maui",
        age: 3,
        waitDays: 82
    },
    {
        name: "Luna",
        island: "Hawaii Island",
        age: 1,
        waitDays: 45
    }
];

function displayDashboard() {
    const dashboard = document.querySelector("#dashboard-cards");

    if (dashboard) {
        let cards = "";

        dashboardStats.forEach(function (stat) {
            cards += `<p><strong>${stat.label}:</strong> ${stat.value}</p>`;
        });

        dashboard.innerHTML = cards;
    }
}

function displayAnimalSpotlight() {
    const spotlight = document.querySelector("#animal-spotlight");

    if (spotlight) {
        spotlight.innerHTML = `
            <label for="animal-select"><strong>Select an Animal:</strong></label>

            <select id="animal-select">
                <option value="0">Kona</option>
                <option value="1">Milo</option>
                <option value="2">Luna</option>
            </select>

            <div id="animal-details"></div>

            <button id="save-favorite">Save Favorite Animal</button>

            <p id="favorite-message"></p>
        `;

        const select = document.querySelector("#animal-select");
        const details = document.querySelector("#animal-details");

        function showAnimal(index) {
            const animal = shelterAnimals[index];

            let status = "";

            if (animal.waitDays > 100) {
                status = "Long-Term Resident";
            } else {
                status = "Recently Added";
            }

            details.innerHTML = `
                <h3>${animal.name}</h3>
                <p><strong>Island:</strong> ${animal.island}</p>
                <p><strong>Age:</strong> ${animal.age} years old</p>
                <p><strong>Waiting:</strong> ${animal.waitDays} days</p>
                <p><strong>Status:</strong> ${status}</p>
            `;
        }

        showAnimal(0);

        select.addEventListener("change", function () {
            showAnimal(select.value);
        });

        const button = document.querySelector("#save-favorite");
        const message = document.querySelector("#favorite-message");

        button.addEventListener("click", function () {
            const animal = shelterAnimals[select.value];

            localStorage.setItem("favoriteAnimal", animal.name);

            message.textContent =
                `${animal.name} has been saved as your favorite animal.`;
        });
    }
}

displayDashboard();
displayAnimalSpotlight();












