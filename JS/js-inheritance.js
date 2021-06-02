"use strict";
// Реализовать иерархию:
// ПассажирскийТранспорт=>ТранспортноеСредство (3-4 свойства, 1-2 метода)
// ГрузовойТранспорт=>ТранспортноеСредство.

// Для базового класса Vehicle реализовать:
// - свойства:
// --- dimensions - габариты (объект с длиной, шириной, высотой),
// --- brand - марка,
// --- model - модель,
// --- manufactureDate - дата производства (использовать встроенный объект Date).
// - методы:
// --- getMaxSize() - возвращает максимальный габаритный размер,
// --- getAge() - возвращает количество лет со дня производства.

class Vehicle {
  constructor(length, width, height, brand, model, year) {
    this.dimensions = { length, width, height };
    this.brand = brand;
    this.model = model;
    const currentYear = new Date();
    currentYear.setFullYear(year);
    this.manufactureDate = currentYear.getFullYear();
  }
  // - методы:
  getMaxSize() {
    return Math.max(
      this.dimensions.length,
      this.dimensions.width,
      this.dimensions.height
    );
  }
  getAge() {
    const currentYear = new Date();
    return currentYear.getFullYear() - this.manufactureDate;
  }
}

// Дочерний класс PassengerTransport расширяется:
// - свойствами:
// --- passengerLimit - максимальное количество пассажирских мест,
// --- passengerCount - количество занятых пассажирских мест,
// - методом addPassenger() для добавления еще одного пассажира с проверкой возможности добавления (есть ли еще незанятые места) - возвращает истину (если пассажир добавлен) или ложь (если не добавлен).

class PassengerTransport extends Vehicle {
  constructor(
    length,
    width,
    height,
    brand,
    model,
    year,
    passengerLimit,
    passengerCount
  ) {
    super(length, width, height, brand, model, year);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger(passenger) {
    if (
      this.passengerLimit - (this.passengerCount + passenger) >= 0 &&
      passenger > 0
    ) {
      this.passengerCount += passenger;
      return true;
    }
    return false;
  }
}

// Дочерний класс FreightTransport расширяется:
// - свойством:
// --- capacity - грузоподъемность,
// - методом checkLoadingPossibility(weight) - для проверки возможности погрузки массы weight. Возвращает булеан.

class FreightTransport extends Vehicle {
  constructor(length, width, height, brand, model, year, capacity) {
    super(length, width, height, brand, model, year);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return weight <= this.capacity && weight > 0 ? true : false;
  }
}

// Создать объекты всех классов иерархии, протестировать работу методов.

const freightTransport1 = new FreightTransport(
  6,
  4,
  3,
  "MAN",
  "L300",
  2001,
  10
);
const passengerTransport1 = new PassengerTransport(
  9,
  4,
  4,
  "Mersedes",
  "NeoPlan",
  2011,
  30,
  20
);

//console.log(freightTransport1);
// console.log(freightTransport1.getAge());
// console.log(passengerTransport1);
// console.log(passengerTransport1.getAge());
// console.log('добавления одного пассажира',passengerTransport1.addPassenger(2));
// console.log(passengerTransport1);
// console.log('добавления одного пассажира',passengerTransport1.addPassenger(8));
// console.log(passengerTransport1);
// console.log('добавления одного пассажира',passengerTransport1.addPassenger(1));
// console.log(freightTransport1.checkLoadingPossibility(10));
// console.log(freightTransport1.checkLoadingPossibility(11));
