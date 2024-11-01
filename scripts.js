// Function to open the pop-up when the button is clicked
function openPopup() {
    document.getElementById("email-popup").style.display = "flex";
}

// Function to close the pop-up when the close button is clicked
function closePopup() {
    document.getElementById("email-popup").style.display = "none";
}

// Optional: Close the pop-up when clicking outside of the form content
window.onclick = function(event) {
    const popup = document.getElementById("email-popup");
    if (event.target === popup) {
        closePopup();
    }
};
