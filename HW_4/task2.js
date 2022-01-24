/*2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
	- нечислове значення
	- вік юзера менше 14 років. 
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки.
*/
function checkAge(){
    const age = prompt("Enter you age");
    if(isNaN(age)){
        throw new Error("The field contains not a number value! Please enter your age")
    }
    else if(age>=0 && age<14){
        throw new Error("You are too young")

    }
    else if(age===""){
        throw new Error("The field is empty! Please enter your age")
    }
   
    return age;
}
    try{
        let result = checkAge();
        console.log(result);
        alert("You have access")
       
    }
    catch (exception){
        alert(exception.name +": "+ exception.message)

    }