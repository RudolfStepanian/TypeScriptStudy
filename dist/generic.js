"use strict";
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve(42);
    }, 2000);
});
promise.then(data => {
    console.log(data.toFixed());
});
console.log(5);
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObject({ name: 'A' }, { age: 42 });
const merged1 = mergeObject({ model: 'B' }, { year: 1559 });
const merged2 = mergeObject({ a: 1 }, { b: 2 });
function withCount(value) {
    return {
        value,
        count: `there are ${value.length} in this object`
    };
}
console.log(withCount('TypeScript'));
console.log(withCount(['Type', 'Script']));
console.log(withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'A',
    age: 6
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i != item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['this', 'is', 'string']);
strings.add('.');
strings.remove('is');
console.log(strings);
const numbers = new Collection([1, 2, 3]);
numbers.add(4);
numbers.remove(2);
console.log(numbers);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['Ford', ' Audi'];
const ford = {
    model: 'ford',
    year: 2020
};
//# sourceMappingURL=generic.js.map