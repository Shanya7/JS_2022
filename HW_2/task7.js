/*
7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. 
Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

*/
var today = new Date();
var currentHour = today.getHours();

//variant 1
  switch(currentHour){
  case 23:
  case 00:
  case 01:
  case 02:
  case 03:
  case 04:
  case 05:
  console.log("Доброї ночі")
  break;
  case 06:
  case 07:
  case 08:
  case 09:
  case 10:
  case 11:
  console.log("Доброго ранку")
  break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  console.log("Доброго дня")
  break;

  default:
  console.log("Доброго вечора")
  break;

}

//variant 2

if(currentHour>=23 && currentHour <= 5)
   console.log("Доброї ночі");
else if (currentHour>=06 && currentHour<=11)
  console.log("Доброго ранку");
else if (currentHour>=12 && currentHour<=17) 
  console.log("Доброго дня");
else
  console.log("Доброго вечора")
