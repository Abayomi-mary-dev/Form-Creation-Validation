// Function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data'); // Selecting the div for displaying data

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        const users = await response.json(); // Convert response to JSON

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list to display user names
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Display error message if fetching fails
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run fetchUserData after the DOM content has loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
