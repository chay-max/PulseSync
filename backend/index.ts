import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.port || 5000
app.use(cors())
app.get('/', (req, res) => {
    res.send("Hello From Backend")
})

app.listen(port, () => {
    console.log(`listening to http://localhost:${port}`)
})