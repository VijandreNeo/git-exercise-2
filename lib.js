const square = (n) => {
    return n * n;
}

const fahrenheit = (celsius) => {
    return (celsius * 1.8) + 32;
}

const rectangleArea = (a, b) => {
    return (a * b) / 2;
}

const isPalindrome = (str) => {
    let revArr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        revArr.push(str.at(i));
    }

    let revStr = revArr.toString().replaceAll(",", "");

    return revStr.toUpperCase() === str.toUpperCase();
}
