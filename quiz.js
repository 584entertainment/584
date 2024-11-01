// Function to calculate the quiz score and display the email capture form
function calculateScore(event) {
    event.preventDefault();

    let score = 0;
    const questions = 5; // Total number of questions

    // Loop through each question and add up the scores
    for (let i = 1; i <= questions; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    }

    // Save the score in localStorage
    localStorage.setItem("quizScore", score);

    // Hide the quiz form and show the email capture form
    document.getElementById("quiz-form").style.display = "none";
    document.getElementById("email-capture").style.display = "block";
}

// Function to capture the email and redirect to the results page
function captureEmail(event) {
    event.preventDefault();

    const email = document.getElementById("user-email").value;
    
    // Store email in localStorage (or use this step to send it to an email service provider)
    localStorage.setItem("userEmail", email);

    // Redirect to the results page
    window.location.href = 'results.html';
}

// Function to display results on the results page
document.addEventListener("DOMContentLoaded", () => {
    const score = localStorage.getItem("quizScore");
    if (score && document.getElementById("results-message")) {
        let message = "";

        if (score >= 16) {
            message = "You're on the path to mastery! Take your habits to the next level with *Discipline Unlocked*.";
        } else if (score >= 10) {
            message = "You’re well on your way! Strengthen your habits further with the guidance in *Discipline Unlocked*.";
        } else {
            message = "You’re just starting out on your journey. Let *Discipline Unlocked* be your guide to lasting change!";
        }

        document.getElementById("results-message").textContent = message;
    }
});
