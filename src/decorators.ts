// function Log1(constructor: Function) {
//     console.log(constructor)
// }
// function Log2(target: any, propName: string | Symbol) {
//     console.log(target)
//     console.log(propName)
// }
// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log(target);
//     console.log(propName);
//     console.log(descriptor);
// }
//
// @Log1
// class Cars{
//     @Log2
//     name: string
//
//     constructor(name:string) {
//         this.name = name;
//     }
//
//     @Log3
//     logName():void{
//         console.log(this.name)
//     }
// }



interface ComponentDecorator {
    selector: string
    template: string
}

function Component( config: ComponentDecorator ) {
    return function
        <T extends {new(...args: any[]): object}>
    (Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args)
                const el = document.querySelector(config.selector)!;
                el.innerHTML = config.template;
            }
        }
    }
}

function Bind( _: any, _2:any, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    return{
        configurable: true,
        enumerable: false,
        get(){
            return original.bind(this)
        }
    }
}

@Component({
    selector: '#card',
    template: `
        <div class="card">
            <div class="card-conter">
                <span class="card-title">Card Component</span>
            </div>
        </div>
    `
})
class CardComponent {
    constructor(public name: string) {}

    @Bind
    logName(): void{
        console.log(`component name: ${this.name}`)
    }
}

const card = new CardComponent('card');

const btn = document.querySelector('#btn')!;
btn.addEventListener('click', card.logName)




//===================

type  ValidatorType = 'required'// | 'email'

interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: any//ValidatorType
    }
}

const validators : ValidatorConfig = {
}

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required'
    }
}

function Validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name]
    if (!objConfig){
        return true;
    }
    let isValid = true;
    Object.keys(objConfig).forEach( key =>{
        if (objConfig[key] === 'required'){
            isValid = isValid && !!obj[key]
        }
    })
    debugger;
    return  isValid;
}

class Formb {
    public email: string| void
    @Required
    public name: string| void

    constructor(email?: string, name?: string) {
        this.email = email
        this.name = name
    }
}

const form = new Formb('1', '2');
if (Validate(form)){
    console.log('validate: ', form);
} else {
    console.log('validation error');
}
console.log(form);










