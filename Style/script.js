document.addEventListener("DOMContentLoaded", function() {
    // Efek hover untuk game item
    const gameItems = document.querySelectorAll(".game-item");
    gameItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "0.3s ease-in-out";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Animasi saat scroll
    const sections = document.querySelectorAll(".game-item");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });
});
let index = 0;
        const slides = document.getElementById("slides");
        const totalSlides = document.querySelectorAll(".slide").length;

        function showSlide(i) {
            index = (i + totalSlides) % totalSlides;
            slides.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            showSlide(index + 1);
        }

        function prevSlide() {
            showSlide(index - 1);
        }

        setInterval(nextSlide, 10000);

setInterval(() => moveBanner(1), 3000);

function setBanner(index) {
    bannerIndex = index;
    updateBanner();
}
updateBanner();

document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".quantity-input");
    const plusButton = document.querySelector(".plus");
    const minusButton = document.querySelector(".minus");

    plusButton.addEventListener("click", function () {
        let value = parseInt(input.value, 10);
        input.value = value + 1;
    });

    minusButton.addEventListener("click", function () {
        let value = parseInt(input.value, 10);
        if (value > 1) {
            input.value = value - 1;
        }
    });
});

document.getElementById("goToB").addEventListener("click", function () {
    // Simulasi: Halaman B tidak ditemukan
    let halamanB = false; // Anggap halaman B tidak ada

    if (!halamanB) {
        document.getElementById("popup").style.display = "flex";
    } else {
        window.location.href = "halamanB.html"; // Jika ada, pindah ke B
    }
});

// Tombol kembali ke A
document.getElementById("backToA").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});