// Hiên thông báo khi thêm sản phẩm
function toast ({title ='', message ='', type = 'info', duration = 3000}, timeAction = 1000) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');

        // Tự động xóa toast
        var timeDelete = duration +timeAction;
        const autoRemoveID = setTimeout(function() {
            main.removeChild(toast);
        }, timeDelete);
        
        // Xóa toast khi click
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveID);//xóa autoRemoveID khi click vào close btn để không chạy hàm SetTimeOut
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
        }
        const icon = icons[type];
        const action = (timeAction / 1000).toFixed(2);
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);//Thêm class vào thẻ div để nhận css
        toast.style.animation =`toastSlideInTop ease 0.3s, fadeOut linear ${action}s ${delay}s forwards`;
        toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>`;
        main.appendChild(toast);//Thêm thẻ div vừa tạo vào thẻ div cha #toast
    }
}
// function showSuccessToast () {
//     toast({
//         title: 'Thêm vào giỏ hàng thành công!',
//         message: 'Máy vi tính kết nối internet',
//         type: 'success',
//         duration: 4000,
//         timeAction: 1000,
//     });
// }
// function showInfoToast () {
//     toast({
//         title: 'Sản phẩm đã có trong giỏ hàng!',
//         message: 'Máy vi tính kết nối internet',
//         type: 'info',
//         duration: 4000,
//         timeAction: 1000,
//     });
// }
