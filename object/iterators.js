function myNumber(){
    let n = 0;
    return {
        next : function(){
            n += 10;
            return {
                value : n,
                done : false
            }
        }
    }
}

const n = myNumber();
console.log(n.next())
console.log(n.next())
console.log(n.next())

// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) {
                    done = true
            }
            return {
                value:n, 
                done:done
            };
        }
    };
}

let text = ""
for (const num of myNumbers) {
    text += num +">"
}

console.log(text)


// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) {
                done = true
            }
            return {
                value:n, 
                done:done
            };
        }
    };
}

// Create an Iterator
let iterator = myNumbers[Symbol.iterator]();

let text1 = ""
while (true) {
    const result = iterator.next();
    if (result.done) break;
    text1 += result.value +">";
}

console.log(text1)