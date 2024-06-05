let filters = document.querySelectorAll('a[data-filter]');

for (let filter of filters) {
    filter.addEventListener('click', function (e) {
        e.preventDefault();

        let catId = filter.getAttribute('data-filter');
        let workCat = document.querySelectorAll('.main-product-menu');

        workCat.forEach(function (c) {
                if (c.getAttribute('data-family') !== catId) {
                    c.classList.add('hide');
                } else {
                    c.classList.remove('hide');
                }
        })

    });
}