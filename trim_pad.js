// pad start, pad end trim start trim end

let minute = '4';
let hour = '8';

// başına belirtilen miktar kadar ekler
console.log(minute.padStart(3,'0'));
// sonuna belirtilen miktar kadar ekler
console.log(hour.padEnd(3,'0'));

let isim = ' Mustafa Caglar KARA  ';
console.log(isim.length);
isim = isim.trim();
console.log(isim.length);
