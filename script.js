
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");


const images = document.querySelectorAll(".clickable-image");


images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.style.display = "block"; 
        modalImg.src = image.src; 
    });
});


const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; 
});


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});