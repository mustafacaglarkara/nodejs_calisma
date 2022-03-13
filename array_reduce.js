// Array Reduce
let numbers = [1,2,3,4,5,6];

let sum = 0;

for(let num of numbers){
    sum = sum + num;
}
console.log(sum);

let sum_2 = numbers.reduce((sum,num)=>{
    return sum +num;
})
console.log(sum_2);
