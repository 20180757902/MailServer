const express = require('express');
const app = express();
const cors = require('cors')
const router = require("./routes/mailsender.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const port = process.env.PORT || 3000;
app.use (cors())
app.use("/api/mail", router);

app.get("/", (req, res)=>{
    res.send("pagina principal");
    });


app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto", port);
    })
    