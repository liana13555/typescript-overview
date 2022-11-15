/*  Decorators  @expression  */ 

const Component = (target: any) => {
    console.log(target);  
}

@Component
class Car {}

// Component does not get called a second time
new Car()


/*  Decorator factory

const Component = (target: any) => {   
    console.log(target);  
    return () => {}       //decorator function itself must return a function.
}

@Component()  //  brackets ()
class Car {}

*/