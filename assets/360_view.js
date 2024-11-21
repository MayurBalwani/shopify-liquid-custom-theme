document.addEventListener("DOMContentLoaded", function () {
    const viewer = document.getElementById("container");
    const imageTag = document.getElementById("product-image");

    const images = JSON.parse(viewer.dataset.images);
    let currentIndex = 3;

    function updateImage() {
        imageTag.src = images[`image_${currentIndex}`];
    }

    updateImage();

    function rotateImage(direction) {
        currentIndex = (currentIndex + direction + Object.keys(images).length) % Object.keys(images).length;
        updateImage();
    }

    prevButton= document.getElementById("prev")
    prevButton.addEventListener("click", () => rotateImage(-1));

    nextButton= document.querySelector("#next")
    nextButton.addEventListener("click", () => rotateImage(1));
});
