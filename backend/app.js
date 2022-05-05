const express = require('express');
const app = express();
const cors = require('cors');
const nameRoutes = require('./routes/nameRoutes')

app.use(cors());
app.use(express.json());
app.use('/', nameRoutes);

app.listen(5000, () => console.log("The app is running on port 5000."));