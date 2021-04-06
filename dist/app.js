"use strict";
class Car {
    constructor(mk, md, y, mg, pr, eng = { fuel: "petrol", powerHP: 330 }, gbx = "automatic") {
        this.make = mk;
        this.model = md;
        this.year = y;
        this.price = pr;
        this.mileage = mg;
        this.engine = eng;
        this.gearbox = gbx;
    }
    printCar() {
        var _a, _b;
        const carData = `    Make/model: ${this.make}, ${this.model}
    Year: ${this.year}
    Mileage: ${this.mileage} miles
    Price: £ ${this.price}
    other:  ${this.gearbox}, ${(_a = this.engine) === null || _a === void 0 ? void 0 : _a.fuel}, ${(_b = this.engine) === null || _b === void 0 ? void 0 : _b.powerHP}HP,
    `;
        console.log(carData);
    }
}
const BmwX6 = new Car("BMW", "X6", 2020, 30000, 27000);
BmwX6.printCar();
const CarEngGbData = {
    model: "Audi",
    gearbox: "automatic",
    engine: { fuel: "petrol", powerHP: 220 },
};
const VW = {
    make: "Volkswagen",
    model: "Golf Plus",
    printCar() {
        console.log(this.make, ", ", this.model);
    },
};
VW.printCar();
const BMWCars = {
    X6: BmwX6,
    M5: new Car("BMW", "M5", 2019, 80000, 22000),
    M6: {
        make: "BMW",
        model: "M6",
        year: 2017,
        mileage: 110000,
        price: 18000,
        printCar() {
            console.log(this.make);
        },
    },
};
const getCarParticulars = (car) => `${car.make}-${car.model}/ ${car.year} / ${car.mileage} / ${car.price}`;
console.log(getCarParticulars(BmwX6));
const fiat = { make: "Fiat", model: "Punto" };
console.log(getCarParticulars(fiat));
const getEngine = (a, b, c) => ({
    fuel: a,
    volume: b,
    turbo: c,
});
const myEngine = getEngine("diesel", 2.3, true);
const eng1 = {
    fuel: "petrol",
    volume: 4.5,
    turbo: true,
};
const eng2 = {
    fuel: "gas",
    volume: 1.9,
    turbo: true,
};
const eng3 = { fuel: "petrol", volume: 2.5, turbo: false };
