class vehicle{
    constructor(){
        this.colr='red'
        this.price=100000
    }
    execute(){
        console.log('vehicle class cald')
    }
}
class bus extends vehicle{
    constructor(){
        super()
        this.seat=40
        this.gate=2
    }
    execute(){
super.execute()
        console.log('bus class called')
    }
    // if its absent it will run parent 
}

let bu=new bus() //calling the constructor of bus class.bu created meory and pointed towards the
bu.execute()

//si ilar fun has similar names,based on priority it runs 
//if u want to execute  vehicle first use super.execute()