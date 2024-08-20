const express = require("express");
const cors = require('cors');


const app = express();

app.use(express.urlencoded({extended : true}));
app.use(cors({
    origin : "*"
}))


const PORT = process.env.port || 8000

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})


app.get("/",(req,res)=>{
    console.log('Succesfully sent get request to JOSAA backend');
    res.send("Succesfully sent get request to JOSAA backend");
})