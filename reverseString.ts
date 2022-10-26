const readLine=require('readline')
const rl=readLine.createInterface({input:process.stdin,output:process.stdout})
const a =(asd:string)=>{
    let rt=''
    for(let a=asd.length-1;a>=0;a--){
        rt+=asd.charAt(a)
    }
    console.log(rt)
}
rl.question('enter string: ',(input:string)=>{a(input)
rl.close()})

