/*3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн 
у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
	Приклад роботи програми:
> console.log(showMonthName(5)); 
May
> console.log(showMonthName(14)); 
MonthException Incorrect month number
*/

class MonthException{
    constructor(message){
       this.message = message;
       this.name  = 'MonthException';
    }  
}
 function showMonthName(month){
    let index = month-1;
    const monthes = ["January", "February", "March", "April", "May", "June", "July", "Aufust", "September", "October", "November","December" ];
    try{
    
        if(monthes[index]!==undefined){
           console.log(monthes[index])
        }
        else{
            throw new MonthException("Incorrect month number")
        }
    }
    catch(error){
        console.log(error.name +": " + error.message)
    }
    
}
console.log(showMonthName(5))


