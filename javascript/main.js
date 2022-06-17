const btn = document.querySelectorAll(".btn-add-cart");
// console.log(btn)
btn.forEach(function(button,index){
    // console.log(button,index)
    button.addEventListener("click",function(event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector(".product-item__img img").src;
        var productName = product.querySelector(".product-item__name h1").innerText;
        var productPrice = product.querySelector(".product-item__price span").innerText;
        // console.log(productImg,productName,productPrice)
        addCart(productImg,productName,productPrice);
    })
})

function addCart(productImg,productName,productPrice) {
    var addtr = document.createElement("tr")
    var trContent = ' <tr> <td style="display:flex ;align-items:center;"><img style="width: 80px;margin-right: 6px" src="'+productImg+'" alt="">'+productName+'</td> <td style="margin-left: 8px;"> <p><span>'+productPrice+'</span><sup>₫</sup></p></td><td><input style="width: 30px; outline: none; margin-left: 4px;" type="number" value="1" min="1"></td><td style="cursor:pointer;">Xoa</td></tr>';
    addtr.innerHTML = trContent;
    var cartTable = document. querySelector("tbody");
    // console.log(cartTable)
    cartTable.append(addtr); //Thêm 'tr' vào cuối cùng của thẻ tbody
}





// Tắt mở cart list
const cartbtn = document.querySelector(".close-icon-wrapper");
const cartshow =document.querySelector(".cart-icon");
const cartshowmb =document.querySelector(".cart-icon-mobile");
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.display= "block";
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.display= "none";
})