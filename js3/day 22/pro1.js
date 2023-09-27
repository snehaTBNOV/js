let list=[]
let value=''
let fil=''
let product=document.getElementById('products')
let search=document.getElementById('search')
function load(){
    $.get('https://fakestoreapi.com/products',function(response){
        console.log(response)
        list = response
        for(let i=0;i<list.length;i++){
        product.innerHTML+=`<h1>${list[i].title}</h1>`
        }
    })
}

$(document).ready(function(){
    load()


search.addEventListener('input',function(e){
    value=e.target.value.toLowerCase()
    fil=[]  //clear all prev filtered

if(value=='' && fil.length==0){
    product.innerHTML+=''
    for(let i=0;i<list.length;i++){
        product.innerHTML+=`<h1>${list[i].title}</h1>`
        }
}else


    if(value!=''){
        for(let i=0;i<list.length;i++){
            if(list[i].title.toLowerCase().includes(value)){
                fil.push(list[i])
            }
        }

        if(fil.length>0){
            product.innerHTML='' //remove all  and showsonly fil
            for(let i=0;i<fil.length;i++){
                product.innerHTML+=`<h1>${fil[i].title}</h1>`  
            }
        }
     else{
        product.innerHTML = `<h1>No products found</h1>`
    }
}
})
})