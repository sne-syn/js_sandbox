let txt = 'At the little Paris theatres, on the other hand, you will not only hear the people yelling out "Ah gredin! Ah monstre:" and cursing the tyrant of the play from the boxes; but the actors themselves positively refuse to play the wicked parts, such as those of infames Anglais, brutal Cossacks, and what not, and prefer to appear at a smaller salary, in their real characters as loyal Frenchmen.';

let regex1 = /brutal/;
let regex2 = /wicked parts/;
// Удалит все пробелы
let regex3 = /\s/;

console.log(regex2);
console.log(regex2.source);
console.log(regex1.test(txt));
console.log(regex2.test(txt));

// console.log(regex1.exec(txt));
// console.log(regex2.exec(txt));

// string object wapper
// match
console.log(txt.match(regex1));

// serach gives us an index
console.log(txt.search(regex2));

// Заменит слово. Возвращает новую строку, существует она сейчас только в выводе консоли
console.log(txt.replace(regex1, 'sweet'));

// Разделит строку на два куска, отправит их в массив и удалит между ними искомое слово/symbol
console.log(txt.split(regex3)); 