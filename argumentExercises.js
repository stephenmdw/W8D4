function sum(...arguments){
    let sum = 0
    for (let i = 0 ; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5)  === 15);


//bind with args
Function.prototype.myBind = function(ctx, ...bArgs){
    return (...cArgs) => this.apply(ctx, bArgs.concat(cArgs));
}

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true


//curried sum


function curriedSum(numArgs){
    let numbers = [];

    return function _curriedSum(n) {
        numbers.push(n);
        if (numbers.length == numArgs) {
            let total = 0;
            numbers.forEach(ele => total += ele);
            return total;
        }
        return _curriedSum; //returns function, not value 
    } 
}

const bum = curriedSum(4);
// console.log(bum(5)(30)(20)(1)); // => 56

//.apply method
Function.prototype.curry = function(numArgs){
    let numArr = [];
    let that = this;
    return function _curried(arg) {
        numArr.push(arg);
        if (numArr.length === numArgs){
            // return that.apply("yes", numArr);
            return that(...numArr);
        }
        return _curried
    }
}




let currySumm = sum.curry(4);
console.log(currySumm(3)(4)(5)(6));



