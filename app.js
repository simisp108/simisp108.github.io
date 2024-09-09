document.addEventListener('DOMContentLoaded', ()=>{
    const imgswaps = ['Images/teacher_1.jpg','Images/teacher_2.jpg','Images/teacher_3.jpg','Images/teacher_4.jpg'];
    let currentIndex = 0;
    const swapImageElement = document.getElementById('swap_image');
    const nextImageButton = document.getElementById('next_image');
    const lastImageButton = document.getElementById('last_image');

    function nextImage() {
        currentIndex = (currentIndex+1) % imgswaps.length;
        swapImageElement.src = imgswaps[currentIndex];
    }
    function lastImage() {
        currentIndex = (currentIndex+3) % imgswaps.length;
        swapImageElement.src = imgswaps[currentIndex];
    }

    setInterval(nextImage,5000);

    nextImageButton.addEventListener('click',nextImage);
    lastImageButton.addEventListener('click',lastImage);
});