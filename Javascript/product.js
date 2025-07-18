document.addEventListener("DOMContentLoaded",()=>{
    let navbar = document.getElementById("navbar");
    let scrollThreshold = 0.4;
    let pixels = scrollThreshold*window.innerHeight;
    navbar.style.transition="visiblity 0.4s ease";
    navbar.style.visibility= "visible";

    window.addEventListener("scroll",()=>{
        let scroll = window.scrollY
        if(scroll>pixels){
            navbar.style.visibility="hidden";
        }
        else{
            navbar.style.visibility = "visible";
        }
    })
})
function updateWishListCounter(){
    let wishlist = document.querySelector(".wishlist-num")
    let Count = Number(document.querySelector(".wishlist-num").textContent);
    wishlist.textContent = Count+1;
  }
  function updateCartCounter(){
      let cart = document.querySelector(".cart-num")
      let Count = Number(document.querySelector(".cart-num").textContent);
      cart.textContent = Count+1;
  }