/* if - если
   else - иначе
   else if - иначе, если
   typeof - проверка на тип данных
  "isNan" - это функция JavaScript, которая проверяет, является ли переданное значение числом или нет. Если значение является числом, то функция вернет false, а если нет - true.
   && - (Оператор И) говорит нам о том, что есть ещё одна проверка на true
   || - (Оператор ИЛИ) говорит что в условии есть несколько частей
*/



var a = +prompt('Введите время')


switch (a) {
   case 1:
      alert('Час ночи')

      break;
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
      alert(a + ' часа ночи')


   case 7:
   case 8:
   case 9:
   case 10:
      alert(a + ' часов ночи утра')

   case 11:
   case 12:
      alert(a + ' часа дня')
      break;
   case 13:
      alert(' час дня')
      break;
   case 14:
      alert(' 2 часа дня')
      break;
   case 15:
      alert(' 3 часа дня')
      break;
   case 16:
      alert(' 4 часа дня')
      break;
   case 17:
      alert(' 5 часа дня')
      break;
   case 18:
      alert(' 6 часов вечера')
      break;
   case 19:
      alert(' 7 часов вечера')
      break;
   case 20:
      alert(' 8 часов вечера')
      break;
   case 21:
      alert(' 9 часов вечера')
      break;
   case 22:
      alert(' 10 часов вечера')
      break;
   case 23:
      alert(' 11 часов вечера')
      break;


   default:
      alert('Ошибка')
      break;
}
















