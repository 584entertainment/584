function calculateScore(event) {
    event.preventDefault();

    let score = 0;
    const questions = 1; // Update based on total questions

    for (let i = 1; i <= questions; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    }

    localStorage.setItem("quizScore", score);
    window.location.href = 'results.html';
}

document.addEventListener("DOMContentLoaded", () => {
    const score = localStorage.getItem("quizScore");
    if (score) {
        let message = "";

        if (score >= 4) {
            message = "You’re on the path to mastery!";
        } else {
            message = "Let *Discipline Unlocked* be your guide to lasting change!";
        }

        document.getElementById("results-message").textContent = message;
    }
});
