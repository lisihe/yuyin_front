let Url = require('url')
let a = new Url.URL('http://localhost:8083/music/冯提莫/佛系少女/佛系少女 - 冯提莫.mp3')
console.log(encodeURI('http://localhost:8083/music/冯提莫/佛系少女/佛系少女 - 冯提莫.mp3'))
console.log(Url)
console.log(Url.URL)