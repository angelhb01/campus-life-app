
// Start fetching data from the two APIs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Events API
    const eventsAPI = 'https://api.presence.io/atlantis/v1/events/';

    // Fetch data from the eventsAPI
    fetch(eventsAPI)
        .then(response => response.json())
        .then(data => {

            // Store the event name, date, and description in an array
            let events = [];

            for (let i = 0; i < data.length; i++) {
                events.push(data[i]);
            }


            const eventContainer = document.querySelector('.events-container');

            // For each event in the data, a box is created.
            // The box contains the title, location, date, and the description.
            events.forEach(event => {
                const eventBox = document.createElement('div');
                eventBox.className = 'event p-0 col bg-light text-decoration-none text-white border shadow';

                const eventTitle = document.createElement('h3');
                eventTitle.className = 'bg-dark w-100 p-1'

                const eventLocation = document.createElement('div');
                eventLocation.className = 'text-black w-100 p-1'

                const startDate = document.createElement('div');
                startDate.className = 'bg-secondary w-100 p-1'

                const endDate = document.createElement('div');
                endDate.className = 'text-black w-100 p-1'

                const eventDesc = document.createElement('div');
                eventDesc.className = 'overflow-y-auto bg-secondary h-100 w-100 p-1'

                eventTitle.textContent = event.eventName;
                eventLocation.textContent = `Location: ${event.location}`;
                startDate.textContent = `From: ${event.startDateTimeUtc}`;
                endDate.textContent = `To: ${event.endDateTimeUtc}`
                eventDesc.innerHTML = event.description || "No description available";

                // Remove any images from the description
                eventDesc.querySelectorAll('img').forEach(img => img.remove())

                eventBox.appendChild(eventTitle);
                eventBox.appendChild(eventLocation);
                eventBox.appendChild(startDate);
                eventBox.appendChild(endDate);
                eventBox.appendChild(eventDesc);

                eventContainer.appendChild(eventBox);
            })
        })


    // Food API
    const foodAPI = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    
    
    // Fetch data from the foodAPI
    fetch(foodAPI)
        .then(response => response.json())
        .then(data => {

            // Store the food name and the description 
            let food = [];

            for (let i = 0; i < data.categories.length; i++) {
                food.push(data.categories[i]);
            }


            const diningContainer = document.querySelector('.dining-container');

            // For each food in the data, a box is created.
            // Every box will contain the title, description, and the image from the data.
            food.forEach(food => {
                const foodBox = document.createElement('div');
                foodBox.className = 'event p-3 col bg-light text-decoration-none text-black shadow overflow-y-auto';

                const foodTitle = document.createElement('h3');
                foodTitle.className = 'bg-dark w-100 p-1 text-white ps-2';
                foodTitle.textContent = food.strCategory;

                const foodDesc = document.createElement('p');
                foodDesc.className = 'p-2';
                foodDesc.textContent = food.strCategoryDescription;

                const foodImg = document.createElement('img');
                foodImg.src = food.strCategoryThumb;
                foodImg.className = 'food-image';

                foodBox.appendChild(foodTitle);
                foodBox.appendChild(foodDesc);
                foodBox.appendChild(foodImg);

                diningContainer.appendChild(foodBox);
            })
        })
})
