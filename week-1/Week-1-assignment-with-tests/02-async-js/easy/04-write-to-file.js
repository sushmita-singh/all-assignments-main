const fs = require("fs");

fs.writeFile("file.txt","my name is popo!",(err) => {
    if (err) throw err;
  });

fs.readFile("file.txt","utf8",(err,data)=>{
    if (err) throw err;
    console.log(data);
});

function sum(n) {
    sum = 0;
    for (var i = 0; i < n; i++) {
        sum += i;
    }
    console.log(sum);
}