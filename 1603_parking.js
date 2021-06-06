// 7.5 min
const ParkingSystem = function(big, medium, small) {
    this.parking = {
        1: big,
        2: medium,
        3: small
    }
};

ParkingSystem.prototype.addCar = function(carType) {
    if (this.parking[carType] !== 0) {
        this.parking[carType] -= 1
    } else return false
};

let obj = new ParkingSystem(1, 1, 0)
obj.addCar(1)
obj.addCar(2)
obj.addCar(3)
obj.addCar(1)
