// This function converts each digit of a number to the square root of that number. 7227 would equal 494449
function squareDigitNum(number) {
    const numArr = Array.from(number.toString()).map(Number);
    let squareNumArr = numArr.map(function (num) {
        return Math.pow(num, 2);
    });
    let squareInt = ""
    squareNumArr.forEach(element => {
        strNum = element.toString()
        squareInt = squareInt + strNum;
    })
    return Number(squareInt);
};
console.log(squareDigitNum(7227))