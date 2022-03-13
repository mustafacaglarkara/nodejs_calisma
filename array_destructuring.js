// array object destructuring
const person = {
    isim : "Mustafa Çağlar",
    soyisim : "KARA",
    yas : 38,
    adres : {
        isAdresi : "Ulugazi Mah. 100.Yıl Bulvarı",
        evAdresi : "Kazım Karabekir Mah. 927. sokak"
    }
}

function selamlama(user){
    const {isim,soyisim,yas,adres} = user;
    console.log(`Merhabalar ${isim} ${soyisim} yaşın : ${yas} ${adres.evAdresi}`);
}

selamlama(person);


let [a,b,c,d] = [2,3,4,6];

console.log(a,b,c,d);
