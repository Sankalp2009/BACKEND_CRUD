import fs from 'fs';
import chalk from 'chalk';
import Promise from "fs/promises";
// Synchronous

// Write the file
// fs.writeFileSync('notes.txt', 'Learn how to get up and running with Supabase through tutorials, APIs and platform resources.');


// Read the file
// const data = fs.readFileSync("./notes.txt", "utf-8");
// console.log(chalk.white.bold.inverse(data));


// Overwriting and appending files
// fs.appendFileSync('./notes.txt','Supabase provides a full Postgres database for every project with Realtime functionality, database backups, extensions, and more.','utf-8');


// Asynchronous
// case 1: Promise Api

// writing 

// try {
//    Promise.writeFile('LectureP.txt', 'Learn how to get up and running with Supabase through tutorials, APIs and platform resources.',"utf8");
//      console.log(chalk.blue("Writing Successful"))
// } catch (error) {
//     console.log(error);
// }

// Reading

// try {
//    const data = await Promise.readFile("./LectureP.txt","utf8"); 
//  console.log(chalk.magenta.inverse.bold(data));
// } catch (error) {
//     console.log(chalk.red(error));
// }

// Appending
// try {
//     Promise.appendFile('LectureP.txt', 'Billu Mera Bhai',"utf8");
//       console.log(chalk.blue("append Successful"))
//  } catch (error) {
//      console.log(error);
//  }

// Case 2 : Using Callback Api

// Writing the file 
// fs.writeFile("LecturesC.txt","A FIG Driver written in JavaScript which aims to fully implement the FIGfont spec.","utf8",(error)=>{
//     if(error) console.log(chalk.red("Writing failed"));
//     console.log(chalk.green("Writing successfully"));
// })

// Reading the file
fs.readFile("./LecturesC.txt",(err, data)=>{
    if(err) console.log(chalk.red("Reading failed"));
    console.log(chalk.magenta.underline.bold(data))
});

console.log(chalk.bgRed.bold(process.argv[2]));