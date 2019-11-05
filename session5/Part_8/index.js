let ListSkill =
[
    {
        Skill:{
        Name: 'Tackle',
        Minimum_level: 1,
        Damage: 5,
        Hit_rate: 0.3
        }
},{
        Skill:{
        Name: 'Quick attack',
        Minimum_level: 2,
        Damage: 3,
        Hit_rate: 0.5
        }
    },{
        Skill:{
        Name: 'Strong Kick',
        Minimum_level: 4,
        Damage: 9,
        Hit_rate: 0.2
        }
}
]

for(let i=0 ;i< ListSkill.length ;++i){
    let obj=ListSkill[i].Skill
    console.log('----other skill----')
    for(let j in ListSkill[i].Skill){
       console.log(j,':',obj[j])
    }
}


//////////////     check skill
console.log('-----List skill------')

for(let i=0; i<ListSkill.length; ++i){
    let obj=ListSkill[i].Skill
    console.log(i+1,obj['Name'])
}
let ChoiseSkill=prompt('Choise combat skill')///  choise combo space by ','
let Level=Math.random(0,10)*10
let combat=ChoiseSkill.split(',')

console.log('My level:',Level)
console.log('COMBAT')
for(let i=0; i<ListSkill.length; ++i){
    for(let j=0; j<ChoiseSkill.split(',').length; ++j){
        if(i+1 == Number(combat[j])){
            console.log(combat[j])
            if(Level<1){
            console.log('not enough level')
            }else if (i<2){
            console.log(ListSkill[i].Skill.Name)
            }else if(Level >= 4 && i>=2){
            console.log(ListSkill[i].Skill.Name)
            }
            let CheckHit_Rate=Math.random(0,1)
            console.log('CheckHit_Rate:',CheckHit_Rate)
            if(CheckHit_Rate < ListSkill[i].Skill.Hit_rate){
                console.log('Damage',ListSkill[i].Skill.Damage)
            }
            else{
                console.log('Do not hit the target')
            }
        }
    }
}

