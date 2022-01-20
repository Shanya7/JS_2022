/*
4. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість
 числових аргументів і повертати той, який має найменше значення.
  Порада: для розв’язку можете скористатися спеціальним масивом arguments.
Sample Output:
findMin(12, 14, 4, -4, 0.2); // => -4

*/

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