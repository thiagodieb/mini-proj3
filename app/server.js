const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('mini-proj3')
})

var experts = [{'id':1,'categoria':'Veterinario','nome':'Roberto','nivel':2},
                 {'id':2,'categoria':'Vendedor','nome':'Ricardo','nivel':3},
                 {'id':3,'categoria':'Higienizacao','nome':'Paulo','nivel':1},
                 {'id':4,'categoria':'Veterinario','nome':'Joao','nivel':2},];

var sponsors = [{'id':1,'nome':'Roberto','valor':200.00},
                 {'id':2,'nome':'Ricardo','valor':2002.00},
                 {'id':3,'nome':'Paulo','valor':1300.00},
                 {'id':4,'nome':'Joao','valor':100.00},];


app.get('/sponsors', (req, res) => {
  res.json(sponsors);
}).post('/sponsors', (req, res) => {
  if(req.body.id && req.body.nome){
    sponsors.push(req.body);
    res.json(sponsors);  
  }
  res.json({"error":"campos inválidos"});
})

app.get('/experts', (req, res) => {
  res.json(experts);
}).post('/experts', (req, res) => {
  if(req.body.id && req.body.nome){
    experts.push(req.body);
    res.json(experts);  
  }
  res.json({"error":"campos inválidos"});
  
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
