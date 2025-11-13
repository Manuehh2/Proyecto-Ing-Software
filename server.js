const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;
const app = express();
const connectDB = require("./config/db");
const {errorHandler} = require("./middleware/errorMiddleware");
const colors= require("colors");

connectDB();


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/tareas", require("./routes/tareasRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));


app.listen(port,()=> console.log(`Servidor iniciado en el puerto ${port}`));
app.use(errorHandler);