/*1. Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина прямокутника width
і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми 
і генерацію винятку у випадку, якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
*/


function calcRectangleArea(width, height){ 
    const s = (1/2)*width*height;
    try{
        if(isNaN(width) || isNaN(height)){
            throw new Error("width or height contains incorect value")
        }
        console.log(`Rectangle area is ${s}`);
    }
    catch(Error){
        console.log(Error);
    }
}
calcRectangleArea(3,"@")