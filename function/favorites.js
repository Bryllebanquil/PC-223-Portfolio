document.addEventListener('DOMContentLoaded', function () {

    // ── Heart buttons ──
    const heartBtns = document.querySelectorAll('.heart-btn');

    heartBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            this.classList.toggle('favorited');

            const movie = this.dataset.movie;
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

            if (this.classList.contains('favorited')) {
                if (!favorites.includes(movie)) favorites.push(movie);
            } else {
                favorites = favorites.filter(function (fav) { return fav !== movie; });
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });

    // ── Restore favorited state on load ──
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
    heartBtns.forEach(function (btn) {
        if (saved.includes(btn.dataset.movie)) {
            btn.classList.add('favorited');
        }
    });

    // ── Comment submit ──
    const submitBtn = document.getElementById('submit-comment');
    const dropdown  = document.getElementById('movie-dropdown');
    const textarea  = document.getElementById('comment-input');
    const list      = document.getElementById('comment-list');

    if (!submitBtn || !dropdown || !textarea || !list) return;

    // Load saved comments on page load
    const savedComments = JSON.parse(localStorage.getItem('movieComments') || '[]');
    savedComments.forEach(function (c) { renderComment(c.movie, c.text); });

    submitBtn.addEventListener('click', function () {
        const movie = dropdown.value.trim();
        const text  = textarea.value.trim();
        if (!text) return;

        const comments = JSON.parse(localStorage.getItem('movieComments') || '[]');
        comments.push({ movie: movie, text: text });
        localStorage.setItem('movieComments', JSON.stringify(comments));

        renderComment(movie, text);
        textarea.value = '';
    });

    function renderComment(movie, text) {
        const item = document.createElement('div');
        item.className = 'comment-item';
        item.innerHTML =
            '<span class="comment-movie">' + movie + '</span>' +
            '<p class="comment-text">' + text + '</p>' +
            '<button class="comment-delete" title="Delete">&#x2715;</button>';

        item.querySelector('.comment-delete').addEventListener('click', function () {
            item.classList.add('comment-removing');
            item.addEventListener('animationend', function () {
                item.remove();
                const all = JSON.parse(localStorage.getItem('movieComments') || '[]');
                const idx = all.findIndex(function (c) { return c.movie === movie && c.text === text; });
                if (idx !== -1) all.splice(idx, 1);
                localStorage.setItem('movieComments', JSON.stringify(all));
            });
        });

        list.appendChild(item);
    }
});