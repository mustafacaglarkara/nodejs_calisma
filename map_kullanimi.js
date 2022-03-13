// Set kullanımı

let map = new Map();

map.set('isim', "Mustafa Çağlar")
map.set('soyisim', "KARA");

console.log(map);

let deger = map.get('isim');
console.log(deger); // Mustafa Çağlar
console.log(map.has('isim'))  // true
console.log(map.values()) // 'Mustafa Çağlar' , 'KARA'
console.log(map.keys()) // 'isim' , 'soyisim'

map.delete('soyisim')  // delete soy isim key
map.clear() // map i temizler.
