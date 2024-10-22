const express=require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');

//middleware
dotenv.config();
app.use(cors());
app.use(express.json()); //middleware to parse json data

const url = process.env.MONGO_URL;
const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send('hello world');
})

//mongodb configuration


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a database
    const booksCollections = client.db("BookInventory").collection("books");

    //create a new book
    app.post("/upload-book",async(req,res)=>{
        const data=req.body;
        const result = await booksCollections.insertOne(data);
        res.send(result);
    });

    //get all books from database
    // app.get("/allBooks",async(req,res)=>{
    //     const books= booksCollections.find();
    //     const results=await books.toArray();
    //     res.send(results);
    // })


    // update a book by its data using patch or update method

    app.patch("/book/:id",async(req,res)=>{
        const {id}=req.params;
        console.log(id);
        const updateBookData=req.body;
        const filter={_id: new ObjectId(id)};
        const options={upsert:true};

        const updateDoc={
            $set:{
                ...updateBookData
            }
        }

        //update the book
        const result = await booksCollections.updateOne(filter,updateDoc,options);
        res.send(result);

    })

    //delete a book data from database

    app.delete("/book/:id", async(req,res)=>{
        const {id}=req.params;
        const filter={_id: new ObjectId(id)};
        const result = await booksCollections.deleteOne(filter);
        res.send(result);
    })

    //filter books by category,author name etc

    app.get("/allBooks", async(req,res)=>{
        let query={};
        if(req.query?.category){
            query={category: req.query.category}
        }
        const result = await booksCollections.find(query).toArray();
        res.send(result);
    })

    // to get a single book data
    app.get("/book/:id", async(req,res)=>{
      const {id}=req.params;
      const filter={_id: new ObjectId(id)};
      const result = await booksCollections.findOne(filter);
      res.send(result);
    })







    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
});

