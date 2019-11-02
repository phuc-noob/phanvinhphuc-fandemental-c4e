let Machine= {
    HP: 20,
    DELL: 50,
    MACBOOK: 12,
    ASUS: 30
}

//////////////////////////////  Part 1
console.log('------part 1-------')
let key=prompt('enter your machine')

console.log("printf type:", Machine[key])
console.log("amount of MACBOOK",Machine['MACBOOK'])

/////////////////////////////  Part 2 and 3
console.log('--------Part 2 and 3----------')
let sum = 0
Machine.TOSHIBA =10
Machine.TOSHIBA=prompt("Enter amount machine toshiba")
for(let i in Machine){
    sum+=Machine[i]
    console.log("printf all machine in list")
    console.log(i,':',Machine[i])
}
Machine.FUJITSU =15
Machine.ALIENWARE =5
Machine.DELL +=10
Machine.MACBOOK =2

//////////////////////////  warehouse 
console.log('---------------warehouse-----------------')
key =prompt("Enter name of items you buy")
let amountMachine=prompt("Enter the number of items you buy")
    Machine[key] = Number(Machine[key]) - Number(amountMachine)
    console.log("printf amount machine rest ",Machine[key])

   amountMachine=prompt("Enter name and number of items you buy")

/////////////////////////////    Part 4
console.log('------Part 4--------')

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

key=prompt("Enter your machine")
console.log("printf price machine ",Price[key])
console.log("printf price of ASUS",Price['ASUS'])

// -----------Part 5---------------
let  Invoice=1
//Invoice=Price['ASUS']*5
key=prompt('Enter your machine needs pay')
Invoice=Number(Price[key])*5
    console.log("printf invoice",Invoice)

////////////////--------------Calculate price 
console.log('Calculate price ')
for(let i in Machine){
    for(let j in Price){
        if(i == j){
            Machine[i]=Number(Machine[i]*Number(Price[j]))
            console.log(i,Machine[i])
            sum+=Number(Machine[i])
        }
    }
}
console.log(`sum of all price of machine in list ${sum}`)

