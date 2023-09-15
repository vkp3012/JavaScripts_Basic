// q1
function fun1(){
    console.log(y)
    setTimeout(()=>{
        console.log(x)
        console.log(y)
    },2000)
    let x = 10;
    var y = 2;
}

// fun1()

// q2
function fun2(){
    for(let i = 1;i<=3;i++){
        setTimeout(()=>{
            console.log(i)
        },2000)
    }
}

// fun2()

// q3
// Immediately Invoked Function....
// (function(){
//     setTimeout(()=>{
//         console.log(1)
//     },2000)
//     console.log(2);
//     setTimeout(()=>{
//         console.log(3)
//     },0);
//     console.log(4)
// })()

// q4
let x = {}
let y = { name : "Ronny"}
let z = { name : "John"}

x[y] = {name : "Vivek"}
x[z] = {name : "Akki"}
// console.log(x[y])
// console.log(x[z])

// q5
function runFunc(){
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78");
}
// runFunc();

// q6
// var x = 23;
// (function(){
//     var x = 43;
//     (function random(){
//         x++;
//         console.log(x);
//         var x = 21;
//     })()
// })()

function random(){
    let x; // x is hoisted
    x++; // x is not a number since it is not initialized yet
    console.log(x); // Outputs NaN
    x = 21; // Initialization of x
}
// random()

// q7
let hero = {
    powerLevel : 99,
    getPower(){
        return this.powerLevel;
    }
}

let getPower = hero.getPower;
let hero2 = { powerLevel : 42}
// console.log(getPower())
// console.log(getPower.apply(hero2))


// q8
const a = function(){
    console.log(this);
    const b = {
        func1: function(){
            console.log(this);
        }  
    }
    const c = {
        func2: ()=>{
            console.log(this);
        }
    }
    b.func1();
    c.func2();
}
// a();


const b = {
    name : "Vivek",
    f : function(){
        var self = this;
        console.log(this.name); //vivek
        (function(){
            console.log(this.name); //undefined
            console.log(self.name); //vivek
        })()
    }
}

// b.f();

// (function(a){
//     return (function(){
//         console.log(a)
//         a = 23;
//     })()
// })(45)

(function(a){
    return (function(){
        console.log(a);
        a = 23;
    })()
})(45);