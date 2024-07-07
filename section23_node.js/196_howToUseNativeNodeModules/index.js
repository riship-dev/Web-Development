const fs = require("fs");
/*
fs.writeFile (
    "./section23_node.js/196_howToUseNativeNodeModules/message.txt", 
    "Hello from Rishi", 
    (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    }
);
*/
console.log (
    fs.readFile (
        "./section23_node.js/196_howToUseNativeNodeModules/message.txt",
        "utf8",
        (err, data) => {
            if (err) throw err;
            console.log(data);
        }
    )
);