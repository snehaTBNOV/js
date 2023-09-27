console.log("script loaded");

var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [ ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}



var mainProduct_img_left = document.getElementById("productImg");


mainProduct_img_left.src =  document.getElementById("img0").src;
document.getElementById("img0").className="active";

document.getElementById("img0").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img0").src;
    document.getElementById("img0").className="active";
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
  });
  document.getElementById("img1").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img1").src;
    document.getElementById("img1").className="active";
    document.getElementById("img0").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
  });
  document.getElementById("img2").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img2").src;
    document.getElementById("img2").className="active";
    document.getElementById("img0").classList.remove("active");
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img4").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
  });
  document.getElementById("img3").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img3").src;
    document.getElementById("img3").className="active";
    document.getElementById("img0").classList.remove("active");
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img4").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
  });

  document.getElementById("img4").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img4").src;
    document.getElementById("img4").className="active";
    document.getElementById("img0").classList.remove("active");
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
  });


  document.getElementById("img5").addEventListener("click", function() {
    mainProduct_img_left.src =  document.getElementById("img5").src;
    document.getElementById("img5").className="active";
    document.getElementById("img0").classList.remove("active");
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img4").classList.remove("active");

    console.log("")
  });
