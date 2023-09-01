import express from "express";
const app = express();
import cors from 'cors';

const route = require('./routes/api').route;


app.use(express.json());

// CORS middleware with express
app.use(
  cors({
    origin: '*',
    //credentials: true
  }),
);

app.use("/api", route);



app.listen(8080 , () => {
  console.log("Server started at port 8080");
})
