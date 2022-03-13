let ws = new WeakSet();

const object1 = {};
const object2 = {};

ws.add(object1);
ws.add(object2);

console.log(ws);
console.log(ws.has(object1)); // true öner

ws.delete(object1); // object1 i ws den siler.

const wm = new WeakMap();

const obj1 = {};
const obj2 = {};
ws.set(obj1,123456); // burda hata var.
console.log(ws);
ws.delete(obj1);
