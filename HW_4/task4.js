/*4. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
Також функція викидає помилку у разі якщо введено від’ємне id.

Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids)
повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

	Приклад роботи програми:
showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ]
*/

function showUser(id){
    let myArray = [];
    let negativeNumber = [];
    
try{

    for(let i=0; i<id.length; i++) {
        if(id[i]>0){
            myArray.push(id[i])
        }
        else{
            negativeNumber.push(id[i])     
        }
       
    } 
    if(id.length!=myArray.length){
        throw new Error("ID must not be negative")     
    } 
    return myArray;
}
catch(exception){
    alert(exception.name + ": "+ exception.message + ": "+negativeNumber)
    }
}  
//showUser([7, -12, 44, 22]);
//
function showUsers(ids){
    

}
showUsers([7, -12, 44, 22]);
