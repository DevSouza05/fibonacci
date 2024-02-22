
console.log("Sequência Fribonacci")

n=prompt("quantos termos você quer mostrar")


let t1=0
let t2=1
console.log(t1)
console.log(t2)

cont= 3
while(cont <= n){
    let t3 = t1+t2
    console.log(t3)
    t1=t2
    t2=t3
    t3=t1+t2
    cont++    
}

console.log("-> FIM")

