const card = document.querySelector('.card');
    const backgroundMusic = document.getElementById('backgroundMusic');

    card.addEventListener('click', function() {
        card.classList.toggle('open');
        if (card.classList.contains('open')) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
    });