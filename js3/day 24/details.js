$(document).ready(function(){
    let id =parseInt(window.location.search.split('=')[1])
// console.log(id)
let container=document.getElementById('container')
let btn=document.getElementById('btn')


$.get(`https://dummyjson.com/products/${id}`,function(res){

container.innerHTML+=`
          
           <h1>${res.title}</h1>
           <h1>${res.description}</h1>
           <h1>${res.price}</h1>
           <h1>${res.rating}</h1>
           `

           btn.addEventListener('click',function(){
            res.inCart=1 //add an extra object 
            let data=JSON.parse(localStorage.getItem('cart')) //if u write this prgm outside res is not defied
            if(data[id]!==undefined){//to check a product is available or not
                data[id].inCart+=1
            }else{
                data[id]=res
            }
            localStorage.setItem('cart',JSON.stringify(data))
        })
})

})

