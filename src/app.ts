type EngineType = {
  fuel?: "petrol" | "diesel" | "gpl" | "hybrid" | "electrical";
  powerHP?: number;
};
type GearboxType = "manual" | "automatic";

interface ICar {
  make: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  engine?: EngineType;
  gearbox?: GearboxType;
  printCar(): void;
}

class Car implements ICar {
  make: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  engine?: EngineType;
  gearbox?: GearboxType;

  constructor(
    mk: string,
    md: string,
    y: number,
    mg: number,
    pr: number,
    eng: EngineType = { fuel: "petrol", powerHP: 330 },
    gbx: GearboxType = "automatic"
  ) {
    this.make = mk;
    this.model = md;
    this.year = y;
    this.price = pr;
    this.mileage = mg;
    this.engine = eng;
    this.gearbox = gbx;
  }

  printCar() {
    const carData = `    Make/model: ${this.make}, ${this.model}
    Year: ${this.year}
    Mileage: ${this.mileage} miles
    Price: £ ${this.price}
    other:  ${this.gearbox}, ${this.engine?.fuel}, ${this.engine?.powerHP}HP,
    `;
    console.log(carData);
  }
}

const BmwX6 = new Car("BMW", "X6", 2020, 30000, 27000);
BmwX6.printCar();

//Pick
type EngineGearboxType = Pick<ICar, "engine" | "gearbox" | "model">;

const CarEngGbData: EngineGearboxType = {
  model: "Audi",
  gearbox: "automatic",
  engine: { fuel: "petrol", powerHP: 220 },
};

//Partial
type AnyCarParticulars = Partial<ICar>;
const VW: AnyCarParticulars = {
  make: "Volkswagen",
  model: "Golf Plus",
  printCar() {
    console.log(this.make, ", ", this.model);
  },
};
VW.printCar!();

//record
type BMWMakeType = "X6" | "M5" | "M6";
type AllCarParticulars = Record<BMWMakeType, ICar>;
type CarParticularsTable = { [x: string]: ICar };

const BMWCars: AllCarParticulars = {
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

//InstanceType
type CarType = InstanceType<typeof Car>;
const getCarParticulars = (car: CarType): string =>
  `${car.make}-${car.model}/ ${car.year} / ${car.mileage} / ${car.price}`;

console.log(getCarParticulars(BmwX6));
const fiat = { make: "Fiat", model: "Punto" };
console.log(getCarParticulars(fiat as CarType)); // as

//ReturnType<Type>
type GetEngineType = (
  a: string,
  b: number,
  c: boolean
) => { fuel: string; volume: number; turbo: boolean };

const getEngine: GetEngineType = (a: string, b: number, c: boolean) => ({
  fuel: a,
  volume: b,
  turbo: c,
});

const myEngine = getEngine("diesel", 2.3, true);

const eng1: ReturnType<GetEngineType> = {
  fuel: "petrol",
  volume: 4.5,
  turbo: true,
};
const eng2: ReturnType<typeof getEngine> = {
  fuel: "gas",
  volume: 1.9,
  turbo: true,
};
const eng3: typeof myEngine = { fuel: "petrol", volume: 2.5, turbo: false };
