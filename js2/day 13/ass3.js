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
  
  let temp_clothing_container = document.createElement("div");
  temp_clothing_container.classList.add("row", "justify-center", "card_container");
  console.log(productList.length);
  
      console.log(productList,"product");
      let preview_data = productList["preview"]
    console.log(preview_data,"preview");
   
    document.getElementById('image').src = preview_data;
  
    let preview_data1 = productList["photos"];
    console.log(preview_data1,"preview");
  
   console.log(preview_data1.length);
  
   document.getElementById('first').innerHTML = "Men Navy Blue Solid Sweatshirt";
   document.getElementById('second').innerHTML ="United Colors of Benetton";
   document.getElementById('third').innerHTML= "Price:";
   document.getElementById('eith').innerHTML= "2599";
   document.getElementById('foruth').innerHTML="Description";
   document.getElementById('fifth').innerHTML ="Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem"
   
  document.getElementById('sixth').innerHTML ="Product Preview";
  
  
   const modalElement = document.getElementById('modal'); 
  
        document.getElementById('image1').src=preview_data1[0];
        document.getElementById('image1').value =preview_data1[0];
        document.getElementById('image2').src=preview_data1[1];
        document.getElementById('image2').value =preview_data1[1];
        document.getElementById('image3').src=preview_data1[2];
        document.getElementById('image3').value =preview_data1[2];
        document.getElementById('image4').src=preview_data1[3];
        document.getElementById('image4').value =preview_data1[3];
        document.getElementById('image5').src=preview_data1[4];
        document.getElementById('image5').value =preview_data1[4];
        const imgValue = document.getElementById('image1')
       imgValue.classList.add('modal_value');
  
      
  
  function reply_click(val){
      console.log(val);
  
    if(val == 
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"){
       const imgValue = document.getElementById('image1')
       imgValue.classList.add('modal_value');
       const imgValue1 = document.getElementById('image2')
       imgValue1.classList.remove('modal_value1');
       const imgValue2 = document.getElementById('image3')
       imgValue2.classList.remove('modal_value2');
       const imgValue3 = document.getElementById('image4')
       imgValue3.classList.remove('modal_value3');
       const imgValue4 = document.getElementById('image5')
       imgValue4.classList.remove('modal_value4');
       document.getElementById('image').src = val;
      }else if(val == 
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg" ){
          const imgValue = document.getElementById('image1')
       imgValue.classList.remove('modal_value');
       const imgValue1 = document.getElementById('image2')
       imgValue1.classList.add('modal_value1');
       const imgValue2 = document.getElementById('image3')
       imgValue2.classList.remove('modal_value2');
       const imgValue3 = document.getElementById('image4')
       imgValue3.classList.remove('modal_value3');
       const imgValue4 = document.getElementById('image5')
       imgValue4.classList.remove('modal_value4');
       document.getElementById('image').src = val;
      }else if(val == "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg"){
        const imgValue = document.getElementById('image1')
       imgValue.classList.remove('modal_value');
       const imgValue1 = document.getElementById('image2')
       imgValue1.classList.remove('modal_value1');
       const imgValue2 = document.getElementById('image3')
       imgValue2.classList.add('modal_value2');
       const imgValue3 = document.getElementById('image4')
       imgValue3.classList.remove('modal_value3');
       const imgValue4 = document.getElementById('image5')
       imgValue4.classList.remove('modal_value4');
       document.getElementById('image').src = val;
      }else if( val == "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg"){
        const imgValue = document.getElementById('image1')
       imgValue.classList.remove('modal_value');
       const imgValue1 = document.getElementById('image2')
       imgValue1.classList.remove('modal_value1');
       const imgValue2 = document.getElementById('image3')
       imgValue2.classList.remove('modal_value2');
       const imgValue3 = document.getElementById('image4')
       imgValue3.classList.add('modal_value3');
       const imgValue4 = document.getElementById('image5')
       imgValue4.classList.remove('modal_value4');
       document.getElementById('image').src = val;
      }else if( val == "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"){
        const imgValue = document.getElementById('image1')
        imgValue.classList.remove('modal_value');
        const imgValue1 = document.getElementById('image2')
        imgValue1.classList.remove('modal_value1');
        const imgValue2 = document.getElementById('image3')
        imgValue2.classList.remove('modal_value2');
        const imgValue3 = document.getElementById('image4')
        imgValue3.classList.remove('modal_value3');
        const imgValue4 = document.getElementById('image5')
        imgValue4.classList.add('modal_value4');
        document.getElementById('image').src = val;
      }  
  }
  document.getElementById('seven').innerHTML ="Add to Card"
  