function calculateSupply(){
    let currentAge =prompt("Enter your current age")
    let MaxAge=prompt("Enter the age you want to die")
    let amountperday =prompt("Enter the price of a snack you like")
    let Total =0
    Total =(MaxAge-currentAge)*amountperday
    console.log(`You will need ${Total} to last you until the ripe old age of ${MaxAge}`)
}
calculateSupply()
calculateSupply()
calculateSupply()