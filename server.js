const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;
app.use(express.static('public'));
app.use('/admin', express.static('admin'));
app.listen(PORT,()=>console.log('Extreme UI Server Running'));
