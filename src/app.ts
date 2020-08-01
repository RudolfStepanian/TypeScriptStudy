class Person {
    constructor(private  name: string) {}
}

const btn1: Element = document.querySelector('#btn')!;
btn1.addEventListener('click', ()=>{
    console.log('btn clicked')
})


function logInfo(data: string) {
    console.log(data);
}

logInfo('Info');

function multiple(a:number,b:number):number {
    return a * b;
}