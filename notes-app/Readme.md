* How to use In-Built and Third-Party Modules
* Third-Party Module like Chalk to o/p in color
* File system
* Sync + Asynchronous + Callback File System
* Nodemon (automatic starter of File)
* Command Line Args (yargs) ;
## Syntax Pattern

*** Promise Based Api
* Import Promise from "fs/promises"
* Use Try/Catch block for handling Promises 
* Promise.method("path","data","encoding")

* To readFile : const var = await Promise.readFile("path","encoding");

*** Callback Based Api
* similar to synchronous based api
* fs.method("path","data","encoding",(err, data) =>{})

* To readFile : fs.readFile(path,"encoding(option)",(err, data)=>{
    if(err) console.log(chalk.red("Reading failed"));
    console.log(chalk.magenta.underline.bold(data))
});