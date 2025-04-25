let table = document.createElement('table');

let row = table.insertRow(); // добавим строку

let cell1 = row.insertCell(); // добавим ячейки
let cell2 = row.insertCell();

cell1.innerHTML = 'Текст ячейки 1'; // вставим текст
cell2.innerHTML = 'Текст ячейки 2';

// Отобразим таблицу на странице
document.body.appendChild(table);
