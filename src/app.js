

import express from "express"


const app = express();

app.use("/test",(req,res)=>{
 
   res.send("we are lisning on this server ")
})


app.listen(3000, ()=>{

    console.log("my server is running on 3000 ")
});


