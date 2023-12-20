document.addEventListener('DOMContentLoaded', function () {
    const comicContainer = document.getElementById('comic-container');

    document.addEventListener('wheel', function (event) {
        // Прокручиваем страницу вверх или вниз при помощи колеса мыши
        comicContainer.scrollTop += event.deltaY;
    });
});

