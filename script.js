// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const welcomeText = document.getElementById('welcome-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const dynamicElement = document.getElementById('dynamic-element');
    const featuresList = document.getElementById('features-list');
    
    // Task 1: Change text content dynamically
    changeTextBtn.addEventListener('click', function() {
        const greetings = [
            "Hello, DOM Manipulator!",
            "Welcome to JavaScript!",
            "You're changing text dynamically!",
            "This is fun, isn't it?",
            "Keep exploring JavaScript!"
        ];
        
        // Get a random greeting
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        welcomeText.textContent = randomGreeting;
    });
    
    // Task 2: Modify CSS styles via JavaScript
    changeStyleBtn.addEventListener('click', function() {
        // Toggle highlight class on the welcome text
        welcomeText.classList.toggle('highlight');
        
        // Change button text based on state
        if (welcomeText.classList.contains('highlight')) {
            changeStyleBtn.textContent = 'Remove Highlight';
        } else {
            changeStyleBtn.textContent = 'Change Style';
        }
        
        // Change background color of the features list
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        featuresList.style.backgroundColor = randomColor;
    });
    
    // Task 3: Add or remove an element when a button is clicked
    toggleElementBtn.addEventListener('click', function() {
        // Toggle the visibility of the dynamic element
        dynamicElement.classList.toggle('hidden');
        
        // Change button text based on state
        if (dynamicElement.classList.contains('hidden')) {
            toggleElementBtn.textContent = 'Show Element';
        } else {
            toggleElementBtn.textContent = 'Hide Element';
        }
    });
    
    // Add a new feature item when clicking on the list
    featuresList.addEventListener('click', function() {
        const newItem = document.createElement('li');
        newItem.textContent = 'New feature added dynamically!';
        featuresList.appendChild(newItem);
    });
});