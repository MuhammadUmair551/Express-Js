// const express = require("express");

// const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello, mera pehla express server");
// })

// app.get('/about', (req, res)=> {
//     res.send("This is about page");
// })
// app.listen(3000, () => {
//     console.log("Server 3000 par chal raha ha");
// });


// Routing

// const express = require('express')

// require("dotenv").config();

// const app = express();

// app.listen(process.env.PORT, () => {
//     console.log(`Server chal raha ha ${process.env.PORT} par`);
// })

// app.get('/', (req, res) => {
//     res.send("Home page");
// })
// app.get('/products', (req, res) => {
//     res.send("Sari products ki list")
// })

// app.post('/products', (req, res)=> {
//     res.send("Product add hogaya ha apka");
// })

// app.get('/products/:id', (req, res) => {
//     res.send(`Apne ye id ka ${req.params.id} product manga ha`)
// })

// Middleware

// const express = require("express");
// require("dotenv").config()
// const app = express();

// function requestTime(req, res, next) {
//     const date = new Date();
//     console.log(`Request aye: ${date}`)

//     if (req.url === "/admin") {
//         return res.send("Access Denied");
//     }
//     next()
// }

// app.use(requestTime)

// app.get('/', (req, res) => {
//     res.send("Welcome to Home page");
// })

// app.get('/products', (req, res) => {
//     res.send("Sari products");
// })

// app.listen(process.env.PORT, () => {
//     console.log('Server chal raha');
// })


// REST APIs (CRUD)

const express = require('express');

require("dotenv").config();

const app = express();

app.use(express.json()); // Ye ek middleware ha jo request say anay walay raw data ko Json may convert karta ha

let tasks = [
    { id: 1, title: "Learning" },
    { id: 2, title: "Read" },
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
})

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));
    if (!task) {
        return res.status(404).json({ message: `Is ID ka koi task nahi ha!` });
    }
    res.json(task);
})

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    }
    tasks.push(newTask);
    res.status(201).json(newTask);
})

app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));
    if (!task) {
        return res.status(404).json({ message: `Is Id ka koi task ha hi nahi update karny ko` });
    }
    task.title = req.body.title;
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(task => task.id !== req.params.id);
    res.json({ message: `task deleted successfully` });
})

app.listen(process.env.PORT, ()=> {
    console.log(`Server chal raha ha ${process.env.PORT} par`);
});

