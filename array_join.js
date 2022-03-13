// array join
const numbers = [1,2,3,4,5,6,7,8,9];

let birlesecek_veri = numbers.join(); // 1,2,3,4,5,6,7,8,9
let birlesecek_veri_2 = numbers.join("-"); // 1-2-3-4-5-6-7-8-9

console.log(birlesecek_veri);
console.log(birlesecek_veri_2);

let message = `Merhabalar benim adım Mustafa`;
const array_message = message.split(" ");
console.log(array_message); // [ 'Merhabalar', 'benim', 'adım', 'Mustafa' ]
console.log(array_message.join(" ")); // Merhabalar benim adım Mustafa



