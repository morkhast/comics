document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.comic-page');
    let currentPage = 0;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.style.display = 'flex';
            } else {
                page.style.display = 'none';
            }
        });
    }

    function nextPage() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    }

    document.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
            nextPage();
        } else if (event.deltaY < 0) {
            prevPage();
        }
    });

    // Добавьте другие события, такие как клики или стрелки клавиатуры, если нужно
});

