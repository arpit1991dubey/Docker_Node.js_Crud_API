import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
const app= express();
const PORT =5000;
/*********************************************************/
//Middlewares
app.use(bodyParser.json());
app.use('/users',userRoutes);
/*********************************************************/
//Listener
app.listen(PORT, ()=>console.log(`Server running of port : ${PORT}`));

/*********************************************************/
//Enpoints starting here

//#1 app end point
app.get('/',(req,res)=>{
   console.log("The first end point works "); 
   res.send('Hello from home !!');
})

