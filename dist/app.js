"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('btn clicked');
});
function logInfo(data) {
    console.log(data);
}
logInfo('Info');
function multiple(a, b) {
    return a * b;
}
//# sourceMappingURL=app.js.map