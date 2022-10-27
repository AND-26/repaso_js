
let numeros = [1,2,3,4,5,6,7,8,9,0]

function sumNum(objeto){
let even = objeto.filter(item => item % 2 == 0)
console.log(even)
let suma = 0
for(x=0;x<even.length;x++){
    suma += even[x]
    
}
return suma
}
console.log(sumNum(numeros))
