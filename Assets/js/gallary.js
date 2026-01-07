
document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".inbox");

  images.forEach(img => {
    img.addEventListener("click", () => {
      openModal(img);
    });
  });

  function openModal(img) {
    document.getElementById("modal-img").src = img.src;
    document.getElementById("modal-title").innerText = img.alt;
    document.getElementById("modal").style.display = "flex";
  }

  window.closeModal = function () {
    document.getElementById("modal").style.display = "none";
  };

});
