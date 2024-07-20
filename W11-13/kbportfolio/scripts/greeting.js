document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.querySelector('#greeting');
    console.log('Script loaded');
    console.log('Greeting element:', greetingElement);
    
    if (greetingElement) {
        const hours = new Date().getHours();
        let greeting;
        if (hours < 12) {
            greeting = 'Good Morning!';
        } else if (hours < 18) {
            greeting = 'Good Afternoon!';
        } else {
            greeting = 'Good Evening!';
        }
        console.log('Greeting:', greeting);
        greetingElement.textContent = greeting;
    }
});
