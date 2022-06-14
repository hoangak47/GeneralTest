const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.json(['Welcome to the API'])
})
app.listen(5000, () => {
    console.log('listening on port 5000')
})