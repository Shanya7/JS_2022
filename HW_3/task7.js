/*
7. Напишіть функцію, яка приймає рядок як параметр і перетворює першу
 букву кожного слова рядка в верхній регістр.

Input string: 'i love java script' 
Output string: 'I Love Java Script'

*/
function changeToUpperCase(text){
    let newText = "";
    for(let word of text.split(" ")){
            let newWord = word.replace(word[0],word[0].toUpperCase());
            newText+=(`${newWord} `)
        }
        console.log(newText.trim())
        }       

changeToUpperCase("i love java script")