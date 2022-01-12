const express = require ("express")

const app = express()

app.use ( express.static("public"))

app.listen (3030, () =>{
    console.log("server up")
})
app.get("/home", (req,res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/detalleDeProducto", (req,res) => {
    res.sendFile(__dirname + "/views/detalleDeProducto.html")
})

app.get("/carritoDeCompras", (req,res) => {
    res.sendFile(__dirname + "/views/carritoDeCompras.html")
})

app.get("/formularioDeRegistro", (req,res) => {
    res.sendFile(__dirname + "/views/formularioDeRegistro.html")
})

app.get("/formularioDeLogin", (req,res) => {
    res.sendFile(__dirname + "/views/formularioDeLogin.html")
})

