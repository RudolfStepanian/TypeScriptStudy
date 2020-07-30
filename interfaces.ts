//interfaces
interface Rect {
    readonly id:string;
    color?:string;
    size:{
        width:number
        height:number
    }
}

const rect1: Rect = {
    id : '1',
    size:{
        width:20,
        height:30
    }
}

const rect2: Rect = {
    id : '2',
    size:{
        width:10,
        height:50
    },
    color: 'black'
}

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//

interface RectWithArea extends Rect{
    getArea: () => number;
}


const rect5: RectWithArea = {
    id : '5',
    size:{
        width:20,
        height:20
    },
    getArea():number{
        return this.size.width*this.size.height;
    }
}

// Class
interface IClock {
    time: Date
    setTime (date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()

    setTime(date: Date) {
        this.time = date;
    }
}

//