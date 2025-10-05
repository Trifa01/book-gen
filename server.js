import express from "express"
const app = express()
const port = 3000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/gen', (req, res)=> {
    const usrMsg = req.body.usr_msg
    res.send(usrMsg)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
