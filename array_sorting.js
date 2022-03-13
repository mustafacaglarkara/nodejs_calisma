const numbers = [2,55,9,59,5,69,8,78];

numbers.sort()

console.log(numbers); //[2,5,55,59,69,78,8,9] çıktısı

console.log(numbers.reverse())  // tersine çevirir.

let doctors = [
    {name:"Mustafa",age:39},
    {name:"Ülkü",age:38},
    {name:"Öykü",age:9}
]

// küçükten büyüğü sıralama
doctors.sort((d1,d2)=>{
    if(d1.age > d2.age) return +1;
    if(d1.age === d2.age) return 0;
    if(d1.age < d2.age) return -1;
}).reverse(); // reverse ile tersine çevirdik
console.log(doctors)
