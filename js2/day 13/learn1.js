var productList = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
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

  var left=document.getElementById("left");
  var right=document.getElementById("right");
  var des=document.getElementById("des");
  var mod=document.getElementById("mod");
  let pho=productList['preview']
  console.log(pho)

  let phot=productList['photos']
  console.log(phot)


 //
 
    des.innerHTML=`
    <h1 id="first">${productList.name}</h1>
    <h5 id="second">${productList.brand}</h5>
            <h5 id="fourth">Price:<span> ${productList.price}</span></h5>
          <h5 id="fifth">Description</h5>
          <p id="sixth">${productList.description}</p>
          <h3 id="seventh">Product Preview</h3>
    `
  // 
  for(let i=0;i<productList.photos.length;i++){
    mod.innerHTML +=`
    <div class="card">
    <img class="imge" src="${phot[i]}" class="${i==0?"active":""}" />
    </div>
    `

  }
  left.innerHTML=`
  <img class="im" src="${productList.preview}" />
  `
  var cardImages = document.querySelectorAll('.card .imge');

  // Add click event listeners to each card image
  cardImages.forEach((image, index) => {
      image.addEventListener('click', () => {
          // Update the image in the left section
       
        
          $(".imge").removeClass("active")
          $(image).addClass("active")

        //   cardImages.forEach((img) => {
        //     img.classList.remove('active');
        // });
        // // Add active class to the clicked image
        // image.classList.add('active');

          var leftImage = document.querySelector('.im');
          
          leftImage.src = productList.photos[index];
      });
  });


  //using jquery

//   cardImages.forEach((image, index) => {
//     $(image).on('click', () => {
//         // Remove active class from all images
//         $('.imge').removeClass('active');
        
//         // Add active class to the clicked image
//         $(image).addClass('active');

//         // Update the image in the left section
//         var leftImage = $('.im');
//         leftImage.attr('src', productList.photos[index]);
//     });
// });




