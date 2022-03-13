// array slice concat
const num_1 = [1,2,3,4,5];

const num_2 = [6,7,8,9];

// array birleştirme
let birlesim = num_1.concat(num_2);
console.log(birlesim);

//slice ile belirtilen indexden itibaren verileri alır.
console.log(birlesim.slice(0,2));
