let friends = ["Mustafa","Ülkü","Öykü","Şükran","Mustafa","Dilek","Özgür"];

// dizinin içinde includes ile belirtilen veri var mı kontrol ediyor.
console.log(friends.includes("Mustafa")); //true
// belirtien veri dizi içinde kaçıncı index de
console.log(friends.indexOf("Ülkü"));

// belirtilen verinin dizi içindeki en son olanına bakar(eğer veri birden fazla ise)
console.log(friends.lastIndexOf("Mustafa"));
