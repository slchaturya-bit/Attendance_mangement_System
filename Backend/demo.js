
const express = require('express');
const app = express();
let users = [];
app.use(express.json());
app.get('/ace', (req, res) => {
    res.send("hello ace world");
});

 app.get('/', (req, res) => {
     res.send('hello root');
});

// app.listen(3000, () => {
//     console.log('server is running on port 3000');
// });
app.post("/users",(req,res)=>{
    //console.log(req.body);
    users.push(req.body);
    res.json({ message:'user data recieved'});

});
app.post("/users/:id",req,res)=>{
    const user = req.params.id;
    console.log(user);
    res.json(message'user is is ${user}')
};
//put-->update
//patch-->update specific data
app.get("/users",(req,res)=>{
    
    res.json(users);

});

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});
