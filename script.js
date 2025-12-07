
const creditContent = document.getElementById('creditContent');
const afterCredit = document.getElementById('afterCredit');

// Xử lý sự kiện khi danh đề kết thúc
creditContent.addEventListener('animationend', function() {
    showAfterCreditScene();
});

// Hiển thị after credit scene

// Tự động kích hoạt after credit scene sau 42 giây (nếu người dùng không tương tác)
setTimeout(() => {
    if (afterCredit.style.display !== 'block') {
        showAfterCreditScene();
        creditContent.style.animation = 'none';
    }
}, 90000);


// Tự động phát nhạc (có thể bị chặn bởi trình duyệt)
window.addEventListener('load', function() {
    backgroundMusic.volume = 1; // Đặt âm lượng 50%
    backgroundMusic.play().catch(function(error) {
    });
});

// Cho phép phát nhạc khi người dùng click bất kỳ đâu
document.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(e => console.log(e));
    }
}, { once: true }); // Chỉ chạy một lần