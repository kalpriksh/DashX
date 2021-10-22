//#region express init
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const www = './';

app.use(cors());
app.use(express.static(www));
console.log(`serving ${www}`);

const mongoose = require('mongoose');

const environment = require('./env.json');

//#region 
// defining schemas
const populationSchema = new mongoose.Schema({
  country : String,
  createdOn : Date,
  population : Number 
}, { collection : 'population' });

const popEntry = mongoose.model('popEntry', populationSchema);

const popEntry1 = new popEntry({
  country : "test_country",
  createdOn : new Date().getUTCDate(),
  population : 2000
})
//#endregion

mongoose.connect(`mongodb+srv://${environment.dev.mongo_username}:${environment.dev.mongo_password}@dashx.dpzpy.mongodb.net/dashx?retryWrites=true&w=majority`,async data =>{}).catch(error => console.log(error));

mongoose.connection.on('error', er => {
    console.log(er);
})

app.get('/headerdata',async (req, res) => {
    if(req.query["tablename"]){
        if(req.query["tablename"] == "population"){

            popEntry.find({ population : {$gt : 1} }).
            sort({id : -1}).
            limit(parseInt(req.query.limit)).
            exec((err,data) => {
                if(err) {
                    console.log(err);
                } else {
                    res.send(data)
                }
            })

        }
    } else {
        res.status(400).send({error : "tablename or sourcename not specified"});
    }
});
  
app.get('/headers/', async (req, res) => {
    console.log(req.query["tablename"]);
    if(req.query["tablename"]){
        
        if(req.query["tablename"] == "population"){
            popEntry.find({ population : {$gt : 1} })
            .sort({id : -1}).
            limit(1).
            exec((err,data) => {
                if(err) {
                    console.log(err);
                } else {
                    try {
                        res.send({headers : Object.keys(data[0]._doc)})
                    } catch (error) {
                        res.sendStatus(500)
                    }
                    
                }
            })
        }
    } else {
        res.status(400).send({error : "tablename not specified"});
    }
})


app.get('/mongo/tables', async(req, res) => {
    
    mongoose.connection.db.listCollections().toArray(function(err, names) {
        if (err) {
            console.log(err);
        }
        else {
            table_names = []
            response_object = {}
            names.forEach(function(e,i,a) {
                table_names.push(e.name)
            });
            response_object["tables"] = table_names

            res.send(response_object)
        }
    });

})



app.listen(port, () => console.log(`listening on http://localhost:${port}`));
  