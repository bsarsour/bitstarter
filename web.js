var fs = require("fs");

fs.readFile("index.html", "utf8", function(error, data) {
console.log(data);
});
