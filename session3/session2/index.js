console.log('list your number')
let List=prompt('Enter your number')
let NumberList=List.split(',')
console.log(`Enter a list of numbers, separated by ‘,’: ${NumberList}`)

let check=0
for( let i=0 ;i < NumberList.length ;i+=1){
    check = Number(NumberList[i])%2
    if(check == 0){
    console.log(`All even numbers from entered list: ${NumberList[i]}`)
    }
}