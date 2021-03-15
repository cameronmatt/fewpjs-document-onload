// Your code goes here
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    loadText();
});

function loadText() {
    const textContent = "This is really cool!";
    document.querySelector( 'p' ).innerHTML = textContent;
};