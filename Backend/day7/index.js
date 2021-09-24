const express=require('express');
const app=express();

const s=(req,res)=>{
 res.send("hello");
};
app.get('/',s);


app.get(/.*fly$/,(req,res) =>
{
  res.send('abcd');
}
);


app.listen(5000);