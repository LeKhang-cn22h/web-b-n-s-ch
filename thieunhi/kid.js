// script.js
document.addEventListener('DOMContentLoaded', function() {
    const priceSlider = document.getElementById('priceSlider');
    const priceValue = document.getElementById('priceValue');

    priceSlider.addEventListener('input', function() {
        // Cập nhật giá trị hiển thị
        priceValue.textContent = this.value.toLocaleString();
    });
});
