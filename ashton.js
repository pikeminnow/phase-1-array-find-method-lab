function isOdd(element, index, array) {
    return (element % 2 === 1);
}

[4, 6, 8, 10].find(isOdd); //=> undefined, not found
[4, 5, 8, 10].find(isOdd); //=> 5
[4, 5, 7, 8, 10].find(isOdd); //=> 5
[4, 7, 5, 8, 10].find(isOdd); //=> 7

function isEven(element, index, array) {
    return (element % 2 === 0);
}