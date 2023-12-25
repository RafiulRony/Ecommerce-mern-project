const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isLoggedIn= (req, res, next) => {
    const login=true;
    if(login){
        req.body.id = 101;
        next();
    }
    else{
        res.status(401).json({
            message: 'please login first'
        });
    }
}

app.get('/test', (req,res)=>{
    res.status(200).send({
        message: '(get)api test',
    });
})
app.get('/user',isLoggedIn, (req,res)=>{
    console.log(req.body.id);
    res.status(200).send({
        
        message: 'user logged in',
    });
})
app.put('/test', (req,res)=>{
    res.status(200).send({
        message: '(put)api test',
    });
})
app.delete('/test', (req, res)=>{
    res.status(200).send({
        message: '(delete)api test',
    })
})

app.listen(3000, ()=>{
    console.log(`Server is running on http://localhost:3000`)
})
