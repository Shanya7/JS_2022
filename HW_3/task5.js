/*
5. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє 
на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), 
то функція поверне true, інакше - false.
Sample Output:
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
*/


function findUnique(arr){
    for(let i=0; i<arr.length; i++){
        for(let n=i+1; n<arr.length; n++){
            if(arr[i]==arr[n]){
               return false  
            }    
    }       
}
return true;
}
findUnique([1, 2, 3, 5, 3])