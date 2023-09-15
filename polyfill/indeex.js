// filter....
// const arr = [ 1, 2,3,4,5,6]
// let filterArr = arr.filter(function(x){
//     return x%2 === 0;
// })
// console.log(filterArr);

var person = {
    age: 23,
    getAge: function(){
        return this.age;
    }
}    
  
var person2 = {
    age : 54
}

console.log(person.getAge.call(person2))
console.log(person.getAge.call(person))