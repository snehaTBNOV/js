$.get('https://dummyjson.com/products/2',function(res){
    
    res.inCart=0
    console.log(res)
    document.getElementById('btn').addEventListener('click',function(){
        res.inCart=res.inCart+1
        localStorage.setItem('2',JSON.stringify(res))
    })
})

//u can see incart=0 in console
//u can use count =0 to remove incart=0 after order 
//if u see the app in console ,incart=1,incart=2(on every click)