const yargs = require ('yargs');
const cliParameters = require ('cli-parameter-getter').get();
const fs = require('fs');
const data = require('./db.json');
const Str_data = JSON.stringify(data);
// Create crud Notes application using input arguments from terminal

// CASE 1: Using Yargs CLI

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    handler: function () {
        fs.writeFile ("./notes.txt",Str_data,"utf8",(err)=>{
            if (err) console.log(err);
            console.log("added note Successfully");
        });
    }})

    yargs.command({
        command: 'remove',
        describe: 'Removing a note',
        handler: function () {
            fs.unlink("./notes.txt",(err)=>{
                if (err) console.log(err);
                console.log("note Deleted Successfully");
            });
        }})
        
        yargs.command({
            command: 'rename',
            describe: 'rename path',
            handler: function () {
                fs.rename("./notes.txt","new.txt",(err)=>{
                    if (err) console.log(err);
                    console.log("Rename Successfully");
                });
            }})

            yargs.command({
                command: 'read',
                describe: 'Reading a note',
                handler: function () {
                    fs.readFile("./notes.txt","utf8",(err, data)=>{
                        if (err) console.log(err);
                        const result = JSON.parse(data);
                        console.log(result);
                    });
                }})   
   
 yargs.parse();

// CASE 1: Using cliParameters
//  console.log(cliParameters);
// const addParameter = cliParameters[0];
// let para1 = addParameter.name;
// let para2 = addParameter.value;

// switch(para1) {
//     case "add": console.log(para2); break;
//     case "list": console.log(para2); break;
//     case "read": console.log(para2); break;
//     case "remove": console.log(para2); break;
//     case "default" : console.log("Hurray!!");
// }