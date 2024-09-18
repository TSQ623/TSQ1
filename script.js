document.getElementById('darken').addEventListener('click', function() {
    document.querySelector('.image-gallery img').style.filter = 'drop-shadow(5px 5px 5px black)';
});

document.getElementById('lighten').addEventListener('click', function() {
    document.querySelector('.image-gallery img').style.filter = 'brightness(1.5)';
});