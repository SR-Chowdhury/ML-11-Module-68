const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

// Middleware
const cors = require('cors');
app.use(cors());
app.use(express.json());

const {
    MongoClient,
    ServerApiVersion,
    ObjectId
} = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hcsitps.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        const coffeeCollection = client.db("coffeeDB").collection("coffee");

        // GET
        app.get('/coffee', async (req, res) => {
            const cursor = coffeeCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        // CREATE
        app.post('/coffee', async (req, res) => {
            const coffee = req.body;
            console.log('New Coffee: ', coffee);

            const result = await coffeeCollection.insertOne(coffee);
            res.send(result);
        });

        // EDIT / SINGLE VIEW
        app.get('/coffee/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id : new ObjectId(id)};
            const result = await coffeeCollection.findOne(query);
            res.send(result);
        });

        // UPDATE
        app.put('/coffee/:id', async (req, res) => {
            const id = req.params.id;
            const coffee = req.body;
            console.log(id, coffee);
            const query = { _id: new ObjectId(id)};
            const options = { upsert : true };
            const updatedCoffee = {
                $set: {
                    coffeeName : coffee.coffeeName,
                    availableQuantity : coffee.availableQuantity,
                    supplier : coffee.supplier,
                    taste : coffee.taste,
                    photo : coffee.photo
                }
            }
            const result = await coffeeCollection.updateOne(query, updatedCoffee, options);
            res.send(result);
        });

        // DELETE
        app.delete('/coffee/:id', async (req, res) => {
            const id = req.params.id;
            console.log('Deleted id : ', id);
            const query = { _id : new ObjectId(id)};
            const result = await coffeeCollection.deleteOne(query);
            res.send(result);
        });



        // Send a ping to confirm a successful connection
        await client.db("admin").command({
            ping: 1
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);








app.get('/', (req, res) => res.send('Bismillahir Rahmanir Rahim! ML-11-Module-68'));

app.listen(port, () => console.log(`Server is running from port: ${port}`));