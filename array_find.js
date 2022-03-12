const person = [
    {name:"Mustafa",surname:"KARA",yas:38,departman:"Yazılım"},
    {name:"Ülkü",surname:"KARA",yas:38,departman:"Yönetim"},
    {name:"Öykü",surname:"KARA",yas:9,departman:"Öğrenci"}
]

const result = person.find((kisi)=>{
    return kisi.name ==="Mustafa";
})

console.log(result);
