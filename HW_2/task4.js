//4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
//Початковий масив:
let cities = ["Rome", "Lviv", "Warsaw"];    
let citiesString = cities.toString();   
let result = citiesString.replace(/,/gi,'*');
console.log(result);

//Результуючий масив:
//"Rome*Lviv*Warsaw"




