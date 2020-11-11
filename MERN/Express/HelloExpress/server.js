const express = require("express")
const app = express()
const port = 8000
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const users = [
    {firstName: "Reimu", lastName: "Hakurei"},
    {firstName: "Marisa", lastName: "Kirisame"},
    {firstName: "Sanae", lastName: "Kochiya"},
    {firstName: "Sakuya", lastName: "Izayoi"},
    {firstName: "Momiji", lastName: "Inubashiri"},
]

// GET Data
// req is shorthand for request
// res is shorthand for response
app.get('/api', (req,res) => {
    res.json(users);
});

// POST Data
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from Reactcopy
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
});

// Route Parameters

// ******************* Getting Data from a URL ******************************
// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
        // we can get this `id` variable from req.params
        console.log(req.params.id);
        // assuming this id is the index of the users array we could return one user this way
        res.json( users[req.params.id] );
    });

// ************************ Update Data *************************************
// updating data using a put request
app.put("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json( { status: "ok" } );
});

// *********************** Deleting Data *****************************
// deleting data using a delete request
app.delete("/api/users/:id", (req,res) => {
    // we can get this `id` varaible from req.params
    const id = req.params.id
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1)
    // always need to respond with something afterwards
    res.json({status: ok});
})
app.listen(port, () => {console.log(`Listening on port: ${port}`)})