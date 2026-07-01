
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formFanClub");
    const boxStatus = document.getElementById("boxStatus");
    
   
    const resNama = document.getElementById("resNama");
    const resEmail = document.getElementById("resEmail");
    const resTim = document.getElementById("resTim");
    const btnHapus = document.getElementById("btnHapus");

  
    function muatDataLocalStorage() {
        const simpananNama = localStorage.getItem("fan_nama");
        const simpananEmail = localStorage.getItem("fan_email");
        const simpananTim = localStorage.getItem("fan_tim");

        
        if (simpananNama && simpananEmail && simpananTim) {
            // Pasang ke form input biar data ga hilang saat refresh
            document.getElementById("nama").value = simpananNama;
            document.getElementById("email").value = simpananEmail;
            document.getElementById("timFavorit").value = simpananTim;

            resNama.textContent = simpananNama;
            resEmail.textContent = simpananEmail;
            resTim.textContent = simpananTim;
            boxStatus.style.display = "block";
        } else {
            boxStatus.style.display = "none";
        }
    }

    muatDataLocalStorage();

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputNama = document.getElementById("nama").value;
        const inputEmail = document.getElementById("email").value;
        const inputTim = document.getElementById("timFavorit").value;

        localStorage.setItem("fan_nama", inputNama);
        localStorage.setItem("fan_email", inputEmail);
        localStorage.setItem("fan_tim", inputTim);

        muatDataLocalStorage();
        alert("Selamat! Data pendaftaran Fan Club F1 berhasil disimpan.");
    });

    btnHapus.addEventListener("click", function () {
        if (confirm("Apakah kamu yakin ingin membatalkan keanggotaan fan club?")) {
            localStorage.removeItem("fan_nama");
            localStorage.removeItem("fan_email");
            localStorage.removeItem("fan_tim");
            
            form.reset();
            muatDataLocalStorage();
        }
    });
});
