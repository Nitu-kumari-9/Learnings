// Get HTML elements

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const formatButton = document.getElementById("format-btn");


// Default format

let is24Hour = false;


// Function to update clock

function updateClock() {

    const now = new Date();


    // Get time

    let hours = now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();


    // AM / PM

    let period = hours >= 12 ? "PM" : "AM";


    // Convert to 12-hour format

    if (!is24Hour) {

        hours = hours % 12;

        hours = hours === 0 ? 12 : hours;

    }


    // Add 0 before single digit

    hours = String(hours).padStart(2, "0");

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");


    // Create time

    if (is24Hour) {

        timeElement.textContent =
            `${hours}:${formattedMinutes}:${formattedSeconds}`;

    } else {

        timeElement.textContent =
            `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;

    }


    // Create date

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    dateElement.textContent =
        now.toLocaleDateString("en-US", dateOptions);
}


// Switch 12 / 24 hour format

formatButton.addEventListener("click", () => {

    is24Hour = !is24Hour;


    if (is24Hour) {

        formatButton.textContent = "Switch to 12-Hour";

    } else {

        formatButton.textContent = "Switch to 24-Hour";

    }


    updateClock();

});


// Update immediately

updateClock();


// Update every second

setInterval(updateClock, 1000);

