document.addEventListener('DOMContentLoaded', function () {
    const comicContainer = document.getElementById('comic-container');
    const comicPages = document.querySelectorAll('.comic-page');

    let currentPageIndex = 0;

    function scrollToNextPage() {
        if (currentPageIndex < comicPages.length - 1) {
            currentPageIndex++;
            comicPages[currentPageIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }

    function scrollToPrevPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            comicPages[currentPageIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Добавляем обработчик события прокрутки колеса мыши
    document.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
            scrollToNextPage();
        } else if (event.deltaY < 0) {
            scrollToPrevPage();
        }
    });

    // Добавляем обработчик события клавиш клавиатуры
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown') {
            scrollToNextPage();
        } else if (event.key === 'ArrowUp') {
            scrollToPrevPage();
        }
    });
});

