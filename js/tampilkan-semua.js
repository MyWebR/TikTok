document.addEventListener("DOMContentLoaded", function () {
  const btnMengikuti = document.getElementById("mengikuti");
  const btnPengikut = document.getElementById("pengikut");
  const btnDisarankan = document.getElementById("disarankan");

  const contentMengikuti = document.getElementById("content-mengikuti");
  const contentPengikut = document.getElementById("content-pengikut");
  const contentDisarankan = document.getElementById("content-disarankan");

  btnMengikuti.addEventListener("click", function () {
    setActive(btnMengikuti, contentMengikuti);
  });

  btnPengikut.addEventListener("click", function () {
    setActive(btnPengikut, contentPengikut);
  });

  btnDisarankan.addEventListener("click", function () {
    setActive(btnDisarankan, contentDisarankan);
  });

  function setActive(button, content) {
    // Menghapus kelas aktif dari semua tombol dan konten
    document
      .querySelectorAll(".nav button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(
        ".content-mengikuti, .content-pengikut, .content-disarankan"
      )
      .forEach((ct) => ct.classList.remove("active"));

    // Menambahkan kelas aktif ke tombol dan konten yang dipilih
    button.classList.add("active");
    content.classList.add("active");
  }

  // Set default active content
  setActive(btnDisarankan, contentDisarankan);
});
