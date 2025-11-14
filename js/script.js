// Select the events and dining buttons
let eventsBtn = document.getElementById('events-card');
let diningBtn = document.getElementById('dining-card');

// When the events button is clicked, we then fetch event data from an API
eventsBtn.addEventListener("click", async function() {
    console.log("Clicked")
    //const response = await fetch('API URL');
    //const data = await response.json();
    
    // Store the event name, date, and description in an array
    let events = [];

    // Then continue to fetch the data from the object
})


// When the events button is clicked, we then fetch menu data from an API
diningBtn.addEventListener("click", async function() {
    console.log("Clicked")
    const response = await fetch('API URL');
    const data = await response.json();
    
    // Store the menu names and date in an array
    let menus = [];

    // Then we continue to fetch the data from the object
})
