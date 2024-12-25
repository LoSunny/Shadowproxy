// https://github.com/Yuheng0101/X/blob/main/Scripts/tidal.js

console.log('hello1');
console.log(JSON.stringify($request));
console.log('hello2');
console.log($request.url);
console.log('hello3');
console.log(new URLSearchParams($request.url).get('audioquality'));
console.log('End');
