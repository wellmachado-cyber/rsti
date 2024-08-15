class Vehicle{
    constructor(type,wheels,capacity){
        this.type = type;
        this.wheels = wheels;
        this.capacity = capacity;
    }

    dirigir(gas){
        setInterval(() => {
            if(gas >= 0) console.log(gas, "\n");
            gas -= 10;
            if(gas < 0) clearInterval()
        },1000)
    }
}

const carro = new Vehicle("carro",4,5);
carro.dirigir(100);