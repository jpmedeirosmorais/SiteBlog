var express = require("express")
const app = express()

app.get("/", function (req, res){
    res.sendFile(__dirname + "/")
})

app.get("/sobre", function (req, res){
    res.sendFile(__dirname + "/_views/sobre.html")
})

app.get("/contato",function(req, res){
    res.sendFile(__dirname + "/_views/contato.html")
})


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})
