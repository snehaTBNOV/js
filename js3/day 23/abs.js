class bus{
    #private
    #wheels
    #color
    #seats
    #ac
    #number

    constructor(private=false,wheels=4,color=red,seats=30,ac=true,number='0000'){
         this.#private=private
         this.#wheels=wheels
         this.#color=color
         this.#seats.seats
         this.#ac=ac
         this.#number=number
    }
    setcolorandno(c,n){
        this.#color=cthis.#no=n
    }

    getcolorandno(){
        console.log(this.#color,this.#no)
    }
}

//we hv only the links but we dont know how to create or 
//behind the apis.this is abstraction.only exposed to little amount of data

let vehicle={
    color:'blue',
    speed:1000,
    weight:2,
    use:function(){
        console.log('fuel',this.speed/this.weight)
    }
}

let car={
    wheels:'4',
    gates:'4',
    price:'4l',
    __proto__:vehicle

}
car.use()
console.log(car.price)