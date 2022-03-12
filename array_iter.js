const numbers = [2,55,9,59,5,69,8,78];

// for iter index
for(let index=0; index<numbers.length; index++){
    console.log(numbers[index]);
}

// for iter in
for(let item in numbers){
    console.log(numbers[item]);
}
//for iter of
for(let item of numbers){
    console.log(item);
}
// foreach index number
numbers.forEach((index,num)=>{
    console.log(`Number ${num} index : ${index}`)
})

console.log(numbers);





