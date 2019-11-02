let a=prompt('Enter number for a')
console.log(a)
let b=prompt('Enter number for b')
console.log(b)
let c=prompt('Enter number for c')
console.log(c)

let x1=0
let x2=0
if( a == 0)
    if(b == 0)
        if(c == 0){
            console.log('the equation has countless')
        }
        else{
            console.log('the equation has no solution')
        }
    else{
        x1=(-c)/(b)
        console.log('The equation has one solutions')
        console.log(x1)
    }
else{
    let delta=b*b -4*a*c
    if( delta < 0){
        console.log('the equation has no solution')
    }
    else if(delta == 0){
        x1=(-b)/(2*a)
        console.log('The equation has one solutions')
        console.log(x1)
    }
    else{
        x1=((-b-Math.sqrt(delta))/(2*a))
        x2=((-b+Math.sqrt(delta))/(2*a))
        console.log('The equation has two solutions')
        console.log(x1)
        console.log(x2)
    }
}

