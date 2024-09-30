function learnMore(section) {
    alert("You are learning more about " + section + "!");
}

// Optional: Smooth scrolling effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
[19:40, 30/09/2024] Jalil Rasuly: let rolls = [];
        let total = 0;
        const dice = [1, 2, 3, 4, 5, 6];

        // Function to display rolls and total
        function displayRolls() {
            const listElement = document.getElementById("list");
            const totalElement = document.getElementById("total");
            const infoElement = document.getElementById("info");

            // Clear the list
            listElement.innerHTML = '';

            // Display each roll
            rolls.forEach(roll => {
                const li = document.createElement("li");
                li.textContent = roll;
                listElement.appendChild(li);
            });

            // Calculate total
            total = rolls.reduce((acc, roll) => acc + roll, 0);
            tot…
[19:40, 30/09/2024] Jalil Rasuly: let rolls = [];
        let total = 0;
        const dice = [1, 2, 3, 4, 5, 6];

        // Function to display rolls and total
        function displayRolls() {
            const listElement = document.getElementById("list");
            const totalElement = document.getElementById("total");
            const infoElement = document.getElementById("info");

            // Clear the list
            listElement.innerHTML = '';

            // Display each roll
            rolls.forEach(roll => {
                const li = document.createElement("li");
                li.textContent = roll;
                listElement.appendChild(li);
            });

            // Calculate total
            total = rolls.reduce((acc, roll) => acc + roll, 0);
            totalElement.textContent = total;

            // Update info message
            if (total === 11) {
                infoElement.textContent = "You won!";
            } else if (total > 11) {
                infoElement.textContent = "You lost!";
            } else {
                infoElement.textContent = "Keep playing!";
            }
        }

        // Roll the dice
        document.getElementById("button_roll").addEventListener("click", function() {
            const roll = dice[Math.floor(Math.random() * dice.length)];
            rolls.push(roll);
            displayRolls();
        });

        // Remove the last roll
        document.getElementById("button_remove").addEventListener("click", function() {
            rolls.pop();
            displayRolls();
        });

        // Start again
        document.getElementById("button_restart").addEventListener("click", function() {
            rolls = [];
            displayRolls();
        });

        // Initial display
        displayRolls();
