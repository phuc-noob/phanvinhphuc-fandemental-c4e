// Programming enter a month from user and printf the season of the year

let Month = prompt('Enter a month:')
let season=['Spring','Summer','Fall','Winter','Not reason']

if(Month >=3 && Month <= 6){
    console.log(season[0])
}
else if(Month >=6 && Month <= 9){
    console.log(season[1])
}
else if(Month >=9 && Month <= 12){
    console.log(season[2])
}
else if(Month >=1 && Month <= 3){
    console.log(season[3])
}
else{
    console.log(season[4])
}