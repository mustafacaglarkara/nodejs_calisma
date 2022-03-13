// Set kullanımı

let sayilar = new Set();

// set veri ekleme
sayilar.add(12).add(33).add(28);

console.log(sayilar);

// set veri var mı ?
console.log(sayilar.has(12));
console.log(sayilar.size);
sayilar.delete(28);  // belirtilen değeri siler.

sayilar.forEach((item)=>{
    console.log(item);
})

sayilar.clear() // sayilari arrayini temizler
