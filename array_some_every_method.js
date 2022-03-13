const numbers = [2,55,9,59,5,69,8,78];


// sayıların tamamı 0 dan büyük mü ?
const data_1 = numbers.every((sayi)=>{
    return sayi >0;
});
console.log(data_1);

// sayıların herhangi biri 0 dan büyük mü ?
const data_2 = numbers.some((sayi)=>{
    return sayi >0;
});
console.log(data_2);
