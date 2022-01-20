//task1

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

// task2
for(let i=0; i<=15; i++){
    if(i%2==0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`)
    }
}

// task3

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

//task4

function findMin(){
    let result=0;
    for(let i =0; i<arguments.length; i++){
        while(result>arguments[i]){
            result = arguments[i]
        }   
    } 
    console.log(result)
}
findMin(12, 14, 4, -4, 0.2)

//task5
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

//task6
function lastElem(a,b=1){
   
    const myArray = [];
    let i=0;
    while(i<b && a.length){
        myArray.unshift(a.pop());
        i++;
    }
    console.log(myArray); 
}
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([30, 4, 10, -5],8));   // [3, 4, 10, -5]

//task7
function changeToUpperCase(text){
    let newText = "";
    for(let word of text.split(" ")){
            let newWord = word.replace(word[0],word[0].toUpperCase());
            newText+=(`${newWord} `)
        }
        console.log(newText.trim())
        }       

changeToUpperCase("i love java script")
