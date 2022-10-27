array1 = [1,0,2,3,4];  
array2 = [3,5,6,7,8,13];
function sumar_Arrays(array1,array2){
 array1.push(0)
    for(i=0;i<array2.length;i++){
        let suma = array1[i] + array2[i]
        let total = [];
        total += suma
        console.log(total)
    }


}

console.log(sumar_Arrays(array1,array2))