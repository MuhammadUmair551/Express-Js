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

const express = require('express')

require("dotenv").config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server chal raha ha ${process.env.PORT} par`);
})

app.get('/', (req, res) => {
    res.send("Home page");
})
app.get('/products', (req, res) => {
    res.send("Sari products ki list")
})

app.post('/products', (req, res)=> {
    res.send("Product add hogaya ha apka");
})

app.get('/products/:id', (req, res) => {
    res.send(`Apne ye id ka ${req.params.id} product manga ha`)
})
