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
