// memunculkan rekomendasi teman dari kontak
document
  .getElementById("toggle-add-friend")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addFriendImage = document.querySelector(".add-friend img");
    const contentAddFriend = document.querySelector(".content-add-friend");

    addFriendImage.classList.toggle("rotated");
    contentAddFriend.classList.toggle("show");
  });

//  memunculkan content postingan/repost/tersimpan
document.getElementById("postingan").addEventListener("click", function () {
  document.getElementById("content-postingan").style.display = "block";
  document.getElementById("content-repost").style.display = "none";
  document.getElementById("content-tersimpan").style.display = "none";

  this.classList.add("active");
  document.getElementById("repost").classList.remove("active");
  document.getElementById("tersimpan").classList.remove("active");
});

document.getElementById("repost").addEventListener("click", function () {
  document.getElementById("content-postingan").style.display = "none";
  document.getElementById("content-repost").style.display = "block";
  document.getElementById("content-tersimpan").style.display = "none";

  this.classList.add("active");
  document.getElementById("postingan").classList.remove("active");
  document.getElementById("tersimpan").classList.remove("active");
});

document.getElementById("tersimpan").addEventListener("click", function () {
  document.getElementById("content-postingan").style.display = "none";
  document.getElementById("content-repost").style.display = "none";
  document.getElementById("content-tersimpan").style.display = "block";

  this.classList.add("active");
  document.getElementById("postingan").classList.remove("active");
  document.getElementById("repost").classList.remove("active");
});

// Tambahkan kelas active ke tombol postingan saat halaman dimuat
window.onload = function () {
  document.getElementById("postingan").classList.add("active");
};

// like
document.addEventListener("DOMContentLoaded", function () {
  const likeLink = document.querySelector(".like a");
  const popupOverlay = document.getElementById("popup-overlay");
  const popupContent = document.getElementById("popup-content");
  const closePopupBtn = document.getElementById("close-popup");

  // Fungsi untuk menampilkan popup
  function showPopup() {
    popupOverlay.style.display = "block";
    popupContent.style.display = "block";
  }

  // Fungsi untuk menyembunyikan popup
  function hidePopup() {
    popupOverlay.style.display = "none";
    popupContent.style.display = "none";
  }

  // Event listener untuk link "Suka"
  likeLink.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah link default
    showPopup();
  });

  // Event listener untuk menutup popup saat mengklik di luar popup
  popupOverlay.addEventListener("click", function (event) {
    if (event.target === popupOverlay) {
      hidePopup();
    }
  });

  // Event listener untuk tombol tutup di dalam popup
  closePopupBtn.addEventListener("click", hidePopup);
});

// fixed prt
document.addEventListener("DOMContentLoaded", function () {
  var prt = document.querySelector(".prt");
  var prtOffset = prt.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > prtOffset) {
      prt.classList.add("fixed");
    } else {
      prt.classList.remove("fixed");
    }
  });
});

// content-saran
document.addEventListener("DOMContentLoaded", function () {
  var saranAkunLink = document.querySelector(".saran-akun a");
  var contentSaranAkun = document.getElementById("content-saran-akun");
  var overlayBlack = document.getElementById("overlay-black");

  // Ketika tautan diklik
  saranAkunLink.addEventListener("click", function (event) {
    event.preventDefault(); // Menghentikan perilaku default tautan

    // Tambahkan atau hapus kelas untuk menampilkan atau menyembunyikan konten
    contentSaranAkun.style.display = "block";
    overlayBlack.style.display = "block";

    // Tambahkan kelas animasi setelah sedikit waktu untuk memastikan transform berjalan
    setTimeout(function () {
      contentSaranAkun.classList.add("show");
      overlayBlack.classList.add("show");
    }, 10); // Sesuaikan dengan durasi animasi

    // Scroll ke atas halaman
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Ketika overlay atau konten saran diklik akan hilang
  overlayBlack.addEventListener("click", function () {
    contentSaranAkun.classList.remove("show");
    overlayBlack.classList.remove("show");

    // Tunggu animasi selesai, kemudian sembunyikan konten
    setTimeout(function () {
      contentSaranAkun.style.display = "none";
      overlayBlack.style.display = "none";
    }, 300); // Sesuaikan dengan durasi animasi
  });
});

// nav tersimpan
document.addEventListener("DOMContentLoaded", function () {
  const koleksiButton = document.getElementById("koleksi");
  const suaraButton = document.getElementById("suara");
  const contentKoleksi = document.getElementById("content-koleksi");
  const contentSuara = document.getElementById("content-suara");

  // Function to show koleksi content and hide suara content
  function showKoleksi() {
    contentKoleksi.style.display = "block";
    contentSuara.style.display = "none";
    koleksiButton.classList.add("active");
    suaraButton.classList.remove("active");
  }

  // Function to show suara content and hide koleksi content
  function showSuara() {
    contentKoleksi.style.display = "none";
    contentSuara.style.display = "block";
    koleksiButton.classList.remove("active");
    suaraButton.classList.add("active");
  }

  // Event listeners for buttons
  koleksiButton.addEventListener("click", showKoleksi);
  suaraButton.addEventListener("click", showSuara);

  // Set koleksi as the default active tab
  showKoleksi();
});

// tidak bisa di klik kanan gambarnya
// Menonaktifkan klik kanan pada gambar dengan class "prevent-right-click"
document.querySelectorAll(".prevent-right-click").forEach((img) => {
  img.addEventListener("contextmenu", (event) => event.preventDefault());
});

// Untuk menonaktifkan klik kanan secara global pada seluruh gambar di halaman
document.addEventListener("contextmenu", (event) => {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});
