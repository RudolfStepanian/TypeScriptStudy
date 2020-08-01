/// <reference path="form-namespace.ts"/>

namespace Form{
class MyForm {
    private type: formType = 'inline'
    private state: formState = 'active'

    constructor(public email: string) {
    }

    getInfo(): FormInfo{
        return{
            type: this.type,
            state: this.state
        }
    }
}


const myForm = new MyForm('mail@mail.com')
console.log(form)
}
