const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll(".section");

function showSection(targetId) {
    sections.forEach(section => {
        if (section.id === targetId) {
            section.style.display = "block";
            setTimeout(() => {
                section.classList.add("active");
            }, 10); 
        } else {
            section.classList.remove("active");
            setTimeout(() => {
                section.style.display = "none";
            }, 500);
        }
    });
}

window.onload = function() {
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.querySelector(".close");

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        showSection(targetId);
    });
});

document.querySelector(".section").classList.add("active");
