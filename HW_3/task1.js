/*
1. Заданий масив з елементами [2, 3, 4, 5]. 
За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.
*/

//implementation for
const myArray = [2, 3, 4, 5];
let elementsMult=1;
for(let i=0; i<myArray.length; i++){
    elementsMult*=myArray[i];

}
console.log(elementsMult)
//variant 2
const myArray = [2, 3, 4, 5];
let elementsMult=1;
for(let i in myArray){
    elementsMult*=myArray[i];

}
console.log(elementsMult)

//implementation while
const myArray = [2, 3, 4, 5];
let i = 0;
let result=1;
while(i<myArray.length){
    result *= myArray[i];
    i++;
}
console.log(result)
