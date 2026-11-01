// const name = "Narith";
// let math = 0;
// const science = 85;
// const english = 90;

// math = "hello world ";
// math = true;
// const total = math + science + english;
// const average = (math + science) / 2;

// console.log(`Total: ${total}`);
// console.log(`Average: ${average}`);

const condition = 21 % 2;

console.log(condition);

var apple = 17;
var banana = 120;
var panapple = 50;
var orange = 100;

// find odd number of apple, banana, and panapple
checkOddEven(apple, "apple");
checkOddEven(banana, "banana");
checkOddEven(panapple, "panapple");
checkOddEven(orange, "orange");

function checkOddEven(number, name) {
    if ((number % 2) == 0) {
        console.log(`${name} is even`);
    } else {
        console.log(`${name} is odd`);
    }
}
