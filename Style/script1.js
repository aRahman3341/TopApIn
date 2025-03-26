document.addEventListener("DOMContentLoaded", function () {
    let selectedPrice = 0;
    let qrisPrice = document.getElementById("qris-price");
    let danaPrice = document.getElementById("dana-price");
    let paymentPrice = document.getElementById("payment-price");
    let helpText = document.querySelector(".help-text");
    let promoInput = document.getElementById("promo-code");
    let applyPromoBtn = document.getElementById("apply-promo");
    let promoMessage = document.getElementById("promo-message");
    let activePromo = null; // Untuk menyimpan promo yang digunakan

    // Daftar kode promo & diskon
    const promoCodes = {
        "PROMO10": 10,  // Diskon 10%
        "PROMO25": 25,  // Diskon 25%
        "DISKON50": 50   // Diskon 50%
    };

    // Fungsi update total harga
    function updateTotalPrice() {
        let totalPrice = selectedPrice;

        // Jika ada promo aktif, terapkan diskon
        if (activePromo) {
            let discountPercentage = promoCodes[activePromo];
            totalPrice -= (totalPrice * discountPercentage / 100);
        }

        // Update semua metode pembayaran
        qrisPrice.textContent = "Rp. " + totalPrice.toLocaleString("id-ID");
        danaPrice.textContent = "Rp. " + totalPrice.toLocaleString("id-ID");
        paymentPrice.textContent = "Rp. " + totalPrice.toLocaleString("id-ID");
    }

    // Event tombol BELI untuk memilih nominal item
    document.querySelectorAll(".nominal-button").forEach(button => {
        button.addEventListener("click", function () {
            let itemName = button.getAttribute("data-name");
            selectedPrice = parseInt(button.getAttribute("data-price")) || 0;

            // Update teks bantuan
            helpText.textContent = "Item yang dibeli: " + itemName;

            // Reset promo jika item baru dipilih
            activePromo = null;
            promoInput.value = "";
            promoMessage.textContent = "";

            // Update harga total
            updateTotalPrice();
        });
    });

    // Event tombol Gunakan Promo
    applyPromoBtn.addEventListener("click", function () {
        let enteredCode = promoInput.value.trim().toUpperCase();

        if (promoCodes.hasOwnProperty(enteredCode)) {
            activePromo = enteredCode; // Simpan promo yang digunakan
            promoMessage.style.color = "green";
            promoMessage.textContent = `Kode promo berhasil! Diskon ${promoCodes[enteredCode]}% diterapkan.`;
        } else {
            promoMessage.style.color = "red";
            promoMessage.textContent = "Kode promo tidak valid atau sudah kadaluarsa.";
            activePromo = null;
        }

        updateTotalPrice(); // Hitung ulang harga setelah promo
    });
});