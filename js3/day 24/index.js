$(document).ready(function(){
    //if u use this everytime cart value become zero. so use if 
    if(localStorage.getItem('cart')==null){
    localStorage.setItem('cart',JSON.stringify({}))
 }//cretate an empty object
    $.get('https://dummyjson.com/products',function(res){
        let products=res.products
        let container=document.getElementById('container')
        for(let i=0;i<products.length;i++){
           container.innerHTML+=`
           <a href=./details.html?id=${products[i].id} ><div class="card">
           <h1>${products[i].title}</h1></div></a>
           `
        }
    })
})