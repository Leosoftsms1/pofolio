const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/index.html',function(req,res){
  res.sendFile(path.join(__dirname,'public', 'index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about.html',function(req,res){
  res.sendFile(path.join(__dirname, 'public','about.html'));
});

router.get('/cont.html',function(req,res){
  res.sendFile(path.join(__dirname, 'public', '/cont.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Server has started Running at Port 3000');
