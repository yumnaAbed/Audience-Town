const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port=8080;
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/summation.html'));
  //res.send('new');
});

app.use('/', router);
app.listen(port,()=>{
    console.log(`Running at Port ${port}`);
});

