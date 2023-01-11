const express = require("express")
const mysql = require("mysql")
const myconn = require("express-myconnection")

// Inicializaciones
const app = express()
app.set("port", process.env.PORT || 9000)
const dboptions = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Cambiar123?.",
    database: "device-curf"

}

// Middewares
app.use(myconn(mysql, dboptions, "single"))


// Routes
app.get("/", (req, res) => {
    res.send("The man Pie..")
});


//Server running
app.listen(app.get("port") , () => {
    console.log("Server running on port:", app.get("port"))
});