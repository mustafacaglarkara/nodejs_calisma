// filtering object
let numbers = [1,2,3,4,5,6];

let onlyOddNumbers = [];

for(let num of numbers){
    if(num % 2 === 1){
        onlyOddNumbers.push(num);
    }
}

console.log(onlyOddNumbers);

const onlyOddNumbers_1 = numbers.filter((num)=>{
    return num % 2 ===1;
})
console.log(onlyOddNumbers_1);
