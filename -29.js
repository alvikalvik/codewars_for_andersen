function nouveau(Constructor, ...args) {
    let obj = {}
    const bindedConstructor = Constructor.bind(obj)   
    
    const returned = bindedConstructor(...args)

    if (returned instanceof Object) {
        obj = returned
    } 
    
    obj.prototype = Constructor

    return obj
}

function Person (name, age) {
    this.name = name;
    this.age = age;
  }

Person.prototype.introduce = function(){
    return 'My name is ' + this.name + ' and I am ' + this.age;
  };

const john = nouveau(Person, 'John', 30); 
console.log(john)