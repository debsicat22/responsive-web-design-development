function showGame(gameNumber) {
    const gameSections = document.querySelectorAll('.content');
    gameSections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedGame = document.getElementById(`game${gameNumber}`);
    selectedGame.style.display = 'block';
}


const carousels = document.querySelectorAll('.image-carousel');
carousels.forEach(carousel => {
    let currentImage = 0;
    const images = carousel.querySelectorAll('img');
    
    function showNextImage() {
        images[currentImage].style.opacity = '0';
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.opacity = '1';
        setTimeout(showNextImage, 3000); 
    }

    showNextImage();
});
