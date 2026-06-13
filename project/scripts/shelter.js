const dashboardStats = [
    { label: "Total Animals", value: "1,248" },
    { label: "Available for Adoption", value: "342" },
    { label: "Adopted This Month", value: "156" }
];

const spotlightAnimal = {
    name: "Kona",
    island: "Oahu",
    age: 2,
    waitDays: 147
};

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
        let status = "";

        if (spotlightAnimal.waitDays > 100) {
            status = "Long-Term Resident";
        } else {
            status = "Recently Added";
        }

        spotlight.innerHTML = `
            <h3>${spotlightAnimal.name}</h3>
            <p><strong>Island:</strong> ${spotlightAnimal.island}</p>
            <p><strong>Age:</strong> ${spotlightAnimal.age} years old</p>
            <p><strong>Waiting:</strong> ${spotlightAnimal.waitDays} days</p>
            <p><strong>Status:</strong> ${status}</p>
            <button id="save-favorite">Save Favorite Animal</button>
            <p id="favorite-message"></p>
        `;

        const button = document.querySelector("#save-favorite");
        const message = document.querySelector("#favorite-message");

        button.addEventListener("click", function () {
            localStorage.setItem("favoriteAnimal", spotlightAnimal.name);
            message.textContent = `${spotlightAnimal.name} has been saved as your favorite animal.`;
        });
    }
}

displayDashboard();
displayAnimalSpotlight();












