class building{
    //these are datamembers
    #tower;
    #parking;
    #price;
    constructor(){
    this.#tower=1;
    this.#parking=1;
    this.#price=2000;
    }
    //member fun
//     increaseprice(){
//         this.#price=3000
//     }
//     increasetower(){
//         this.#tower=5;
//     }

gettower(){
    console.log(this.#tower)
}
settower(num){
    console.log(this.#tower= num)

}
}
//if u want to use the class creat object
let apart=new building()

//if u use # to make them prvate it cannot be accesible outside the class
// console.log(apart.#tower)//1
// apart.increaseprice()
// console.log(apart.#price)
// apart.price=5000 //so this type of direct updation cant be done
// console.log(apart.#price)

// solution is geta nd set value

apart.gettower()
apart.settower(10)
apart.gettower()

class emp{
    name;
    email;
    constructor(name,email){
        this.name=name
        this.email=email;

    }
}
class manager extends emp{
    bonus;
    location;
    //if u want to see the default value , 
    constructor(name,email='employee@gmail.com',bonus,location){
        super(name,email) //call the cons of parent class
        
        this.bonus=bonus
        this.location=location
       
    }
}

class cleaner extends emp{
    esi;
    hr;
    
    constructor(name,email,esi,hr){
        super(name,email)
        this.esi=esi
        this.hr=hr


    }
}
//if u didn't give email it will use default value
let a=new manager('sneha','av@gmail.com','10%','india') 
console.log(a)
let b= new cleaner('f',1000,9)
console.log(b)
//we are reusing emp class for manager and cleaner ,extend word is inheritance