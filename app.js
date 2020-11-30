const closeBtn = document.querySelector(".email-modal-close");
const submitBtn = document.querySelector(".submit");
// hamburger menu
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
})


// email modal
submitBtn.addEventListener('click', () => {
  document.getElementById("email-modal-bg").classList.remove("email-modal-bg-active");
});

closeBtn.addEventListener('click', () => {
  document.getElementById("email-modal-bg").classList.remove("email-modal-bg-active");
});


function modalOpen5() {
  document.getElementById("email-modal-bg").classList.add("email-modal-bg-active");
  document.getElementById("email-modal").classList.add("email-modal-active");
}

setTimeout("modalOpen5()", 5000);

// lightbox

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");

    // dynamic change text and image
    const originalSrc = preview.getAttribute("data-original");
    original.src = `../img/home/${originalSrc}`;
    const altText = preview.alt;
    caption.innerText = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
