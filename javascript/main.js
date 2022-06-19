const btn = document.querySelectorAll(".btn-add-cart");
// console.log(btn)
btn.forEach(function(button,index){
    // console.log(button,index)
    button.addEventListener("click",function(event) {
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement;
        // console.log(product)
        var productImg = product.querySelector(".product-item__img img").src;
        var productName = product.querySelector(".product-item__name h1").innerText;
        var productPrice = product.querySelector(".product-item__price span").innerText;
        addCart(productImg,productName,productPrice);
        deleteCart();
    })
})

// Ham them product vao cart list
function addCart(productImg,productName,productPrice) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll(".cart__tbody tr");
    for (var i = 0; i < cartItem.length; i ++) {
        var productSame = document.querySelectorAll(".cart-product-name")
        var inputValue = cartItem[i].querySelector("input");
        if(productSame[i].innerHTML == productName) {
            inputValue.value ++;
            totalPrice();
            toast({
                title: 'Sản phẩm đã có trong giỏ hàng (Tăng SL!)',
                message: productName,
                type: 'info',
                duration: 2000,
                timeAction: 1000,
            });
            return;
        }
    }
    var trContent = '<tr><td class="cart-product-img-name"><img src="'+productImg+'" alt=""><span class="cart-product-name">'+productName+'</span></td><td class="cart-product-price"><p><span>'+productPrice+'</span><span>.000</span><sup>₫</sup></p></td><td class="cart-product-amount"><input type="number" value="1" min="1"><span>Xóa</span></td></tr>';
    addtr.innerHTML = trContent;
    var cartTable = document. querySelector("tbody");
    cartTable.append(addtr); //Thêm 'tr' vào cuối cùng của thẻ tbody
    toast({
        title: 'Thêm vào giỏ hàng thành công!',
        message: productName,
        type: 'success',
        duration: 2000,
        timeAction: 1000,
    });
    totalPrice();
    inputChange();
    deleteCart();
}

// Ham tinh tong tien
function totalPrice() {
    var cartItem = document.querySelectorAll(".cart__tbody tr");
    var totalBase = 0;
    // console.log(cartItem.length)
    for (var i = 0; i < cartItem.length; i ++) {
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector(".cart-product-price span").innerHTML;
        if (productPrice.length < 4) {
            multiply = inputValue*productPrice*1000;
        } else {
            multiply = inputValue*productPrice*1000000;
        }
        totalBase += multiply;
    }
    var cartTotalBase = document.querySelector(".price-total span");
    totalBaseSub = totalBase.toLocaleString('de-DE');// đê thêm dấu phân cách phần nghìn phần trăm vào 'totalBase' v...vv...
    cartTotalBase.innerHTML=totalBaseSub;
}

// Hàm xóa sản phẩm trong cart list
function deleteCart() {
    var cartItem = document.querySelectorAll(".cart__tbody tr");
    for (var i = 0; i < cartItem.length; i ++) {
        var product = document.querySelectorAll(".cart-product-amount span");
        // console.log(product)
        product[i].addEventListener("click",function(event) {
            var cartDelete = event.target;
            var CartDeleteBtn = cartDelete.parentElement.parentElement;
            CartDeleteBtn.remove();
            totalPrice();
        })
    }
}
deleteCart();

// Thay đổi số lượng sản phẩm trong thẻ input 
function inputChange() {
    var cartItem = document.querySelectorAll(".cart__tbody tr");
    for (var i = 0; i < cartItem.length; i ++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change",function() {
            totalPrice();
        })
    }
}
inputChange();

// Tắt mở cart list
const cartBtn = document.querySelector(".close-icon-wrapper");
const cartShow =document.querySelector(".cart-icon");
cartShow.addEventListener("click",function(){
    document.querySelector(".cart").style.display= "block";
    document.querySelector(".header.header-sticky .header__navbar-list.nav-menu").style.display = "none";//Ẩn menu mobile khi nhấn vào Cart list
    totalPrice();
})
cartBtn.addEventListener("click",function(){
    document.querySelector(".cart").style.display= "none";
    document.querySelector(".header.header-sticky .header__navbar-list.nav-menu").style.display = "flex";
})


searchButton.addEventListener('click',function() {
    document.querySelector(".header.header-sticky .header__navbar-list.nav-menu").style.display = "none";//Ẩn menu mobile khi nhấn vào tìm kiếm
})
closeButton.addEventListener('click',function() {
    document.querySelector(".header.header-sticky .header__navbar-list.nav-menu").style.display = "flex";
})
