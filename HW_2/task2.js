/*
2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
	a) парним додатним;
	b) кратним числу 7.
Результат перевірки вивести в консоль.

*/

let number = prompt("Please enter a number");
if(number >0 && number%2==0){
    console.log(`${number} є парним додатним`)
}
else if( number%7==0){
    console.log(`${number} є кратним числу 7`)

}
else{
    console.log(`${number} не є парним додатним або кратним числу 7`)
}
