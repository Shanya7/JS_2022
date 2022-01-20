/*
3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
 Випадкові числа генеруються із діапазону 1-500.

Sample Output:
randArray(5);  // 399,310,232,379,40

*/

function rendArray(k){
    const myArray=[];
    const min =1;
    const max = 500;
    for (let i =0; i<k; i++){
       let rundNumber = (Math.random()*(max-min)+min);
       myArray.push(parseInt(rundNumber));
    }
    console.log(myArray)
}
rendArray(5);  // 399,310,232,379,40