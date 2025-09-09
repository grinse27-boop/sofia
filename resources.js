document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const afterWrapper = document.getElementById('image-after-wrapper');

    if (slider && afterWrapper) {
        slider.addEventListener('input', (event) => {
            afterWrapper.style.width = event.target.value + '%';
        });
    }
});