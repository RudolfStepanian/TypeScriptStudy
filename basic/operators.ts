interface IPerson {
    name:string
    age:number
}

type PersonKeys = keyof IPerson;

let key: PersonKeys = 'name'
key = 'age';


type User = {
    _id: number,
    name: string,
    email:string,
    createdAt: Date
}


type UserKeysNoMeta = Exclude<keyof User, '_id'|'createdAt'>
type UserKeysMeta = Pick<User, 'name'|'email'>

let n:UserKeysNoMeta = 'name'