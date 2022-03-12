//array tanımlama
let friends = ["Mustafa","Ülkü","Öykü"];

//array veri ekleme
friends.push("Yılmaz");

//veri ekleme
friends.unshift("Özgür","Şükran","Dilek")

// veri silme metodu ancak 0 eklersek veri silmez.
friends.splice(3,0,"Deneme");
console.log(friends)
