import express from 'express';
import { people } from './people';


let app = new express();

/* body parser needs to place here */
/*app.use(bodyParser.json); */

app.get('/hello', (req, res) => {
    console.log("/hello was called");
    res.send("Hello Friend!!!");
});

app.get('/people', (req, res)=>{
    res.json(people);
});

/* get the people/name end point */

app.get('/people/:name', (req, res) => {
    req.params.name
    let {name} = req.params;
    console.log('the name passed is ' + name);

    let person = people.find(x => x.name === name);

    res.json(person);
});


app.listen(3000, () => {
    console.log("server is listing on 3000 port ");
 });