// const cars: string[] = ['Ford', 'Audi'];
// const cars2: Array<string> = ['Ford', 'Audi']

//===============

const  promise: Promise<number> = new Promise( resolve => {
    setTimeout(()=>{
        resolve(42)
    }, 2000)
})

promise.then( data => {
    console.log(data.toFixed())
})
console.log(5)

//===============

function mergeObject<T extends object, R extends object>(a:T, b:R): T & R {
    return Object.assign({},a,b);
}

const  merged = mergeObject( {name:'A'},{age:42});
// console.log(merged.name);
const  merged1 = mergeObject( {model:'B'},{year:1559});
// console.log(merged1.model);
const merged2 = mergeObject({a: 1},{b:2})
// console.log(merged2);

//==============

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return{
        value,
        count: `there are ${value.length} in this object`
    }
}

console.log(withCount('TypeScript'));
console.log(withCount(['Type','Script']));
// console.log(withCount(20));
console.log(withCount({ length : 20}));

//===============

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key];
}

const person = {
    name: 'A',
    age: 6
}

console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))

//=================

class Collection<T extends number | string | boolean> {
    constructor(private _items:T[] = []) {}

    add(item: T){
        this._items.push(item);
    }

    remove(item: T){
        this._items = this._items.filter( i => i != item);
    }

    get items(){
        return this._items;
    }
}

const  strings = new Collection<string>(['this','is','string']);
strings.add('.');
strings.remove('is');
console.log(strings);

const  numbers = new Collection<number>([1,2,3]);
numbers.add(4);
numbers.remove(2);
console.log(numbers);

// const objs = new Collection<object>([{a:1},{b:2}]);
// objs.remove({b:2});
// console.log(objs);

//===============

interface Car {
    model: string,
    year: number
}

function createAndValidateCar(model: string, year:number): Car {
    const car: Partial<Car> = {}

    if(model.length > 3){
        car.model = model;
    }
    if(year > 2000){
        car.year = year;
    }

    return car as Car;
}

const  cars: Readonly<Array<string>> = ['Ford', ' Audi'];
// cars.shift()

const ford: Readonly<Car> = {
    model: 'ford',
    year: 2020
}

//===============















