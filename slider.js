document.addEventListener('DOMContentLoaded', function() {
    const mainItems = document.querySelectorAll('.g9x-gallery-slider-main-item');
    const thumbnails = document.querySelectorAll('.g9x-gallery-slider-thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const index = this.getAttribute('data-index');

            // Remove active class from all main items
            mainItems.forEach(item => item.classList.remove('active'));

            // Add active class to the clicked thumbnail's corresponding main item
            mainItems[index].classList.add('active');
        });
    });
});
