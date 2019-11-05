let Machine= {
    HP: 20,
    DELL: 50,
    MACBOOK: 12,
    ASUS: 30
}

////////////////////////////////  Part 1
console.log('--------------Part 1-----------------')
let key
key =prompt('Enter your machine name')
console.log("Amount of MACBOOK: ",Machine['MACBOOK'])
console.log("printf amount of",key,':', Machine[key])

///////////////////////////////  Part 2 and 3
console.log('------------Part 2 and 3------------')
let sum = 0
Machine.TOSHIBA =10
Machine.DELL +=10
Machine.MACBOOK =2
key =prompt('Enter a new machine name')
Machine[key]=Number(prompt("Enter amount your machine"))
console.log("PRINTF ALL MACHINE IN LISH :")
for(let i in Machine){
    sum +=Machine[i]
    console.log(i,':',Machine[i])
}
console.log('SUM ALL MACHINE IN WAREHOUSE:',sum)

Machine.FUJITSU =15
Machine.ALIENWARE =5
console.log('------------continue-------------')
console.log('PRINTF ALL MACHIEN IN LISH AFTER ADD:')
for(let i in Machine){
    console.log(i,':',Machine[i])
}

////////////////////////////  warehouse 
console.log('-------------warehouse--------------')
key =prompt("Enter name of items you buy")
let amountMachine=prompt("Enter the number of items you buy")
    Machine[key] = Number(Machine[key]) - Number(amountMachine)
    console.log("printf amount machine rest ",Machine[key])
//
//   amountMachine=prompt("Enter name and number of items you buy")


///////////////////////////////    Part 4
console.log('------------- Part 4 -------------')

let Price = {
    HP: 600,
    DELL: 650,
    MACBOOK: 12000,
    ASUS: 400,
    ACER: 350,
    TOSHIBA: 600,
    FUJITSU: 900,
    ALIENWARE: 1000
}

key=prompt("Enter your machine name")
console.log("printf price of ",key,':',Price[key])
console.log("Printf price of ASUS",Price['ASUS'])


///////////////////////////                 Part 5
console.log('-------------Part 5---------------')

let  Invoice=1
Invoice=Price['ASUS']*5
key=prompt('Enter your machine needs pay')
console.log("Printf invoice of ASUS: ",Invoice)

console.log('-Continue_with_amount_enter_from_user-')
Invoice=Number(Price[key])*5
console.log("Printf invoice of",key,':',Invoice)

//////////////////////////              Calculate price 
console.log('---------Calculate price-------------')


for(let i in Machine){
    let CalculatePrice =1
    CalculatePrice =Number(Machine[i])*Number(Price[i])
    console.log('Calculate Price ',i,CalculatePrice)
    sum+=CalculatePrice
}
console.log(`sum of all price of machine in list ${sum}`)
