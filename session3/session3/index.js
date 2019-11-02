let District = [149.3,242.4,425.7,325.4,354.9]
let Population=[442.5,24.43,351.5,625.2,232.7]

let density=0
let Alldensity=0
let max =0
let min

for(let i=0;i<District.length; i+=1){
    // initialization min into value bigin
    min=Number(District[0])

    //output density and list District/population city
    density=Number(Population[i])/Number(District[i])
    console.log(`${District[i]}  ${Population[i]}   Density population: ${density}`)

    // find value max of population
    if( max < Number(Population[i]) ){
        max = Number(Population[i])
    }

    // min and max of District
    if(max < Number(District[i]) ){
        max = Number(District[i])
    }
    if(min > Number(District[i])){
        min=Number(District[i])
    }

    // sum all density
    Alldensity+=density
}

// find and output Average of Alldensity 
let Average = Alldensity/District.length
console.log(`Average  ${Average}`)

// log min and max of District
console.log(`Max: ${max}`)
console.log(`Min: ${min}`)