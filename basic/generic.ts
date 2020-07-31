const arrayOfNumbers: Array<number> = [1,1,2,3,5]
const arrayOfString: Array<string> = ['hello','new']

function reverse<T>(array: T[]) {
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfString);