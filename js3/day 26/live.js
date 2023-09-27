// $(document).ready(function(){
//     var data={
//         "title":"Keyboard",
//         "price":'600'
        
//     }

//     $.post("https://dummyjson.com/products/add",data,function(res){
//         console.log(res)
//     })
// })

//u will get id 

// localStorage.setItem
// localStorage.getItem
// localStorage.removeItem
// localStorage.clear

// local storage accepts ony string
var arr=[1,2,3,4,5]
var obj={
    'name':'sneha',
    'age':'23'
}
var temp=JSON.stringify(arr)
var temp1=JSON.stringify(obj)
console.log(temp) //string color is black . so here u got as string 
console.log(JSON.parse(temp))
console.log(temp1)
console.log(JSON.parse(temp1))
// JSON.parse() convert from string to object/array/json
// JSON.stringify() convert to string

$.get('https://dummyjson.com/products',function(res){
var stringdata=JSON.stringify(res)
localStorage.setItem('message',stringdata)


var data = JSON.parse(localStorage.getItem('message'))
var products=data.products

for(let i=0;i<products.length;i++){
    $('#demo').append(`<h1>${products[i].title}</h1>`)
}

localStorage.clear()
})