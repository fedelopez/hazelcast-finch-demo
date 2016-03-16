var fs = require('fs');

var jsFolder = './src/main/resources/js';
fs.createReadStream('./node_modules/codemirror/lib/codemirror.js').pipe(fs.createWriteStream(jsFolder + '/codemirror.js'));
fs.createReadStream('./node_modules/codemirror/mode/javascript/javascript.js').pipe(fs.createWriteStream(jsFolder + '/javascript-mode.js'));
fs.createReadStream('./node_modules/jquery/dist/jquery.min.js').pipe(fs.createWriteStream(jsFolder + '/jquery.min.js'));
fs.createReadStream('./node_modules/rx/dist/rx.all.min.js').pipe(fs.createWriteStream(jsFolder + '/rx.all.min.js'));
fs.createReadStream('./node_modules/rx-dom/dist/rx.dom.min.js').pipe(fs.createWriteStream(jsFolder + '/rx.dom.min.js'));

var cssFolder = './src/main/resources/css';
fs.createReadStream('./node_modules/codemirror/lib/codemirror.css').pipe(fs.createWriteStream(cssFolder + '/codemirror.css'));
fs.createReadStream('./node_modules/codemirror/theme/dracula.css').pipe(fs.createWriteStream(cssFolder + '/dracula.css'));

