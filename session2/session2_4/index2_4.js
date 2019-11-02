let String = prompt('Enter your number')
let Array = String.split(" ")

console.log(`Enter a list of numbers: ${Array}`)

let sum=0
for ( let index = 0; index < Array.length;index +=1){
    sum = Number(sum) + Number(Array[index])
}
console.log(`Sum of all entered numbers: ${sum}`)
