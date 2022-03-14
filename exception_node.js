function bol(a, b) {
    if (b === 0 || a===0) {
        throw new SyntaxError("Sıfıra Bölme Hatası");
    }
    if(b < 5){
        throw "B 5 den küçük olamaz";
    }
    return a / b;
}
try{
    console.log(bol(10, 0));
}catch (e){
    console.log(e); // Hatayı basar direk
    console.log(e.name); //SyntaxError
    console.log(e.message);//Sıfıra Bölme Hatası
}
finally {
    console.log("İşlem sonra erdi.");
}
