class Car {
    // public color: string;                                 
    // private year: number;  // not access this property from outside the class

    // constructor(public color: string, private year: number) {          
    //     this.color = color
    //     this.year = year
    // }

    /*     or just  Property Assignment Shortcut   */
    constructor(public color: string, private year: number) {          
    }

    drive() {             // public by default
        // console.log('Vroom');  
        this.putInGear
        this.pressPedal
        this.turnWheel       
    }

    private putInGear() {
    }

    private pressPedal() {
    }

    private turnWheel() {
    }
}

const myCar = new Car('red', 2000)
myCar.drive()

console.log(myCar.color);
