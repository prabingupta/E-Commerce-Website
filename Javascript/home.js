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

  let bestDeals = document.getElementById("home-best-deals");
  let bestSellers = document.getElementById("home-best-sellers")
  let newArrivals = document.getElementById("home-new-arrivals")

  let bestDealsImage = ["../Pictures/allpngimagesofprinters/Canon/Canon/CanonM.png","../Pictures/allpngimagesofprinters/Hp/Hp/Hp1.png","../Pictures/allpngimagesofprinters/Hp/Hp/Hp2.png","../Pictures/allpngimagesofprinters/Epson/Epson/Epson2.png"]
  let bestSellersImage = ["../Pictures/allpngimagesofprinters/Epson/Epson/Epso3.png","../Pictures/allpngimagesofprinters/Epson/Epson/Epson1.png","../Pictures/allpngimagesofprinters/Hp/Hp/Hp3.png","../Pictures/allpngimagesofprinters/Brother/Brother/Brother2.png"]
  let newArrivalsImage=["../Pictures/allpngimagesofprinters/Canon/Canon/Canon1.png","../Pictures/allpngimagesofprinters/Canon/Canon/Canon2.png","../Pictures/allpngimagesofprinters/Brother/Brother/Brother.png","../Pictures/allpngimagesofprinters/Epson/Epson/Epson4.png"]
  setInterval(sliderDeals,3000)
  setInterval(sliderSellers,3000)
  setInterval(sliderArrivals,3000)
  let j =0;
  function sliderDeals(){
    console.log('hi')
    if (j< bestDealsImage.length){
    j=j+1;
   }
   
   else{
    j =1;
   }
  bestDeals.innerHTML = "<img src =" +bestDealsImage[j-1] +">"
  }
  function sliderSellers(){
    if (j< bestSellersImage.length){
    j=j+1;
   }
   
   else{
    j=1;
   }
   console.log(j);
  bestSellers.innerHTML = "<img src =" +bestSellersImage[j-1] +">"
  }
  function sliderArrivals(){
    if (j< newArrivalsImage.length){
    j=j+1;
   }
   
   else{
    j=1;
   }
   console.log(j);
  newArrivals.innerHTML = "<img src =" +newArrivalsImage[j-1] +">"
  }
})


