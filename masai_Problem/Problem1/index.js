// create a simple nodejs program to edit files, based on arguments passed.
// the program will support basic file reading, deleting, creating and appending operations

// node index.js read test.txt will output the content of file
// similarly append CONTENT test.txt will append the 'content' at the end of the file
// delete test.txt will delete the file
// create test.txt will create a new file
// rename test.txt new.txt will rename the file
// list . will list everything in current directory. (other paths should also support)

const fs = require('fs');
const yargs = require('yargs');


yargs.command({
    command: 'write',
    describe: 'Write a file',
    handler: (argv) => {
        console.log(argv);
        const filePath = argv.file;
        const data = argv.content
        fs.writeFile(filePath,data,'utf8', (err) => {
            if (err) console.error(`Error reading file from disk: ${err}`);
            console.log("Writing file to disk")
        });
    }
});


yargs.command({
    command: 'read',
    describe: 'Read a file',
    handler: (argv) => {
        const filePath = argv.file;
        fs.readFile(filePath,"utf8",(err, data)=>{
            if(err) console.log("Reading failed");
            console.log(data)
        });
    }
});

yargs.parse()