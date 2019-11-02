let ListScore=[69,99,11,24,27]

console.log('High score:')
let assign=0
for(let i=0; i<(ListScore.length-1) ; i+=1){
   for(let j=i+1; j<ListScore.length; j+=1){
       if(ListScore[i]<ListScore[j]){
            assign=ListScore[i]
            ListScore[i]=ListScore[j]
            ListScore[j]=assign
       }
   }
}

for(let i=0; i<ListScore.length; i+=1){
    console.log(`${i+1}.   ${ListScore[i]}`)
}

// Continue Enter add list from keyboard

let addList=prompt('Enter new score').split(' ')
ListScore = ListScore.concat(addList)
console.log(`Enter your new score: ${addList}`)
for(let i=0; i<(ListScore.length-1); i+=1){
    for(let j=i+1;j<ListScore.length; j+=1)
    if(ListScore[i]<ListScore[j]){
        assign=ListScore[i]
        ListScore[i]=ListScore[j]
        ListScore[j]=assign
    }
}

for(let i=0; i<ListScore.length; i+=1){
console.log(`${i+1}.   ${ListScore[i]}`)
}

console.log('List of 5 biggest score:')
for(let i=0; i<5; i+=1){
    console.log(`${i+1}.    ${ListScore[i]}`)
}