const btn= document.querySelectorAll(".product-item")
console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        console.log(product)
        var productImg = product.querySelector(".product-item__img img").src;
        var productName = product.querySelector(".product-item__name a").innerText;
        var productPrice = product.querySelector(".product-item__price span").innerText;
        // console.log(productImg,productName,productPrice)
        addcart(productPrice,productName,productImg)
    }})
})
function addcart(productPrice,productName,productImg){
    var addtr=document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length; i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            alert("SP da co")
            return
        }
    }
    var trcontent='<tr><td style="display:flex ;align-items:center"><img style="width: 80px" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>d</sup></p></td><td><input style="width: 30px; outline: none;" type="number"value="1"min="1"></td><td style="cursor:pointer;"><span class="cart-delete">Xoa</span></td></tr>'
    addtr.innerHTML=trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}
//-----------total price-----------
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC=0
    for(var i=0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        // console.log(productPrice)
        totalA = inputValueproductPrice1000
        // totalB = totalA.toLocaleString('de-DE')
        // console.log(totalB)
        totalC= totalC+totalA
        // totalD=totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML=totalC.toLocaleString("de-DE")
    cartPrice.innerHTML=totalC.toLocaleString("de-DE")
    //console.log(cartTotalA)
    inputchange()
}
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length; i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete= event.target
            var cartitemR=cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
            //console.log(cartitemR)
        })
    }
}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}
const cartbtn = document.querySelector(".close-icon-wrapper");
const cartshow =document.querySelector(".cart-icon");
const cartshowmb =document.querySelector(".cart-icon-mobile");
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.display= "block";
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.display= "none";
})
// cartshowmb.addEventListener("click",function(){
//     document.querySelector(".cart").style.right= "0"
//     document.querySelector(".navmobile").style.left="-100%"
//     document.querySelector(".navoverlay").style.display="none"

// })