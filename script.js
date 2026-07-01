
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formFanClub");
    const boxStatus = document.getElementById("boxStatus");
    
    // Element untuk menampilkan hasil data
    const resNama = document.getElementById("resNama");
    const resEmail = document.getElementById("resEmail");
    const resTim = document.getElementById("resTim");
    const btnHapus = document.getElementById("btnHapus");

    // Fungsi untuk memuat data dari localStorage jika sudah pernah diisi
    function muatDataLocalStorage() {
        const simpananNama = localStorage.getItem("fan_nama");
        const simpananEmail = localStorage.getItem("fan_email");
        const simpananTim = localStorage.getItem("fan_tim");

        // Jika semua data ada di localStorage, tampilkan ke halaman & isi form otomatis
        if (simpananNama && simpananEmail && simpananTim) {
            // Pasang ke form input biar data ga hilang saat refresh
            document.getElementById("nama").value = simpananNama;
            document.getElementById("email").value = simpananEmail;
            document.getElementById("timFavorit").value = simpananTim;

            // Tampilkan info kartu status keanggotaan di bawahnya
            resNama.textContent = simpananNama;
            resEmail.textContent = simpananEmail;
            resTim.textContent = simpananTim;
            boxStatus.style.display = "block";
        } else {
            boxStatus.style.display = "none";
        }
    }

    // Jalankan fungsi muat data setiap kali halaman dibuka/di-refresh
    muatDataLocalStorage();

    // Event handler saat user menekan tombol submit form
    form.addEventListener("submit", function (e) {
        // Hentikan reload default browser demi validasi kustom/proses penyimpanan
        e.preventDefault();

        // Ambil nilai dari setiap field input form
        const inputNama = document.getElementById("nama").value;
        const inputEmail = document.getElementById("email").value;
        const inputTim = document.getElementById("timFavorit").value;

        // Simpan data hasil inputan ke dalam basis data LocalStorage lokal browser
        localStorage.setItem("fan_nama", inputNama);
        localStorage.setItem("fan_email", inputEmail);
        localStorage.setItem("fan_tim", inputTim);

        // Perbarui tampilan antarmuka halaman secara real-time
        muatDataLocalStorage();
        alert("Selamat! Data pendaftaran Fan Club F1 berhasil disimpan.");
    });

    // Fitur tambahan penunjang: Hapus data dari localStorage
    btnHapus.addEventListener("click", function () {
        if (confirm("Apakah kamu yakin ingin membatalkan keanggotaan fan club?")) {
            localStorage.removeItem("fan_nama");
            localStorage.removeItem("fan_email");
            localStorage.removeItem("fan_tim");
            
            // Reset form dan sembunyikan kotak status
            form.reset();
            muatDataLocalStorage();
        }
    });
});
