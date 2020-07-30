const isFetching:boolean = false;
const isLoading:boolean = true;

const int:number = 1;
const float:number = 1.85;
const num:number = 1e5;


const message:string = "TypeScript";


const numberArray:number[] = [1,2,3];
const numberArray2:Array<number> = [1,2,3];

const words: string[] = ["hello", "world"];

const contact: [string,number] = ["Abcd", 60];

let variable:any = 42;
variable = "string";

// function
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('TypeScript');

//never

function throwError(message: string): never {
            throw new Error(message);
}

function infinite(): never {
    while (true){

    }
}

// Type
type Login = string;

const login:Login ="admin";
//const login2:Login =5;

type ID = string|number;
const id1:ID = "1";
const id2:ID = 1;
//const id3:ID = true;

//null
type SomeType = string|null|undefined;


