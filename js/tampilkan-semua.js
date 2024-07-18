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
    document
      .querySelectorAll(".nav button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(
        ".content-mengikuti, .content-pengikut, .content-disarankan"
      )
      .forEach((ct) => ct.classList.remove("active"));
    button.classList.add("active");
    content.classList.add("active");
  }

  // Set default active content
  setActive(btnDisarankan, contentDisarankan);

  // Baca parameter URL
  const urlParams = new URLSearchParams(window.location.search);
  const viewParam = urlParams.get("view");

  if (viewParam) {
    if (viewParam === "mengikuti") {
      setActive(btnMengikuti, contentMengikuti);
    } else if (viewParam === "pengikut") {
      setActive(btnPengikut, contentPengikut);
    } else if (viewParam === "disarankan") {
      setActive(btnDisarankan, contentDisarankan);
    }
  }
});

// nav
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const nav = document.querySelector(".nav");
  const headerOffsetTop = header.offsetTop;
  const navOffsetTop = nav.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > headerOffsetTop) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }

    if (window.pageYOffset > navOffsetTop - header.offsetHeight) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });
});

// pencarian akun
document
  .getElementById("input-pencarian")
  .addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const usernames = document.querySelectorAll(
      "#content-pengikut #p-username"
    );
    const suggestions = document.getElementById("suggestions");

    // Clear previous suggestions
    suggestions.innerHTML = "";

    if (query) {
      usernames.forEach((username) => {
        if (username.textContent.toLowerCase().includes(query)) {
          const suggestionItem = document.createElement("div");
          suggestionItem.className = "suggestion-item";
          suggestionItem.textContent = username.textContent;

          suggestionItem.addEventListener("click", function () {
            document.getElementById("input-pencarian").value =
              username.textContent;
            suggestions.innerHTML = "";
            username.scrollIntoView({ behavior: "smooth", block: "center" });
          });

          suggestions.appendChild(suggestionItem);
        }
      });

      if (suggestions.childElementCount > 0) {
        suggestions.style.display = "block";
      } else {
        suggestions.style.display = "none";
      }
    } else {
      suggestions.style.display = "none";
    }
  });

document
  .getElementById("form-pencarian")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const query = document
      .getElementById("input-pencarian")
      .value.toLowerCase();
    const usernames = document.querySelectorAll(
      "#content-pengikut #p-username"
    );

    usernames.forEach((username) => {
      if (username.textContent.toLowerCase() === query) {
        username.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
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
