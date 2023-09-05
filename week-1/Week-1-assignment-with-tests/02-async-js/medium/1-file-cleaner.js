const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) throw err;
    
    // Split the data into an array of words
    const words = data.split(" ");
    console.log(words);
    
    // Remove empty strings and join the words back with a single space
    const cleanedData = words.filter(word => word.trim() !== "").join(" ");

    fs.writeFile("file.txt",cleanedData, (err) => {
        if(err) throw err;
    });
    console.log(cleanedData);
});