// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
    }, 1500);
});

// Countdown Timer
const weddingDate = new Date("December 20, 2026 14:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML =
            "<h2>We're Married! ❤️</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) /
        (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);

// Music Button
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (playing) {
        music.pause();
        musicBtn.innerHTML = "♪";
    } else {
        music.play();
        musicBtn.innerHTML = "❚❚";
    }

    playing = !playing;
});

// Open Invitation Button
const openBtn = document.querySelector(".btn");

if (openBtn) {
    openBtn.addEventListener("click", () => {
        music.play();
        playing = true;
        musicBtn.innerHTML = "❚❚";
    });
}

// Scroll Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});