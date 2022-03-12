let friends = ["Mustafa","Ülkü","Öykü"];
friends.push("Yılmaz");

// belirtilen eleman
friends.shift("Mustafa")
// ilk eleman
friends.shift();
//son eleman
const silinecek_veri = friends.pop();

// silinmeye baslanıcak index , silinecek adet
friends.splice(2,1)

console.log(friends);
console.log(silinecek_veri);
