// Lưu trữ tham chiếu đến giỏ hàng và nút điều khiển
const cartMenu = document.getElementById('cart-menu');
const toggleCartButton = document.getElementById('toggle-cart-btn');

// Ẩn giỏ hàng khi mới vào trang
cartMenu.style.display = 'none';

// Xử lý sự kiện nhấn nút "Mua ngay"
const btn = document.querySelectorAll('button');
btn.forEach(function(button) {
    button.addEventListener('click', function(event) {
        var phantubtn = event.target;
        var product = phantubtn.parentElement;
        var productImg = product.querySelector('img').src; // Lấy link ảnh
        var productName = product.nextElementSibling.querySelector('h3').innerText; // Lấy tên sản phẩm
        var productPriceText = product.nextElementSibling.querySelector('.product__info-price span').innerText; // Lấy giá sản phẩm
        var productPrice = parseFloat(productPriceText.replace(/[^0-9]/g, '')); // Chuyển đổi giá từ chuỗi sang số
        themproduct(productPrice, productImg, productName);

        // Hiển thị giỏ hàng khi thêm sản phẩm
        cartMenu.style.display = 'block';
        cartMenu.classList.add('active');
    });
});

// Thêm sản phẩm vào giỏ hàng
function themproduct(productPrice, productImg, productName) {
    var addtr = document.createElement('tr');
    var trcontent = `<td class="nameproduct"><img src="${productImg}" alt=""> ${productName}</td><td><p>${productPrice.toLocaleString()}<sup>đ</sup></p></td><td><input class="sl" type="number" value="1" min="1" step="1"></td><td class="dele">xoa</td>`;
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector('section.gio table tbody');
    cartTable.append(addtr);
    carttotal();
    
    // Thêm sự kiện lắng nghe cho thay đổi số lượng
    addtr.querySelector('input').addEventListener('input', function() {
        carttotal();
    });

    // Thêm sự kiện xóa sản phẩm
    addtr.querySelector('.dele').addEventListener('click', function() {
        addtr.remove();
        carttotal();
    });
}

// Tính tổng tiền trong giỏ hàng
function carttotal() {
    var cartItem = document.querySelectorAll('tbody tr');
    var total = 0;
    cartItem.forEach(function(item) {
        var inputValue = parseInt(item.querySelector('input').value, 10);
        var productPriceText = item.querySelector('p').innerText;
        var productPrice = parseFloat(productPriceText.replace(/[^0-9]/g, ''));
        total += inputValue * productPrice;
    });
    var totalElement = document.querySelector('.tongtien span');
    if (totalElement) {
        totalElement.innerText = `${total.toLocaleString()} đ`; // Hiển thị tổng tiền với định dạng số
    }
}

// Xử lý sự kiện nhấn nút điều khiển hiển thị/ẩn giỏ hàng
toggleCartButton.addEventListener('click', function() {
    cartMenu.classList.toggle('active');
});
