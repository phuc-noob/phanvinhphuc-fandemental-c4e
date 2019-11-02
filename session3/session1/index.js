let List=[9,6,-99,10,0]
console.log(List)

let check = 0
for ( let i=0 ;i < List.length; i+= 1){
    check = Number(List[i])%2;
    if(check == 0){
        console.log(List[i])
    }
}