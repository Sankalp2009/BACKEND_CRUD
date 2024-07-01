// Create a TODO API server in express
// Use any frontend you want, either some TODO frontend you created with React or API testing tools like Postman etc
// If you use react frontend you will get clear idea about a full stack application
// The todo server will have only 1 route. /
// It will accept 4 different methods, GET, POST, PUT, DELETE.
// you can use a simple file based storage if you want.
// alternatively you can also explore some embedded databases like lowedb or leveldb or nedb. you will find enough examples for using those online. this is optional but it will make saving. retrieving etc very easy

const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(express.json()); 

app.use(cors({
    origin : '*'
}))

const data = fs.readFileSync('./db.json',"utf8");
const parsed_data = JSON.parse(data);

app.get('/api/v1/student', (req, res) => {
    res
    .status(200)
    .json({
        status: 'success',
        data_length: parsed_data.students.length,
        students: parsed_data.students,
    });
})

app.get('/api/v1/student/:id', (req, res) => {
    const params_id = Number(req.params.id);
    const single_student = parsed_data.students.find(el => el.id === params_id);
    
    if(!single_student){
       return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    }

    res
    .status(200)
    .json({
        status: 'success',
        Data: {
          students: single_student,
        },
        
    });
})

app.post('/api/v1/student', function (req, res) {
    const new_student = req.body;

    console.log(JSON.stringify(new_student));

    parsed_data.students.push(new_student);

    const new_data = JSON.stringify(parsed_data);

    fs.writeFileSync('./db.json',new_data);

    res.send("Thanks");
})


app.put('/api/v1/student/:id', (req, res) => {
    const params_id = Number(req.params.id);
    const Changes = req.body;
   
    console.log(Changes);

    const userIndex = parsed_data.students.findIndex(student=> student.id === params_id);
   
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const updatedStudent = {
        ...parsed_data.students[userIndex],
        ...Changes
    };

    parsed_data.students[userIndex] = updatedStudent;
    
    const new_data = JSON.stringify(parsed_data);
    fs.writeFileSync('./db.json',new_data);
    
    res.status(200).json({ 
        message: 'OK',
        data : updatedStudent 
    })

});


app.patch('/api/v1/student/:id', (req, res) => {
    const params_id = Number(req.params.id);
    const Changes = req.body;

    const userIndex = parsed_data.students.findIndex(student=> student.id === params_id);
   
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const updatedStudent = {
        ...parsed_data.students[userIndex],
        ...Changes
    };

    parsed_data.students[userIndex] = updatedStudent;
    
    const new_data = JSON.stringify(parsed_data);
    fs.writeFileSync('./db.json',new_data);
    
    res.status(200).json({ 
        message: 'OK',
        data : updatedStudent 
    })

});

app.delete('/api/v1/student/:id', (req, res) => {
    const params_id = Number(req.params.id);

    const initialLength = parsed_data.students.length;
    parsed_data.students = parsed_data.students.filter(student => student.id != params_id);

    if (parsed_data.students.length === initialLength) {
        return res.status(404).send("Student not found");
    }

    const new_data = JSON.stringify(parsed_data);
    
    fs.writeFileSync('./db.json',new_data);

    res.send("success");
});

app.listen(9000,()=>{
    console.log('Server running at http://127.0.0.1:9000')
});