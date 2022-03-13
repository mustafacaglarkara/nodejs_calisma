// array spread operator
const numbers = [1,2,3,4,5,6,7,8,9];
const numbers_2 = [10,11,12,13,14,15,16,17,18,19,20];
console.log(...numbers); // 1 2 3 4 5 6 7 8 9
console.log(numbers)

// spread ile verileri kopyalama
const sayilar_copy = [...numbers,numbers_2];
console.log(sayilar_copy);
