// ES6 features MAP
const numbers = [1,2,3,4,5,6,7,8,9];
let carp_iki = [];
let carp_iki_1 = numbers.map((item)=>{
    return item*2;
});
// numbers array içindeki verileri iki ile çarpıp carp_iki dizisine 
// map fonksiyonu ile atama
//numbers.map((item)=>{
//       carp_iki.push(item*2);
//});
//console.log(...carp_iki);

// yukarıdaki ile aynı
for(let item of numbers){
    carp_iki.push(item*2);
}
console.log(carp_iki);
console.log(carp_iki_1);


