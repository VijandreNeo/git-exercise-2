export const square = (n) => n * n

export const fahrenheit = (celsius) => celsius * (9 / 5) + 32

export const rectangleArea = (a, b) => a * b

export const isPalindrome = (str) => {
  const revArr = []

  for (let i = str.length - 1; i >= 0; i -= 1) {
    revArr.push(str.at(i))
  }

  const revStr = revArr.toString().replaceAll(',', '')

  return revStr.toUpperCase() === str.toUpperCase()
}
