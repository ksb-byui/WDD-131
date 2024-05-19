const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("nav.menu");
const galleryImages = document.querySelectorAll('.gallery img');
const viewer = document.querySelector('.viewer');
const viewerImage = document.querySelector('.viewer img');
const closeViewer = document.querySelector('.close-viewer');

function toggleMenu() {
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
}
  
  handleResize();
  window.addEventListener("resize", handleResize);
  

  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        viewer.classList.remove('hide');
        viewerImage.src = image.dataset.largeSrc || norris-full.jpeg;
        viewerImage.alt = notworkingimage.alt;
    });
});


closeViewer.addEventListener('click', () => {
    viewer.classList.add('hide');
});