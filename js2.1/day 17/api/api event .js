// $(document).ready(function(){
//     $.get("https://dummyjson.com/products",function(response){
// console.log(response.products)
//     })//it access 2 values api link and function,the parameter in a function has many data ,status,response etc
// }

// )

// $(document).ready(function(){
//     $.get("https://dummyjson.com/products",function(response){
// let product=response.products
// let container=document.getElementById("container")


// for(let i=0;i<product.length;i++){
//     container.innerHTML += `<h1>${product[i].title}</h1>`
//     container.innerHTML += `<p>${product[i].description}</p>`
// }
//     })
// })

// $(document).ready(function() {
//     $.get("https://dummyjson.com/products", function(response) {
//         let product = response.products;
//         let container = $("#container");//jquery

//         product.forEach(produ => {
//             container.append(`<h1>${produ.title}</h1>`);
//             container.append(`<p>${produ.description}</p>`);
//         });
//     });
// });

// product holds array of products. produ is a parameter to hold single value of product during iteration

// back tick : if u want dynamic string , inside curly braces u can write js.

//-----------------------

console.log("1")
console.log("2")
console.log("3")

//all this execute at asametime .. so use settiemout
console.log("1")
setTimeout(function(){
    console.log("2") 
},6000)  //call back func
setTimeout(function(){
    console.log("3") 
},8000)

