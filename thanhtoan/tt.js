
document.addEventListener('DOMContentLoaded', function () {
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
    const wardSelect = document.getElementById('ward');

    // Danh sách quận/huyện và xã/phường theo tỉnh/thành phố
    const addressData = {
        'Hà Nội': {
            'Quận Hoàn Kiếm': ['Phường Hàng Bạc', 'Phường Hàng Buồm', 'Phường Hàng Đào'],
            'Quận Ba Đình': ['Phường Trúc Bạch', 'Phường Đội Cấn', 'Phường Ngọc Hà'],
            // Thêm các quận/huyện khác
        },
        'Hồ Chí Minh': {
            'Quận 1': ['Phường Bến Nghé', 'Phường Bến Thành', 'Phường Nguyễn Thái Bình'],
            'Quận 2': ['Phường Bình An', 'Phường An Phú', 'Phường Thảo Điền'],
            // Thêm các quận/huyện khác
        },
        // Thêm các tỉnh/thành phố khác
    };

    // Cập nhật danh sách quận/huyện khi chọn tỉnh/thành phố
    citySelect.addEventListener('change', function () {
        const city = this.value;
        const districts = addressData[city] || {};
        districtSelect.innerHTML = '<option value="" disabled selected>Chọn quận/huyện</option>';
        wardSelect.innerHTML = '<option value="" disabled selected>Chọn xã/phường</option>';
        wardSelect.disabled = true;
        districtSelect.disabled = !city;

        for (const district in districts) {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        }
    });

    // Cập nhật danh sách xã/phường khi chọn quận/huyện
    districtSelect.addEventListener('change', function () {
        const city = citySelect.value;
        const district = this.value;
        const wards = addressData[city][district] || [];
        wardSelect.innerHTML = '<option value="" disabled selected>Chọn xã/phường</option>';
        wardSelect.disabled = !district;

        wards.forEach(function (ward) {
            const option = document.createElement('option');
            option.value = ward;
            option.textContent = ward;
            wardSelect.appendChild(option);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Hiển thị thông tin sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('order-img').src = urlParams.get('img');
    document.getElementById('order-name').innerText = urlParams.get('name');
    document.getElementById('order-price').innerText = `Giá: ${urlParams.get('price')}đ`;

    // Xử lý sự kiện gửi biểu mẫu
    document.getElementById('order-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn hành động gửi biểu mẫu mặc định

        // Lấy dữ liệu từ biểu mẫu
        const receiverName = document.getElementById('receiver-name').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const city = document.getElementById('city').value;
        const district = document.getElementById('district').value;
        const ward = document.getElementById('ward').value;
        const additionalAddress = document.getElementById('additional-address').value;
        const paymentMethod = document.getElementById('payment-method').value;

        // Kiểm tra tính hợp lệ của biểu mẫu
        if (receiverName && phoneNumber && city && district && ward && additionalAddress && paymentMethod) {
            // Hiển thị thông báo đặt hàng thành công
            alert('Đặt hàng thành công!');

            // Bạn có thể thực hiện các hành động khác như gửi dữ liệu đến server ở đây
        } else {
            // Hiển thị thông báo lỗi nếu có trường chưa được điền
            alert('Vui lòng điền đầy đủ thông tin trước khi đặt hàng.');
        }
    });
});
