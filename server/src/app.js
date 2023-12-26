const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require('http-error')

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
//client error handling
app.use((req, res, next)=>{
    next(createError(404, 'route not found'));
});
//server error handling
app.use((err, req, res, next)=>{
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
});

app.get('/test', (req,res)=>{
    res.status(200).send({
        message: '(get)api test',
    });
});
app.get('/user',isLoggedIn, (req,res)=>{
    console.log(req.body.id);
    res.status(200).send({
        
        message: 'user logged in',
    });
});
app.put('/test', (req,res)=>{
    res.status(200).send({
        message: '(put)api test',
    });
});
app.delete('/test', (req, res)=>{
    res.status(200).send({
        message: '(delete)api test',
    })
});
module.exports =app;