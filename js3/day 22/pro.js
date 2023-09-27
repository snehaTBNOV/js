

let product=document.getElementById('products')
let search=document.getElementById('search')
let list = []

let value=''  //for storing whtever er are typing
let filtered='' // we hv to filter from list based on the values
function fetch(){
    // search product api free 
    $.get('https://fakestoreapi.com/products',function(response){
        // console.log(response)
        list=response
        for (let i=0;i<list.length;i++){
            //copy all into product div
            product.innerHTML+= createcard(list[i])
            // `<h1>${list[i].title}</h1>`
        }
    })
}




//craete card
//dat is the info of 1 objct
function createcard(data){
    return `<div class="card">
    <div class="image">
        <img src="${data.image}" alt="">
    </div>
    <div class="info">
        <p id="title">${data.title}</p>
        <p id="desc"><i>${data.description}</i></p>
        <p id="price">Price: <span id="pri">${data.price}</span></p>
    </div>
</div>`
}











//function for search
$(document).ready(function(){
    fetch()
//if u use input function has an argument of event . u can write e, eve ,ev  
    search.addEventListener('input',function(e){
        console.log(e)// here u hv target property, value(whtever we are typing in the input box u will get from bvalue )
    //so this event listener wrks wheever we are entering /removing a value in the input
    value=e.target.value.toLowerCase()
    filtered=[]

    if (value==''&& filtered.length==0){  //if u remove the value u need to view the old all lists.t here u can see no product found also.so clear it
        product.innerHTML=''
        for (let i=0;i<list.length;i++){
            //copy all into product div
            product.innerHTML+= createcard(list[i])
            // `<h1>${list[i].title}</h1>`
        }
    } else
    if (value!=''){
        for(let i=0;i<list.length;i++){
            
            if(list[i].title.toLowerCase().includes(value)){
                filtered.push(list[i])
            }
        }
        console.log(filtered)
        if(filtered.length>0){
            product.innerHTML=''
         for(let i=0;i<filtered.length;i++){
            product.innerHTML+=createcard(filtered[i])
            // `<h1>${filtered[i].title}</h1>`
         }
        }else{
            product.innerHTML= `<h1>No products found</h1>`
        }
    }

    })
})

// if u enter M u will get 13 entries /20 , if u get e it will search for me ,those result is accumulated so u get 24/20.instead clear all prev filter data 