let Number=[1,9,-999,69,0]
let choise=Math.floor(prompt('Enter your choise'))

let check =Number.includes(choise)
if(check){
console.log(`Enter a number  : ${choise}`)
console.log(`Found, position : ${Number.indexOf(choise)}`)
}
else{
    console.log(`Enter a number: ${choise}`)
    console.log('Not found in our list ')
}