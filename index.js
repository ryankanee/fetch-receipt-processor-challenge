const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
const receiptsRoutes = require('./routes/receiptsRoutes');
app.use('/receipts', receiptsRoutes);

app.get('/', (req, res) => {
  res.send('Hello Fetch!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
